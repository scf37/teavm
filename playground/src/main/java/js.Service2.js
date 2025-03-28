"use strict";
let org_teavm_runtime_import = require("./org.teavm.runtime.js");

let j_Service2 = org_teavm_runtime_import.$rt_classWithoutFields(),
j_Service2__init_ = $this => {
    org_teavm_runtime_import.jl_Object__init_($this);
},
j_Service2__init_0 = () => {
    let var_0 = new j_Service2();
    j_Service2__init_(var_0);
    return var_0;
},
j_Service2_foo = $this => {
    return org_teavm_runtime_import.$rt_str("Service2");
};
org_teavm_runtime_import.$rt_packages([
]);
org_teavm_runtime_import.$rt_metadata([j_Service2, 0, org_teavm_runtime_import.jl_Object, [], 0, 3, 0, 0, [(o,r)=>o.$_init_=r, org_teavm_runtime_import.$rt_wrapFunction0(j_Service2__init_), (o,r)=>o.$foo=r, org_teavm_runtime_import.$rt_wrapFunction0(j_Service2_foo)]]);
exports.j_Service2__init_ = j_Service2__init_;
exports.j_Service2__init_0 = j_Service2__init_0;
exports.j_Service2_foo = j_Service2_foo;
exports.j_Service2 = j_Service2;
