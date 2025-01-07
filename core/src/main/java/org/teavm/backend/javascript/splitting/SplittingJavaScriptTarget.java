/*
 *  Copyright 2025 asm.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
package org.teavm.backend.javascript.splitting;

import java.io.IOException;
import java.io.OutputStream;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.function.Function;
import java.util.stream.Collectors;
import org.teavm.backend.javascript.JSModuleType;
import org.teavm.backend.javascript.JavaScriptTarget;
import org.teavm.backend.javascript.ProviderContext;
import org.teavm.backend.javascript.TeaVMJavaScriptHost;
import org.teavm.backend.javascript.spi.Generator;
import org.teavm.backend.javascript.spi.Injector;
import org.teavm.backend.javascript.spi.MethodContributor;
import org.teavm.cache.MethodNodeCache;
import org.teavm.debugging.information.DebugInformationEmitter;
import org.teavm.dependency.DependencyAnalyzer;
import org.teavm.dependency.DependencyInfo;
import org.teavm.dependency.DependencyListener;
import org.teavm.model.BasicBlock;
import org.teavm.model.ClassHolder;
import org.teavm.model.ClassHolderTransformer;
import org.teavm.model.ElementModifier;
import org.teavm.model.FieldReference;
import org.teavm.model.ListableClassHolderSource;
import org.teavm.model.MethodDescriptor;
import org.teavm.model.MethodHandle;
import org.teavm.model.MethodHolder;
import org.teavm.model.MethodReader;
import org.teavm.model.MethodReference;
import org.teavm.model.MutableClassHolderSource;
import org.teavm.model.Program;
import org.teavm.model.RuntimeConstant;
import org.teavm.model.ValueType;
import org.teavm.model.VariableReader;
import org.teavm.model.instructions.AbstractInstructionReader;
import org.teavm.model.instructions.InvocationType;
import org.teavm.model.util.VariableCategoryProvider;
import org.teavm.vm.BuildTarget;
import org.teavm.vm.MemoryBuildTarget;
import org.teavm.vm.TeaVMTarget;
import org.teavm.vm.TeaVMTargetController;
import org.teavm.vm.spi.RendererListener;
import org.teavm.vm.spi.TeaVMHostExtension;

public class SplittingJavaScriptTarget implements TeaVMTarget, TeaVMJavaScriptHost, JavaScriptTargetBase {
    /**
     * Global flag enabling lots of small patches to make code splitting work
     */
    public static boolean useSplitting = false;

    /**
     * lets JavaScriptTarget access all loaded classes for import generation in splitted source.
     */
    public static ListableClassHolderSource fullSource = null;

    /**
     * $rt_* names exported by org.teavm.runtime
     */
    public static Set<String> runtimeLibraryExports = null;

    /**
     * List of classes emitted into org.teavm.runtime since some $rt_ functions depend on them
     */
    public static final Set<String> runtimeLibraryClasses = new HashSet<>();


    private JavaScriptTarget javaScriptTarget = new JavaScriptTarget();
    private DelegatingTeaVMTargetController targetController = null;


    @Override
    public List<ClassHolderTransformer> getTransformers() {
        return javaScriptTarget.getTransformers();
    }

    @Override
    public List<DependencyListener> getDependencyListeners() {
        if (!javaScriptTarget.getDependencyListeners().isEmpty()) {
            throw new RuntimeException(
                    "JavaScriptTarget now uses dependency listeners. re-check it does not break its reusability"
            );
        }
        return javaScriptTarget.getDependencyListeners();
    }

    @Override
    public void setController(TeaVMTargetController controller) {
        targetController = new DelegatingTeaVMTargetController(controller);
        javaScriptTarget.setController(targetController);
    }

    @Override
    public List<TeaVMHostExtension> getHostExtensions() {
        return javaScriptTarget.getHostExtensions();
    }

    @Override
    public VariableCategoryProvider variableCategoryProvider() {
        return javaScriptTarget.variableCategoryProvider();
    }

    @Override
    public void contributeDependencies(DependencyAnalyzer dependencyAnalyzer) {
        javaScriptTarget.contributeDependencies(dependencyAnalyzer);
    }

    @Override
    public void beforeOptimizations(Program program, MethodReader method) {
        javaScriptTarget.beforeOptimizations(program, method);
    }

    @Override
    public void afterOptimizations(Program program, MethodReader method) {
        javaScriptTarget.afterOptimizations(program, method);
    }

    @Override
    public void emit(ListableClassHolderSource classes, BuildTarget buildTarget, String outputName) throws IOException {
        // here goes the fun!
        useSplitting = true;
        fullSource = classes;

        try {
            // group classes by original class name: java.lang.String -> java.lang.String$<clinit>$lambda$_115_0
            Map<String, Set<String>> bySource = groupBySourceClassName(classes.getClassNames());

            runtimeLibraryExports = emitRuntime(classes, bySource, buildTarget);

            for (Map.Entry<String, Set<String>> classNames : bySource.entrySet()) {
                if (!runtimeLibraryClasses.contains(classNames.getKey())) {
                    emitClass(
                            classNames.getKey(),
                            classes,
                            classNames.getValue().stream().map(classes::get).collect(Collectors.toSet()),
                            buildTarget
                    );
                }
            }

            // TODO automatically generate exports and imports based on DependencyInfo
            // should export: constructors, static fields, static methods
            // should import: runtime library, constructors, static fields, static methods from used classes
            // as for runtime: preferably used symbols only

            DependencyInfo deps = targetController.getDependencyInfo();
        } finally {
            useSplitting = false;
            fullSource = null;
        }

    }

    private void emitClass(
            String sourceClassName,
            ListableClassHolderSource classes,
            Set<ClassHolder> sourceClasses,
            BuildTarget buildTarget
    ) throws IOException {
        final MemoryBuildTarget memoryTarget = new MemoryBuildTarget();
        final String sourceFile = sourceClassName + ".js";

        MutableClassHolderSource classSource = new MutableClassHolderSource();
        for (ClassHolder cls: sourceClasses) {
            classSource.putClassHolder(cls);
        }
        targetController.setEntryPoint(sourceClassName);
        javaScriptTarget.emit(classSource, memoryTarget, sourceFile);

        try (OutputStream os = buildTarget.createResource(sourceFile)) {
            emitImports(sourceClassName, classes);
            os.write(memoryTarget.getContent(sourceFile));
        }
    }

    // TODO this should be in JavaScriptTarget
    // howerver, we need to determine method modifiers by MethodReference which requires full ClassHolderSource
    //   which is not available in JavaScriptTarget
    //   public static ClassHolderSource is required...
    private void emitImports(String className, ListableClassHolderSource classes) {

        // collect imports
        ClassHolder cls = classes.get(className);
        for (MethodHolder method : cls.getMethods()) {
            Program program = method.getProgram();
            if (program == null) continue;
            for (BasicBlock block: program.getBasicBlocks()) {
                block.readAllInstructions(new AbstractInstructionReader() {
                    public void invoke(VariableReader receiver, VariableReader instance, MethodReference method,
                            List<? extends VariableReader> arguments, InvocationType type) {
                            MethodReader m = classes.getMethod(method);
                            if (m == null) return;
                            if (m.hasModifier(ElementModifier.STATIC))
                                System.out.println(method.getClassName() + "." + method.getName());
                    }

                    public void invokeDynamic(VariableReader receiver, VariableReader instance, MethodDescriptor method,
                            List<? extends VariableReader> arguments, MethodHandle bootstrapMethod,
                            List<RuntimeConstant> bootstrapArguments) {

                    }
                    public void getField(VariableReader receiver, VariableReader instance, FieldReference field, ValueType fieldType) {

                    }

                    public void putField(VariableReader instance, FieldReference field, VariableReader value, ValueType fieldType) {

                    }

                });
            }
        }
    }

    // group classes by source class name: java.lang.String -> (java.lang.String, java.lang.String$<clinit>$lambda$_115_0)
    private Map<String, Set<String>> groupBySourceClassName(Set<String> classes) {
        return classes.stream()
                .collect(Collectors.groupingBy(this::extractSourceClassName, Collectors.toSet()));
    }

    private String extractSourceClassName(String className) {
        int ix = className.indexOf("$");
        return ix == -1 ? className : className.substring(0, ix);
    }

    private Set<String> emitRuntime(
            ListableClassHolderSource classes,
            Map<String, Set<String>> classesWithLambdas,
            BuildTarget buildTarget
    ) throws IOException {
        MemoryBuildTarget memoryTarget = new MemoryBuildTarget();
        String runtimeName = "org.teavm.runtime";
        String runtimeFile = runtimeName + ".js";

        // those are used as local variables and not to be exported
        Set<String> excludeExports = Set.of(
                "$rt_putStdoutCustom",
                "$rt_decodeStack",
                "$rt_putStderrCustom",
                "$rt_numberConversionLongArray"
        );

        targetController.setEntryPoint(runtimeName);
        MutableClassHolderSource classSource = new MutableClassHolderSource();

        // for some reason, teavm does not pick this dependency for $rt_throwCCE
        runtimeLibraryClasses.add("java.lang.ClassCastException");
        for (String name: classes.getClassNames()) {
            if ((name.startsWith("java.") || name.startsWith("org.teavm.")) && !name.equals("org.teavm.runtime")) {
                runtimeLibraryClasses.add(extractSourceClassName(name));
            }
        }

        ClassHolder runtimeClassHolder = new ClassHolder(runtimeName);
        classSource.putClassHolder(runtimeClassHolder);
        for (String className: runtimeLibraryClasses) {
            for (String realClassName: classesWithLambdas.get(className)) {
                ClassHolder cls = classes.get(realClassName);
                if (cls != null) {
                    classSource.putClassHolder(cls);
                }

            }
        }

        javaScriptTarget.emit(classSource, memoryTarget, runtimeFile);

        byte[] content = memoryTarget.getContent(runtimeFile);

        Set<String> exports = Arrays.stream(new String(content, StandardCharsets.UTF_8).split("[^\\w_$]"))
                .filter(s -> s.startsWith("$rt_") && !excludeExports.contains(s))
                .collect(Collectors.toSet());

        try (OutputStream os = buildTarget.createResource(runtimeFile)) {
            os.write(content);
            for (String name: exports) {
                os.write(("exports." + name + " = " + name + ";\n").getBytes(StandardCharsets.UTF_8));
            }
        }
        return exports;
    }

    @Override
    public String[] getPlatformTags() {
        return javaScriptTarget.getPlatformTags();
    }

    @Override
    public boolean isAsyncSupported() {
        return javaScriptTarget.isAsyncSupported();
    }

    @Override
    public void add(MethodReference methodRef, Generator generator) {
        javaScriptTarget.add(methodRef, generator);
    }

    @Override
    public void add(MethodReference methodRef, Injector injector) {
        javaScriptTarget.add(methodRef, injector);
    }

    @Override
    public void addGeneratorProvider(Function<ProviderContext, Generator> provider) {
        javaScriptTarget.addGeneratorProvider(provider);
    }

    @Override
    public void addInjectorProvider(Function<ProviderContext, Injector> provider) {
        javaScriptTarget.addInjectorProvider(provider);
    }

    @Override
    public void add(RendererListener listener) {
        javaScriptTarget.add(listener);
    }

    @Override
    public void addVirtualMethods(MethodContributor virtualMethods) {
        javaScriptTarget.addVirtualMethods(virtualMethods);
    }

    @Override
    public void addForcedFunctionMethods(MethodContributor forcedFunctionMethods) {
        javaScriptTarget.addForcedFunctionMethods(forcedFunctionMethods);
    }

    @Override
    public void setObfuscated(boolean obfuscated) {
        javaScriptTarget.setObfuscated(obfuscated);
    }

    @Override
    public void setStrict(boolean strict) {
        javaScriptTarget.setStrict(strict);
    }

    @Override
    public void setMaxTopLevelNames(int maxTopLevelNames) {
        javaScriptTarget.setMaxTopLevelNames(maxTopLevelNames);
    }

    @Override
    public void setDebugEmitter(DebugInformationEmitter debugEmitter) {
        javaScriptTarget.setDebugEmitter(debugEmitter);
    }

    @Override
    public void setAstCache(MethodNodeCache astCache) {
        javaScriptTarget.setAstCache(astCache);
    }

    @Override
    public void setModuleType(JSModuleType moduleType) {
        javaScriptTarget.setModuleType(moduleType);
    }
}
