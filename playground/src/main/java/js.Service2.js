"use strict";
let org_teavm_runtime_import = require("./org.teavm.runtime.js");

let js_Service2 = org_teavm_runtime_import.$rt_classWithoutFields(),
js_Service2__init__V = $this => {
    org_teavm_runtime_import.java_lang_Object__init__V($this);
},
js_Service2__init__V$1 = () => {
    let var_0 = new js_Service2();
    js_Service2__init__V(var_0);
    return var_0;
},
js_Service2_foo_VHLrpW = $this => {
    return org_teavm_runtime_import.$rt_str("Service2");
};
org_teavm_runtime_import.$rt_packages([
]);
org_teavm_runtime_import.$rt_metadata([js_Service2, 0, org_teavm_runtime_import.java_lang_Object, [], 0, 3, 0, 0, [(o,r)=>o.$_init__V=r, org_teavm_runtime_import.$rt_wrapFunction0(js_Service2__init__V), (o,r)=>o.$foo_VHLrpW=r, org_teavm_runtime_import.$rt_wrapFunction0(js_Service2_foo_VHLrpW)]]);
exports.js_Service2__init__V = js_Service2__init__V;
exports.js_Service2__init__V$1 = js_Service2__init__V$1;
exports.js_Service2_foo_VHLrpW = js_Service2_foo_VHLrpW;
exports.js_Service2 = js_Service2;
