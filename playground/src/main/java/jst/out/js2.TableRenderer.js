"use strict";
let js2_TableRendererImpl_import = require("./js2.TableRendererImpl.js");
let org_teavm_runtime_import = require("./org.teavm.runtime.js");

let j_TableRenderer = org_teavm_runtime_import.$rt_classWithoutFields(0),
j_TableRenderer_newInstance = () => {
    return js2_TableRendererImpl_import.j_TableRendererImpl__init_0();
};
org_teavm_runtime_import.$rt_packages([
]);
org_teavm_runtime_import.$rt_metadata([j_TableRenderer, 0, org_teavm_runtime_import.jl_Object, [], 3, 3, 0, 0, 0]);
exports.j_TableRenderer_newInstance = j_TableRenderer_newInstance;
exports.j_TableRenderer = j_TableRenderer;
