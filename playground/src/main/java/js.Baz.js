"use strict";
let js_Bar_import = require("./js.Bar.js");
let org_teavm_runtime_import = require("./org.teavm.runtime.js");

let j_Baz = org_teavm_runtime_import.$rt_classWithoutFields(js_Bar_import.j_Bar),
j_Baz__init__VHLrpW = ($this, $p) => {
    js_Bar_import.j_Bar__init__VHLrpW($this, $p);
},
j_Baz__init__VHLrpW0 = var_0 => {
    let var_1 = new j_Baz();
    j_Baz__init__VHLrpW(var_1, var_0);
    return var_1;
},
j_Baz_foo = $this => {
    return org_teavm_runtime_import.$rt_str("Baz");
};
org_teavm_runtime_import.$rt_packages([-1, "js"
]);
org_teavm_runtime_import.$rt_metadata([j_Baz, "Baz", 0, js_Bar_import.j_Bar, [], 0, 3, 0, 0, [(o,r)=>o.$_init__VHLrpW=r, org_teavm_runtime_import.$rt_wrapFunction1(j_Baz__init__VHLrpW), (o,r)=>o.$foo=r, org_teavm_runtime_import.$rt_wrapFunction0(j_Baz_foo)]]);
exports.j_Baz__init__VHLrpW = j_Baz__init__VHLrpW;
exports.j_Baz__init__VHLrpW0 = j_Baz__init__VHLrpW0;
exports.j_Baz_foo = j_Baz_foo;
exports.j_Baz = j_Baz;
