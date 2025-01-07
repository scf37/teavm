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

import org.teavm.backend.javascript.JSModuleType;
import org.teavm.cache.MethodNodeCache;
import org.teavm.debugging.information.DebugInformationEmitter;
import org.teavm.vm.TeaVMTarget;

public interface JavaScriptTargetBase extends TeaVMTarget {
    void setObfuscated(boolean obfuscated);
    void setStrict(boolean strict);
    void setMaxTopLevelNames(int maxTopLevelNames);
    void setDebugEmitter(DebugInformationEmitter debugEmitter);
    void setModuleType(JSModuleType moduleType);
    void setAstCache(MethodNodeCache methodAstCache);
}
