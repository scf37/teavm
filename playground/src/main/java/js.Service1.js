"use strict";
let org_teavm_runtime_import = require("./org.teavm.runtime.js");

function js_Service1() {
    org_teavm_runtime_import.java_lang_Object.call(this);
    this.$num = 0;
}
let js_Service1_staticNum = 0;
function js_Service1_staticNum$get_I() { org_teavm_runtime_import.$rt_init_metadata(); js_Service1_$callClinit();  return js_Service1_staticNum; }
function js_Service1_staticNum$set_VI(value) { org_teavm_runtime_import.$rt_init_metadata(); js_Service1_$callClinit(); js_Service1_staticNum = value; }
let js_Service1_$callClinit = () => {
    js_Service1_$callClinit = org_teavm_runtime_import.$rt_eraseClinit(js_Service1);
    js_Service1__clinit__V();
},
js_Service1__init__V = $this => {
    org_teavm_runtime_import.$rt_init_metadata();
    js_Service1_$callClinit();
    org_teavm_runtime_import.java_lang_Object__init__V($this);
    $this.$num = 1;
    (org_teavm_runtime_import.java_lang_System_out_JQwxsu()).$println_XjCHVS(org_teavm_runtime_import.$rt_str("Service1 constructor"));
},
js_Service1__init__V$1 = () => {
    let var_0 = new js_Service1();
    js_Service1__init__V(var_0);
    return var_0;
},
js_Service1_foo_VHLrpW = $this => {
    let var$1, var$2;
    var$1 = $this.$num;
    var$2 = org_teavm_runtime_import.java_lang_StringBuilder__init__V$1();
    org_teavm_runtime_import.java_lang_StringBuilder_append_ZSDQSM(org_teavm_runtime_import.java_lang_StringBuilder_append_ZOYxhs(var$2, org_teavm_runtime_import.$rt_str("Service")), var$1);
    return org_teavm_runtime_import.java_lang_StringBuilder_toString_VHLrpW(var$2);
},
js_Service1__clinit__V = () => {
    js_Service1_staticNum$set_VI(2);
    (org_teavm_runtime_import.java_lang_System_out_JQwxsu()).$println_XjCHVS(org_teavm_runtime_import.$rt_str("Service1 static constructor"));
};
org_teavm_runtime_import.$rt_packages(() => [
]);
org_teavm_runtime_import.$rt_metadata(() => [js_Service1, 0, org_teavm_runtime_import.java_lang_Object, [], 0, 3, 0, js_Service1_$callClinit, [(o,r)=>o.$_init__V=r, org_teavm_runtime_import.$rt_wrapFunction0(js_Service1__init__V), (o,r)=>o.$foo_VHLrpW=r, org_teavm_runtime_import.$rt_wrapFunction0(js_Service1_foo_VHLrpW)]]);
exports.js_Service1__init__V = js_Service1__init__V;
exports.js_Service1__init__V$1 = js_Service1__init__V$1;
exports.js_Service1_foo_VHLrpW = js_Service1_foo_VHLrpW;
exports.js_Service1 = js_Service1;
exports.js_Service1_staticNum = js_Service1_staticNum;
exports.js_Service1_staticNum$get_I = js_Service1_staticNum$get_I;
exports.js_Service1_staticNum$set_VI = js_Service1_staticNum$set_VI;
