"use strict";
let org_teavm_runtime_import = require("./org.teavm.runtime.js");

let js_Iface = org_teavm_runtime_import.$rt_classWithoutFields(0),
js_Iface_hello_VHLrpW = $this => {
    let var$1, var$2;
    var$1 = $this.$foo_VHLrpW();
    var$2 = org_teavm_runtime_import.java_lang_StringBuilder__init__V$1();
    org_teavm_runtime_import.java_lang_StringBuilder_append_ZOYxhs(org_teavm_runtime_import.java_lang_StringBuilder_append_ZOYxhs(var$2, org_teavm_runtime_import.$rt_str("Hello virtual ")), var$1);
    return org_teavm_runtime_import.java_lang_StringBuilder_toString_VHLrpW(var$2);
};
org_teavm_runtime_import.$rt_packages([
]);
org_teavm_runtime_import.$rt_metadata([js_Iface, 0, org_teavm_runtime_import.java_lang_Object, [], 3, 3, 0, 0, [(o,r)=>o.$hello_VHLrpW=r, org_teavm_runtime_import.$rt_wrapFunction0(js_Iface_hello_VHLrpW)]]);
exports.js_Iface_hello_VHLrpW = js_Iface_hello_VHLrpW;
exports.js_Iface = js_Iface;
