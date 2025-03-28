"use strict";
let js_Iface_import = require("./js.Iface.js");
let org_teavm_runtime_import = require("./org.teavm.runtime.js");

let j_Bar = org_teavm_runtime_import.$rt_classWithoutFields(),
j_Bar__init_ = $this => {
    org_teavm_runtime_import.jl_Object__init_($this);
},
j_Bar__init_0 = () => {
    let var_0 = new j_Bar();
    j_Bar__init_(var_0);
    return var_0;
},
j_Bar_foo = $this => {
    return org_teavm_runtime_import.$rt_str("Bar");
};
org_teavm_runtime_import.$rt_packages([-1, "js"
]);
org_teavm_runtime_import.$rt_metadata([j_Bar, "Bar", 0, org_teavm_runtime_import.jl_Object, [js_Iface_import.j_Iface], 0, 3, 0, 0, [(o,r)=>o.$_init_=r, org_teavm_runtime_import.$rt_wrapFunction0(j_Bar__init_), (o,r)=>o.$foo=r, org_teavm_runtime_import.$rt_wrapFunction0(j_Bar_foo)]]);
exports.j_Bar__init_ = j_Bar__init_;
exports.j_Bar__init_0 = j_Bar__init_0;
exports.j_Bar_foo = j_Bar_foo;
exports.j_Bar = j_Bar;
