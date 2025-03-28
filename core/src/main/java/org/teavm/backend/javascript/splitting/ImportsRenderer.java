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

import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;
import org.teavm.backend.javascript.codegen.NamingStrategy;
import org.teavm.backend.javascript.codegen.SourceWriter;
import org.teavm.backend.javascript.codegen.SourceWriterSink;
import org.teavm.backend.javascript.rendering.RenderingUtil;
import org.teavm.model.AccessLevel;
import org.teavm.model.BasicBlock;
import org.teavm.model.ClassHolder;
import org.teavm.model.ElementModifier;
import org.teavm.model.FieldHolder;
import org.teavm.model.FieldReference;
import org.teavm.model.ListableClassHolderSource;
import org.teavm.model.MethodHolder;
import org.teavm.model.MethodReader;
import org.teavm.model.MethodReference;
import org.teavm.model.Program;
import org.teavm.model.ValueType;
import org.teavm.model.VariableReader;
import org.teavm.model.instructions.AbstractInstructionReader;
import org.teavm.model.instructions.InvocationType;

public class ImportsRenderer {
    private final ListableClassHolderSource classes;
    private final ListableClassHolderSource allClasses;
    private final Set<String> runtimeLibraryExports;
    private final Set<String> runtimeLibraryClasses;
    private final NamingStrategy naming;
    private final Set<String> usedFunctions = new HashSet<>();

    public ImportsRenderer(
            ListableClassHolderSource classes,
            ListableClassHolderSource allClasses,
            Set<String> runtimeLibraryExports,
            Set<String> runtimeLibraryClasses,
            NamingStrategy naming
    ) {
        this.classes = classes;
        this.allClasses = allClasses;
        this.runtimeLibraryExports = runtimeLibraryExports;
        this.runtimeLibraryClasses = runtimeLibraryClasses;
        this.naming = naming;
    }

    public Map<String, Set<String>> collectImports() {
        ImportsCollector imports = new ImportsCollector(classes.getClassNames(), naming);
        for (String name: runtimeLibraryExports) {
            if (usedFunctions.contains(name)) {
                imports.registerImport("org.teavm.runtime", name);
            }
        }

        for (String className : classes.getClassNames()) {
            ClassHolder cls = classes.get(className);
            if (cls.getParent() != null) {
                ClassHolder parent = allClasses.get(cls.getParent());
                imports.registerImport(cls.getParent(), naming.className(cls.getParent()).name);
                for (MethodHolder method : parent.getMethods()) {
                    if (method.getName().equals("<init>")) {
                        imports.importMethod(method.getReference());
                    }
                }
            }
            for (String iface : cls.getInterfaces()) {
                imports.registerImport(iface, naming.className(iface).name);
            }
            for (MethodHolder method : cls.getMethods()) {
                Program program = method.getProgram();
                if (program == null) {
                    continue;
                }
                for (BasicBlock block : program.getBasicBlocks()) {
                    block.readAllInstructions(imports);
                }
            }
        }

        return imports.getImports();
    }

    public void emit(SourceWriter writer, Map<String, Set<String>> imports) {
        var sortedImports = imports.entrySet().stream()
                .sorted(Map.Entry.comparingByKey())
                .collect(Collectors.toList());

        for (Map.Entry<String, Set<String>> i : sortedImports) {
            String importAlias = classNameToImportAlias(i.getKey());
            writer.append("let ").append(importAlias).append(" = require(");
            RenderingUtil.writeString(writer, "./" + classNameToFileName(i.getKey()));
            writer.append(");").softNewLine();
        }
        writer.newLine();
    }

    public SourceWriterSink sink = new SourceWriterSink() {
        @Override
        public SourceWriterSink appendFunction(String name) {
            usedFunctions.add(name);
            return this;
        }
    };

    private class ImportsCollector extends AbstractInstructionReader {
        private final Set<String> classNames;
        private final NamingStrategy namingStrategy;
        private final Map<String, Set<String>> imports = new HashMap<>();

        ImportsCollector(Set<String> classNames, NamingStrategy namingStrategy) {
            this.classNames = classNames;
            this.namingStrategy = namingStrategy;
        }

        @Override
        public void invoke(VariableReader receiver, VariableReader instance, MethodReference method,
                List<? extends VariableReader> arguments, InvocationType type) {
            importMethod(method);
        }

        @Override
        public void getField(
                VariableReader receiver,
                VariableReader instance,
                FieldReference field,
                ValueType fieldType
        ) {
            importField(field);
        }

        @Override
        public void putField(VariableReader instance, FieldReference field, VariableReader value, ValueType fieldType) {
            importField(field);
        }

        @Override
        public void isInstance(VariableReader receiver, VariableReader value, ValueType type) {
            if (type instanceof ValueType.Object) {
                String className = ((ValueType.Object) type).getClassName();
                registerImport(className, namingStrategy.className(className).name);
            }
        }

        @Override
        public void cast(VariableReader receiver, VariableReader value, ValueType targetType, boolean weak) {
            if (targetType instanceof ValueType.Object) {
                String className = ((ValueType.Object) targetType).getClassName();
                registerImport(className, namingStrategy.className(className).name);
            }
        }

        void importMethod(MethodReference method) {
            if (classNames.contains(method.getClassName())) {
                return;
            }

            MethodReader ref = allClasses.getMethod(method);
            if (ref == null) {
                return;
            }
            if ((ref.getLevel() != AccessLevel.PRIVATE || method.getClassName().equals("java.lang.Object")) && (
                    (!ref.hasModifier(ElementModifier.ABSTRACT) && !ref.getName().startsWith("<"))
                            || (ref.getName().equals("<init>"))
            )) {
                registerImport(method.getClassName(), namingStrategy.methodName(ref.getReference()).name);
                if (ref.getName().equals("<init>")) {
                    registerImport(method.getClassName(), namingStrategy.initializerName(ref.getReference()).name);
                    registerImport(method.getClassName(), namingStrategy.className(method.getClassName()).name);
                }
            }
        }

        private void importField(FieldReference field) {
            if (classNames.contains(field.getClassName())) {
                return;
            }
            ClassHolder cls = allClasses.get(field.getClassName());
            if (cls == null) {
                return;
            }
            FieldHolder ref = cls.getField(field.getFieldName());
            if (ref == null) {
                return;
            }
            if (ref.getLevel() != AccessLevel.PRIVATE && ref.hasModifier(ElementModifier.STATIC)) {
                registerImport(field.getClassName(), namingStrategy.fieldName(ref.getReference()).name);
            }
        }

        void registerImport(String className, String name) {
            if (classes.get(className) != null) {
                return;
            }

            if (runtimeLibraryClasses.contains(extractSourceClassName(className))) {
                className = "org.teavm.runtime";
            }

            Set<String> imports = this.imports.get(className);
            if (imports == null) {
                imports = new HashSet<>();
                this.imports.put(className, imports);
            }
            imports.add(name);
        }

        private String extractSourceClassName(String className) {
            int ix = className.indexOf("$");
            return ix == -1 ? className : className.substring(0, ix);
        }


        public Map<String, Set<String>> getImports() {
            return imports;
        }
    }

    public static String classNameToImportAlias(String className) {
        return className
                .replace('.', '_')
                .replace('<', '_')
                .replace('>', '_') + "_import";
    }

    public static String classNameToFileName(String className) {
        return className
                .replace('<', '_')
                .replace('>', '_') + ".js";
    }
}
