"use strict";
let js_Bar_import = require("./js.Bar.js");
let org_teavm_runtime_import = require("./org.teavm.runtime.js");

let j_Baz = org_teavm_runtime_import.$rt_classWithoutFields(js_Bar_import.j_Bar),
j_Baz__init_ = $this => {
    js_Bar_import.j_Bar__init_($this);
},
j_Baz__init_0 = () => {
    let var_0 = new j_Baz();
    j_Baz__init_(var_0);
    return var_0;
},
j_Baz_foo = $this => {
    return org_teavm_runtime_import.$rt_str("Baz");
};
org_teavm_runtime_import.$rt_packages([-1, "js"
]);
org_teavm_runtime_import.$rt_metadata([j_Baz, "Baz", 0, js_Bar_import.j_Bar, [], 0, 3, 0, 0, [(o,r)=>o.$_init_=r, org_teavm_runtime_import.$rt_wrapFunction0(j_Baz__init_), (o,r)=>o.$foo=r, org_teavm_runtime_import.$rt_wrapFunction0(j_Baz_foo)]]);
exports.j_Baz__init_ = j_Baz__init_;
exports.j_Baz__init_0 = j_Baz__init_0;
exports.j_Baz_foo = j_Baz_foo;
exports.j_Baz = j_Baz;
