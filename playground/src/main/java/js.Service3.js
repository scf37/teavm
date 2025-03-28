"use strict";
let js_Service1_import = require("./js.Service1.js");
let js_Service2_import = require("./js.Service2.js");
let org_teavm_runtime_import = require("./org.teavm.runtime.js");

function j_Service3() {
    let a = this; org_teavm_runtime_import.jl_Object.call(a);
    a.$service1 = null;
    a.$service2 = null;
}
let j_Service3__init__NTmPBw = ($this, $service1, $service2) => {
    org_teavm_runtime_import.jl_Object__init_($this);
    $this.$service1 = $service1;
    $this.$service2 = $service2;
},
j_Service3__init__NTmPBw0 = (var_0, var_1) => {
    let var_2 = new j_Service3();
    j_Service3__init__NTmPBw(var_2, var_0, var_1);
    return var_2;
},
j_Service3_foo = $this => {
    let var$1, var$2, var$3;
    var$1 = $this.$service1.$foo();
    var$2 = $this.$service2.$foo();
    var$3 = org_teavm_runtime_import.jl_StringBuilder__init_0();
    org_teavm_runtime_import.jl_StringBuilder_append_yToRiJ(org_teavm_runtime_import.jl_StringBuilder_append_yToRiJ(org_teavm_runtime_import.jl_StringBuilder_append_yToRiJ(org_teavm_runtime_import.jl_StringBuilder_append_yToRiJ(var$3, org_teavm_runtime_import.$rt_str("Service3: ")), var$1), org_teavm_runtime_import.$rt_str(", ")), var$2);
    return org_teavm_runtime_import.jl_StringBuilder_toString(var$3);
};
org_teavm_runtime_import.$rt_packages([
]);
org_teavm_runtime_import.$rt_metadata([j_Service3, 0, org_teavm_runtime_import.jl_Object, [], 0, 3, 0, 0, [(o,r)=>o.$_init__NTmPBw=r, org_teavm_runtime_import.$rt_wrapFunction2(j_Service3__init__NTmPBw), (o,r)=>o.$foo=r, org_teavm_runtime_import.$rt_wrapFunction0(j_Service3_foo)]]);
exports.j_Service3__init__NTmPBw = j_Service3__init__NTmPBw;
exports.j_Service3__init__NTmPBw0 = j_Service3__init__NTmPBw0;
exports.j_Service3_foo = j_Service3_foo;
exports.j_Service3 = j_Service3;
