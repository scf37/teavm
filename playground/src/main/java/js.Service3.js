"use strict";
let js_Service1_import = require("./js.Service1.js");
let js_Service2_import = require("./js.Service2.js");
let org_teavm_runtime_import = require("./org.teavm.runtime.js");

function js_Service3() {
    let a = this; org_teavm_runtime_import.java_lang_Object.call(a);
    a.$service1 = null;
    a.$service2 = null;
}
let js_Service3__init__linHFy = ($this, $service1, $service2) => {
    org_teavm_runtime_import.$rt_init_metadata();
    org_teavm_runtime_import.java_lang_Object__init__V($this);
    $this.$service1 = $service1;
    $this.$service2 = $service2;
},
js_Service3__init__linHFy$1 = (var_0, var_1) => {
    org_teavm_runtime_import.$rt_init_metadata();
    let var_2 = new js_Service3();
    js_Service3__init__linHFy(var_2, var_0, var_1);
    return var_2;
},
js_Service3_foo_VHLrpW = $this => {
    let var$1, var$2, var$3;
    var$1 = $this.$service1.$foo_VHLrpW();
    var$2 = $this.$service2.$foo_VHLrpW();
    var$3 = org_teavm_runtime_import.java_lang_StringBuilder__init__V$1();
    org_teavm_runtime_import.java_lang_StringBuilder_append_ZOYxhs(org_teavm_runtime_import.java_lang_StringBuilder_append_ZOYxhs(org_teavm_runtime_import.java_lang_StringBuilder_append_ZOYxhs(org_teavm_runtime_import.java_lang_StringBuilder_append_ZOYxhs(var$3, org_teavm_runtime_import.$rt_str("Service3: ")), var$1), org_teavm_runtime_import.$rt_str(", ")), var$2);
    return org_teavm_runtime_import.java_lang_StringBuilder_toString_VHLrpW(var$3);
};
org_teavm_runtime_import.$rt_packages(() => [
]);
org_teavm_runtime_import.$rt_metadata(() => [js_Service3, 0, org_teavm_runtime_import.java_lang_Object, [], 0, 3, 0, 0, [(o,r)=>o.$_init__linHFy=r, org_teavm_runtime_import.$rt_wrapFunction2(js_Service3__init__linHFy), (o,r)=>o.$foo_VHLrpW=r, org_teavm_runtime_import.$rt_wrapFunction0(js_Service3_foo_VHLrpW)]]);
exports.js_Service3__init__linHFy = js_Service3__init__linHFy;
exports.js_Service3__init__linHFy$1 = js_Service3__init__linHFy$1;
exports.js_Service3_foo_VHLrpW = js_Service3_foo_VHLrpW;
exports.js_Service3 = js_Service3;
