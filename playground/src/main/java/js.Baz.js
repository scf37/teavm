"use strict";
let js_Bar_import = require("./js.Bar.js");
let js_Iface_import = require("./js.Iface.js");
let org_teavm_runtime_import = require("./org.teavm.runtime.js");

let js_Baz = org_teavm_runtime_import.$rt_classWithoutFields(js_Bar_import.js_Bar),
js_Baz__init__XjCHVS = ($this, $p) => {
    org_teavm_runtime_import.$rt_init_metadata();
    js_Bar_import.js_Bar__init__XjCHVS($this, $p);
},
js_Baz__init__XjCHVS$1 = var_0 => {
    let var_1 = new js_Baz();
    js_Baz__init__XjCHVS(var_1, var_0);
    return var_1;
},
js_Baz_foo_VHLrpW = $this => {
    return org_teavm_runtime_import.$rt_str("Baz");
};
org_teavm_runtime_import.$rt_packages(() => [-1, "js"
]);
org_teavm_runtime_import.$rt_metadata(() => [js_Baz, "Baz", 0, js_Bar_import.js_Bar, [], 0, 3, 0, 0, [(o,r)=>o.$hello_VHLrpW=r, org_teavm_runtime_import.$rt_wrapFunction0(js_Iface_import.js_Iface_hello_VHLrpW), (o,r)=>o.$_init__XjCHVS=r, org_teavm_runtime_import.$rt_wrapFunction1(js_Baz__init__XjCHVS), (o,r)=>o.$foo_VHLrpW=r, org_teavm_runtime_import.$rt_wrapFunction0(js_Baz_foo_VHLrpW)]]);
exports.js_Baz__init__XjCHVS = js_Baz__init__XjCHVS;
exports.js_Baz__init__XjCHVS$1 = js_Baz__init__XjCHVS$1;
exports.js_Baz_foo_VHLrpW = js_Baz_foo_VHLrpW;
exports.js_Baz = js_Baz;
