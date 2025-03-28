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
import java.io.File;
import org.teavm.backend.javascript.JSModuleType;
import org.teavm.tooling.ConsoleTeaVMToolLog;
import org.teavm.tooling.TeaVMProblemRenderer;
import org.teavm.tooling.TeaVMTargetType;
import org.teavm.tooling.TeaVMTool;
import org.teavm.tooling.TeaVMToolException;
import org.teavm.vm.TeaVMOptimizationLevel;

public class ToolTest {
    private ToolTest() { }

    public static void main(String[] args) throws TeaVMToolException {
        var log = new ConsoleTeaVMToolLog(false);
        TeaVMTool tool = new TeaVMTool();
//        tool.setMainClass("js.JsMain");
//        tool.setTargetDirectory(new File("playground/src/main/java"));
        tool.setMainClass("js2.Main");
        tool.setTargetDirectory(new File("playground/src/main/java/js2/out"));
        tool.setTargetType(TeaVMTargetType.JAVASCRIPT);

        tool.setTargetFileName("ToolTest.js");
        tool.setObfuscated(false);
        tool.setJsModuleType(JSModuleType.COMMON_JS);
        tool.setOptimizationLevel(TeaVMOptimizationLevel.SIMPLE);
    //        tool.setIncremental(true);
        tool.setUseSplitting(true);
        tool.generate();

        TeaVMProblemRenderer.describeProblems(tool.getDependencyInfo().getCallGraph(), tool.getProblemProvider(), log);

    }
}
