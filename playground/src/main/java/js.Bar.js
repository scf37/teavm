"use strict";
let js_Iface_import = require("./js.Iface.js");
let org_teavm_runtime_import = require("./org.teavm.runtime.js");

function js_Bar() {
    org_teavm_runtime_import.java_lang_Object.call(this);
    this.$p = null;
}
let js_Bar__init__XjCHVS = ($this, $p) => {
    org_teavm_runtime_import.$rt_init_metadata();
    org_teavm_runtime_import.java_lang_Object__init__V($this);
    $this.$p = $p;
},
js_Bar__init__XjCHVS$1 = var_0 => {
    let var_1 = new js_Bar();
    js_Bar__init__XjCHVS(var_1, var_0);
    return var_1;
},
js_Bar_foo_VHLrpW = $this => {
    let var$1, var$2;
    var$1 = $this.$p;
    var$2 = org_teavm_runtime_import.java_lang_StringBuilder__init__V$1();
    org_teavm_runtime_import.java_lang_StringBuilder_append_ZOYxhs(org_teavm_runtime_import.java_lang_StringBuilder_append_ZOYxhs(var$2, org_teavm_runtime_import.$rt_str("Bar")), var$1);
    return org_teavm_runtime_import.java_lang_StringBuilder_toString_VHLrpW(var$2);
};
org_teavm_runtime_import.$rt_packages([-1, "js"
]);
org_teavm_runtime_import.$rt_metadata([js_Bar, "Bar", 0, org_teavm_runtime_import.java_lang_Object, [js_Iface_import.js_Iface], 0, 3, 0, 0, [(o,r)=>o.$hello_VHLrpW=r, org_teavm_runtime_import.$rt_wrapFunction0(js_Iface_import.js_Iface_hello_VHLrpW), (o,r)=>o.$_init__XjCHVS=r, org_teavm_runtime_import.$rt_wrapFunction1(js_Bar__init__XjCHVS), (o,r)=>o.$foo_VHLrpW=r, org_teavm_runtime_import.$rt_wrapFunction0(js_Bar_foo_VHLrpW)]]);
exports.js_Bar__init__XjCHVS = js_Bar__init__XjCHVS;
exports.js_Bar__init__XjCHVS$1 = js_Bar__init__XjCHVS$1;
exports.js_Bar_foo_VHLrpW = js_Bar_foo_VHLrpW;
exports.js_Bar = js_Bar;
