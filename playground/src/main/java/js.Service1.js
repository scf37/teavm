"use strict";
let org_teavm_runtime_import = require("./org.teavm.runtime.js");

function j_Service1() {
    org_teavm_runtime_import.jl_Object.call(this);
    this.$num = 0;
}
let j_Service1_$callClinit = () => {
    j_Service1_$callClinit = org_teavm_runtime_import.$rt_eraseClinit(j_Service1);
    j_Service1__clinit_();
},
j_Service1__init_ = $this => {
    j_Service1_$callClinit();
    org_teavm_runtime_import.jl_Object__init_($this);
    $this.$num = 1;
    (org_teavm_runtime_import.jl_System_out()).$println_VHLrpW(org_teavm_runtime_import.$rt_str("Service1 constructor"));
},
j_Service1__init_0 = () => {
    let var_0 = new j_Service1();
    j_Service1__init_(var_0);
    return var_0;
},
j_Service1_foo = $this => {
    let var$1, var$2;
    var$1 = $this.$num;
    var$2 = org_teavm_runtime_import.jl_StringBuilder__init_0();
    org_teavm_runtime_import.jl_StringBuilder_append_I(org_teavm_runtime_import.jl_StringBuilder_append_yToRiJ(var$2, org_teavm_runtime_import.$rt_str("Service")), var$1);
    return org_teavm_runtime_import.jl_StringBuilder_toString(var$2);
},
j_Service1__clinit_ = () => {
    (org_teavm_runtime_import.jl_System_out()).$println_VHLrpW(org_teavm_runtime_import.$rt_str("Service1 static constructor"));
};
org_teavm_runtime_import.$rt_packages([
]);
org_teavm_runtime_import.$rt_metadata([j_Service1, 0, org_teavm_runtime_import.jl_Object, [], 0, 3, 0, j_Service1_$callClinit, [(o,r)=>o.$_init_=r, org_teavm_runtime_import.$rt_wrapFunction0(j_Service1__init_), (o,r)=>o.$foo=r, org_teavm_runtime_import.$rt_wrapFunction0(j_Service1_foo)]]);
j_Service1_$callClinit();
exports.j_Service1__init_ = j_Service1__init_;
exports.j_Service1__init_0 = j_Service1__init_0;
exports.j_Service1_foo = j_Service1_foo;
exports.j_Service1 = j_Service1;
