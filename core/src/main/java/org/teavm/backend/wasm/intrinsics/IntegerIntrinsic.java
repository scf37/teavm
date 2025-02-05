/*
 *  Copyright 2018 Alexey Andreev.
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
package org.teavm.backend.wasm.intrinsics;

import org.teavm.ast.InvocationExpr;
import org.teavm.backend.wasm.WasmRuntime;
import org.teavm.backend.wasm.model.expression.WasmCall;
import org.teavm.backend.wasm.model.expression.WasmExpression;
import org.teavm.backend.wasm.model.expression.WasmIntBinary;
import org.teavm.backend.wasm.model.expression.WasmIntBinaryOperation;
import org.teavm.backend.wasm.model.expression.WasmIntType;
import org.teavm.backend.wasm.model.expression.WasmIntUnary;
import org.teavm.backend.wasm.model.expression.WasmIntUnaryOperation;
import org.teavm.model.MethodReference;

public class IntegerIntrinsic implements WasmIntrinsic {
    private static final MethodReference COMPARE_UNSIGNED = new MethodReference(WasmRuntime.class,
            "compareUnsigned", int.class, int.class, int.class);

    @Override
    public boolean isApplicable(MethodReference methodReference) {
        if (!methodReference.getClassName().equals(Integer.class.getName())) {
            return false;
        }

        switch (methodReference.getName()) {
            case "divideUnsigned":
            case "remainderUnsigned":
            case "compareUnsigned":
            case "numberOfLeadingZeros":
            case "numberOfTrailingZeros":
            case "bitCount":
                return true;
            default:
                return false;
        }
    }

    @Override
    public WasmExpression apply(InvocationExpr invocation, WasmIntrinsicManager manager) {
        switch (invocation.getMethod().getName()) {
            case "divideUnsigned":
                return new WasmIntBinary(WasmIntType.INT32, WasmIntBinaryOperation.DIV_UNSIGNED,
                        manager.generate(invocation.getArguments().get(0)),
                        manager.generate(invocation.getArguments().get(1)));
            case "remainderUnsigned":
                return new WasmIntBinary(WasmIntType.INT32, WasmIntBinaryOperation.REM_UNSIGNED,
                        manager.generate(invocation.getArguments().get(0)),
                        manager.generate(invocation.getArguments().get(1)));
            case "compareUnsigned":
                return new WasmCall(manager.getFunctions().forStaticMethod(COMPARE_UNSIGNED),
                        manager.generate(invocation.getArguments().get(0)),
                        manager.generate(invocation.getArguments().get(1)));
            case "numberOfLeadingZeros":
                return new WasmIntUnary(WasmIntType.INT32, WasmIntUnaryOperation.CLZ,
                        manager.generate(invocation.getArguments().get(0)));
            case "numberOfTrailingZeros":
                return new WasmIntUnary(WasmIntType.INT32, WasmIntUnaryOperation.CTZ,
                        manager.generate(invocation.getArguments().get(0)));
            case "bitCount":
                return new WasmIntUnary(WasmIntType.INT32, WasmIntUnaryOperation.POPCNT,
                        manager.generate(invocation.getArguments().get(0)));
            default:
                throw new AssertionError();
        }
    }
}
