"use strict";
let js2_TableImpl_import = require("./js2.TableImpl.js");
let org_teavm_runtime_import = require("./org.teavm.runtime.js");

let j_Table = org_teavm_runtime_import.$rt_classWithoutFields(0),
j_Table_newInstance = () => {
    return js2_TableImpl_import.j_TableImpl__init_0();
};
org_teavm_runtime_import.$rt_packages([
]);
org_teavm_runtime_import.$rt_metadata([j_Table, 0, org_teavm_runtime_import.jl_Object, [], 3, 3, 0, 0, 0]);
exports.j_Table_newInstance = j_Table_newInstance;
exports.j_Table = j_Table;
