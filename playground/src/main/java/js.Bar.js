"use strict";
let js_Iface_import = require("./js.Iface.js");
let org_teavm_runtime_import = require("./org.teavm.runtime.js");

function j_Bar() {
    org_teavm_runtime_import.jl_Object.call(this);
    this.$p = null;
}
let j_Bar__init__VHLrpW = ($this, $p) => {
    org_teavm_runtime_import.jl_Object__init_($this);
    $this.$p = $p;
},
j_Bar__init__VHLrpW0 = var_0 => {
    let var_1 = new j_Bar();
    j_Bar__init__VHLrpW(var_1, var_0);
    return var_1;
},
j_Bar_foo = $this => {
    let var$1, var$2;
    var$1 = $this.$p;
    var$2 = org_teavm_runtime_import.jl_StringBuilder__init_0();
    org_teavm_runtime_import.jl_StringBuilder_append_yToRiJ(org_teavm_runtime_import.jl_StringBuilder_append_yToRiJ(var$2, org_teavm_runtime_import.$rt_str("Bar")), var$1);
    return org_teavm_runtime_import.jl_StringBuilder_toString(var$2);
};
org_teavm_runtime_import.$rt_packages([-1, "js"
]);
org_teavm_runtime_import.$rt_metadata([j_Bar, "Bar", 0, org_teavm_runtime_import.jl_Object, [js_Iface_import.j_Iface], 0, 3, 0, 0, [(o,r)=>o.$_init__VHLrpW=r, org_teavm_runtime_import.$rt_wrapFunction1(j_Bar__init__VHLrpW), (o,r)=>o.$foo=r, org_teavm_runtime_import.$rt_wrapFunction0(j_Bar_foo)]]);
exports.j_Bar__init__VHLrpW = j_Bar__init__VHLrpW;
exports.j_Bar__init__VHLrpW0 = j_Bar__init__VHLrpW0;
exports.j_Bar_foo = j_Bar_foo;
exports.j_Bar = j_Bar;
