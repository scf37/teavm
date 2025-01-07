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

import java.util.Properties;
import java.util.Set;
import java.util.function.Predicate;
import org.teavm.cache.CacheStatus;
import org.teavm.common.ServiceRepository;
import org.teavm.dependency.DependencyInfo;
import org.teavm.diagnostics.Diagnostics;
import org.teavm.model.ClassReaderSource;
import org.teavm.model.MethodReference;
import org.teavm.model.analysis.ClassInitializerInfo;
import org.teavm.vm.TeaVMOptimizationLevel;
import org.teavm.vm.TeaVMProgressFeedback;
import org.teavm.vm.TeaVMTargetController;

/**
 * Hack to set entryPoint when running JavascriptTarget multiple times with different entrypoints.
 * Required for code splitting to work.
 */
public class DelegatingTeaVMTargetController implements TeaVMTargetController {
    private TeaVMTargetController delegate;
    private String entryPoint;
    private String entryPointName;

    public DelegatingTeaVMTargetController(TeaVMTargetController delegate) {
        this.delegate = delegate;
    }

    @Override
    public boolean wasCancelled() {
        return delegate.wasCancelled();
    }

    @Override
    public ClassLoader getClassLoader() {
        return delegate.getClassLoader();
    }

    @Override
    public ClassReaderSource getUnprocessedClassSource() {
        return delegate.getUnprocessedClassSource();
    }

    @Override
    public CacheStatus getCacheStatus() {
        return delegate.getCacheStatus();
    }

    @Override
    public DependencyInfo getDependencyInfo() {
        return delegate.getDependencyInfo();
    }

    @Override
    public Diagnostics getDiagnostics() {
        return delegate.getDiagnostics();
    }

    @Override
    public Properties getProperties() {
        return delegate.getProperties();
    }

    @Override
    public ServiceRepository getServices() {
        return delegate.getServices();
    }

    @Override
    public TeaVMOptimizationLevel getOptimizationLevel() {
        return delegate.getOptimizationLevel();
    }

    @Override
    public boolean isFriendlyToDebugger() {
        return delegate.isFriendlyToDebugger();
    }

    @Override
    public String getEntryPoint() {
        if (entryPoint != null) {
            return entryPoint;
        }
        return delegate.getEntryPoint();
    }

    @Override
    public String getEntryPointName() {
        if (entryPointName != null) {
            return entryPointName;
        }
        return delegate.getEntryPointName();
    }

    @Override
    public Set<? extends String> getPreservedClasses() {
        return delegate.getPreservedClasses();
    }

    @Override
    public boolean isVirtual(MethodReference method) {
        return delegate.isVirtual(method);
    }

    @Override
    public TeaVMProgressFeedback reportProgress(int progress) {
        return delegate.reportProgress(progress);
    }

    @Override
    public void addVirtualMethods(Predicate<MethodReference> methods) {
        delegate.addVirtualMethods(methods);
    }

    @Override
    public ClassInitializerInfo getClassInitializerInfo() {
        return delegate.getClassInitializerInfo();
    }

    public void setEntryPoint(String entryPoint) {
        this.entryPoint = entryPoint;
    }

    public void setEntryPointName(String entryPointName) {
        this.entryPointName = entryPointName;
    }
}
