"use strict";
let js_Bar_import = require("./js.Bar.js");
let js_Baz_import = require("./js.Baz.js");
let js_Iface_import = require("./js.Iface.js");
let js_Service1_import = require("./js.Service1.js");
let js_Service2_import = require("./js.Service2.js");
let js_Service3_import = require("./js.Service3.js");
let org_teavm_runtime_import = require("./org.teavm.runtime.js");

let j_JsMain$JsMainCtor = org_teavm_runtime_import.$rt_classWithoutFields(0),
j_JsMain$_clinit_$lambda$_6_0 = org_teavm_runtime_import.$rt_classWithoutFields(),
j_JsMain$_clinit_$lambda$_6_0__init_ = var$0 => {
    org_teavm_runtime_import.jl_Object__init_(var$0);
},
j_JsMain$_clinit_$lambda$_6_0__init_0 = () => {
    let var_0 = new j_JsMain$_clinit_$lambda$_6_0();
    j_JsMain$_clinit_$lambda$_6_0__init_(var_0);
    return var_0;
},
j_JsMain$_clinit_$lambda$_6_0_create_Wwumam = (var$0, var$1) => {
    return j_JsMain__init__Wwumam0(var$1);
},
j_JsMain$_clinit_$lambda$_6_0_create$exported$0_GAudPG = (var$1, var$2) => {
    var$2 = var$2;
    return org_teavm_runtime_import.otji_JSWrapper_javaToJs_yToRiJ(var$1.$create_Wwumam(var$2));
},
j_JsMain$main$lambda$_2_1 = org_teavm_runtime_import.$rt_classWithoutFields(),
j_JsMain$main$lambda$_2_1__init_ = var$0 => {
    org_teavm_runtime_import.jl_Object__init_(var$0);
},
j_JsMain$main$lambda$_2_1__init_0 = () => {
    let var_0 = new j_JsMain$main$lambda$_2_1();
    j_JsMain$main$lambda$_2_1__init_(var_0);
    return var_0;
},
j_JsMain$main$lambda$_2_1_accept_lVIoyP = (var$0, var$1, var$2) => {
    j_JsMain$main$lambda$_2_1_accept_NfbYnN(var$0, var$1, var$2);
},
j_JsMain$main$lambda$_2_1_accept_NfbYnN = (var$0, var$1, var$2) => {
    j_JsMain_lambda$main$0_NfbYnN(var$1, var$2);
};
function j_JsMain() {
    org_teavm_runtime_import.jl_Object.call(this);
    this.$service3 = null;
}
let j_JsMain_$callClinit = () => {
    j_JsMain_$callClinit = org_teavm_runtime_import.$rt_eraseClinit(j_JsMain);
    j_JsMain__clinit_();
},
j_JsMain_foo = $this => {
    let var$1, var$2;
    var$1 = $this.$service3.$foo();
    var$2 = org_teavm_runtime_import.jl_StringBuilder__init_0();
    org_teavm_runtime_import.jl_StringBuilder_append_yToRiJ(org_teavm_runtime_import.jl_StringBuilder_append_yToRiJ(var$2, org_teavm_runtime_import.$rt_str("Main:")), var$1);
    return org_teavm_runtime_import.jl_StringBuilder_toString(var$2);
},
j_JsMain__init__Wwumam = ($this, $service3) => {
    j_JsMain_$callClinit();
    org_teavm_runtime_import.jl_Object__init_($this);
    $this.$service3 = $service3;
},
j_JsMain__init__Wwumam0 = var_0 => {
    let var_1 = new j_JsMain();
    j_JsMain__init__Wwumam(var_1, var_0);
    return var_1;
},
j_JsMain_main_Slabyb = $args => {
    let $service1, $service2, $service3, $main, $list, var$7, $map, $bar, $baz;
    j_JsMain_$callClinit();
    $service1 = js_Service1_import.j_Service1__init_0();
    $service2 = js_Service2_import.j_Service2__init_0();
    $service3 = js_Service3_import.j_Service3__init__NTmPBw0($service1, $service2);
    $main = j_JsMain__init__Wwumam0($service3);
    $list = org_teavm_runtime_import.ju_ArrayList__init_0();
    $list.$add_yToRiJ(org_teavm_runtime_import.$rt_str("item1"));
    $list.$add_yToRiJ(org_teavm_runtime_import.$rt_str("item2"));
    $list.$add_yToRiJ(org_teavm_runtime_import.$rt_str("item3"));
    var$7 = org_teavm_runtime_import.jl_System_out();
    org_teavm_runtime_import.ju_Objects_requireNonNull_yToRiJ(var$7);
    $list.$forEach_tmBPvg(j_JsMain$main$lambda$_2_0__init__JQwxsu0(var$7));
    (org_teavm_runtime_import.jl_System_out()).$println_VHLrpW($main.$foo());
    var$7 = org_teavm_runtime_import.jl_System_out();
    var$7.$println_I(org_teavm_runtime_import.jl_String_CASE_INSENSITIVE_ORDER.$compare_lVIoyP(org_teavm_runtime_import.$rt_str("HELLO"), org_teavm_runtime_import.$rt_str("hello")));
    $map = org_teavm_runtime_import.ju_HashMap__init_0();
    $map.$put_lVIoyP(org_teavm_runtime_import.$rt_str("hello"), org_teavm_runtime_import.jl_Integer_valueOf_I(1));
    $map.$put_lVIoyP(org_teavm_runtime_import.$rt_str("world"), org_teavm_runtime_import.jl_Integer_valueOf_I(2));
    $map.$forEach_ToaHrM(j_JsMain$main$lambda$_2_1__init_0());
    $bar = js_Bar_import.j_Bar__init__VHLrpW0(org_teavm_runtime_import.$rt_str("x"));
    (org_teavm_runtime_import.jl_System_out()).$println_VHLrpW($bar.$foo());
    $baz = js_Baz_import.j_Baz__init__VHLrpW0(org_teavm_runtime_import.$rt_str("y"));
    (org_teavm_runtime_import.jl_System_out()).$println_VHLrpW($baz.$foo());
    (org_teavm_runtime_import.jl_System_out()).$println_VHLrpW((j_JsMain_make_VHLrpW(org_teavm_runtime_import.$rt_str("Bar"))).$foo());
    (org_teavm_runtime_import.jl_System_out()).$println_VHLrpW((j_JsMain_make_VHLrpW(org_teavm_runtime_import.$rt_str("Baz"))).$foo());
    (org_teavm_runtime_import.jl_System_out()).$println_VHLrpW(org_teavm_runtime_import.jl_Class_getName(org_teavm_runtime_import.jl_Object_getClass(j_JsMain_make_VHLrpW(org_teavm_runtime_import.$rt_str("Bar")))));
    (org_teavm_runtime_import.jl_System_out()).$println_VHLrpW(org_teavm_runtime_import.jl_Class_getName(org_teavm_runtime_import.jl_Object_getClass(j_JsMain_make_VHLrpW(org_teavm_runtime_import.$rt_str("Baz")))));
    (org_teavm_runtime_import.jl_System_out()).$println_Z(org_teavm_runtime_import.$rt_isInstance(j_JsMain_make_VHLrpW(org_teavm_runtime_import.$rt_str("Baz")), js_Iface_import.j_Iface));
    (org_teavm_runtime_import.jl_System_out()).$println_Z(org_teavm_runtime_import.$rt_isInstance(j_JsMain_make_VHLrpW(org_teavm_runtime_import.$rt_str("Baz")), js_Bar_import.j_Bar));
    (org_teavm_runtime_import.jl_System_out()).$println_Z(org_teavm_runtime_import.$rt_isInstance(j_JsMain_make_VHLrpW(org_teavm_runtime_import.$rt_str("Baz")), js_Baz_import.j_Baz));
    (org_teavm_runtime_import.jl_System_out()).$println_Z(org_teavm_runtime_import.$rt_isInstance(j_JsMain_make_VHLrpW(org_teavm_runtime_import.$rt_str("Bar")), js_Iface_import.j_Iface));
    (org_teavm_runtime_import.jl_System_out()).$println_Z(org_teavm_runtime_import.$rt_isInstance(j_JsMain_make_VHLrpW(org_teavm_runtime_import.$rt_str("Bar")), js_Bar_import.j_Bar));
    (org_teavm_runtime_import.jl_System_out()).$println_Z(org_teavm_runtime_import.$rt_isInstance(j_JsMain_make_VHLrpW(org_teavm_runtime_import.$rt_str("Bar")), js_Baz_import.j_Baz));
    alert("hello javascript alert");
},
j_JsMain_make_VHLrpW = $what => {
    j_JsMain_$callClinit();
    if ($what.$equals_yToRiJ(org_teavm_runtime_import.$rt_str("Bar")))
        return js_Bar_import.j_Bar__init__VHLrpW0(org_teavm_runtime_import.$rt_str("x"));
    if (!$what.$equals_yToRiJ(org_teavm_runtime_import.$rt_str("Baz")))
        return null;
    return js_Baz_import.j_Baz__init__VHLrpW0(org_teavm_runtime_import.$rt_str("y"));
},
j_JsMain_lambda$main$0_NfbYnN = ($k, $v) => {
    let var$3, var$4;
    j_JsMain_$callClinit();
    var$3 = org_teavm_runtime_import.jl_System_out();
    var$4 = org_teavm_runtime_import.jl_StringBuilder__init_0();
    org_teavm_runtime_import.jl_StringBuilder_append_yToRiJ(org_teavm_runtime_import.jl_StringBuilder_append_C(org_teavm_runtime_import.jl_StringBuilder_append_yToRiJ(var$4, $k), 32), $v);
    var$3.$println_VHLrpW(org_teavm_runtime_import.jl_StringBuilder_toString(var$4));
},
j_JsMain__clinit_ = () => {
    let var$1;
    var$1 = j_JsMain$_clinit_$lambda$_6_0__init_0();
    j_JsMain_export$js_body$_4_GAudPG("JsMain1", org_teavm_runtime_import.otji_JS_function_GAudPG(org_teavm_runtime_import.otji_JSWrapper_unwrap_yToRiJ(var$1), "create"));
},
j_JsMain_export$js_body$_4_GAudPG = (var$1, var$2) => {
    let window = {  };
    window[var$1] = var$2;
};
function j_JsMain$main$lambda$_2_0() {
    org_teavm_runtime_import.jl_Object.call(this);
    this.$_0 = null;
}
let j_JsMain$main$lambda$_2_0__init__JQwxsu = (var$0, var$1) => {
    org_teavm_runtime_import.jl_Object__init_(var$0);
    var$0.$_0 = var$1;
},
j_JsMain$main$lambda$_2_0__init__JQwxsu0 = var_0 => {
    let var_1 = new j_JsMain$main$lambda$_2_0();
    j_JsMain$main$lambda$_2_0__init__JQwxsu(var_1, var_0);
    return var_1;
},
j_JsMain$main$lambda$_2_0_accept_yToRiJ = (var$0, var$1) => {
    j_JsMain$main$lambda$_2_0_accept_VHLrpW(var$0, var$1);
},
j_JsMain$main$lambda$_2_0_accept_VHLrpW = (var$0, var$1) => {
    var$0.$_0.$println_VHLrpW(var$1);
};
org_teavm_runtime_import.$rt_packages([
]);
org_teavm_runtime_import.$rt_metadata([j_JsMain$JsMainCtor, 0, org_teavm_runtime_import.jl_Object, [org_teavm_runtime_import.otj_JSObject], 3, 3, 0, 0, 0,
j_JsMain$_clinit_$lambda$_6_0, 0, org_teavm_runtime_import.jl_Object, [j_JsMain$JsMainCtor], 0, 3, 0, 0, [(o,r)=>o.$_init_=r, org_teavm_runtime_import.$rt_wrapFunction0(j_JsMain$_clinit_$lambda$_6_0__init_), (o,r)=>o.$create_Wwumam=r, org_teavm_runtime_import.$rt_wrapFunction1(j_JsMain$_clinit_$lambda$_6_0_create_Wwumam)],
j_JsMain$main$lambda$_2_1, 0, org_teavm_runtime_import.jl_Object, [org_teavm_runtime_import.juf_BiConsumer], 0, 3, 0, 0, [(o,r)=>o.$_init_=r, org_teavm_runtime_import.$rt_wrapFunction0(j_JsMain$main$lambda$_2_1__init_), (o,r)=>o.$accept_lVIoyP=r, org_teavm_runtime_import.$rt_wrapFunction2(j_JsMain$main$lambda$_2_1_accept_lVIoyP), (o,r)=>o.$accept_NfbYnN=r, org_teavm_runtime_import.$rt_wrapFunction2(j_JsMain$main$lambda$_2_1_accept_NfbYnN)],
j_JsMain, 0, org_teavm_runtime_import.jl_Object, [], 0, 3, 0, j_JsMain_$callClinit, [(o,r)=>o.$foo=r, org_teavm_runtime_import.$rt_wrapFunction0(j_JsMain_foo), (o,r)=>o.$_init__Wwumam=r, org_teavm_runtime_import.$rt_wrapFunction1(j_JsMain__init__Wwumam)],
j_JsMain$main$lambda$_2_0, 0, org_teavm_runtime_import.jl_Object, [org_teavm_runtime_import.juf_Consumer], 0, 3, 0, 0, [(o,r)=>o.$_init__JQwxsu=r, org_teavm_runtime_import.$rt_wrapFunction1(j_JsMain$main$lambda$_2_0__init__JQwxsu), (o,r)=>o.$accept_yToRiJ=r, org_teavm_runtime_import.$rt_wrapFunction1(j_JsMain$main$lambda$_2_0_accept_yToRiJ), (o,r)=>o.$accept_VHLrpW=r, org_teavm_runtime_import.$rt_wrapFunction1(j_JsMain$main$lambda$_2_0_accept_VHLrpW)]]);
let $rt_export_main = org_teavm_runtime_import.$rt_mainStarter(j_JsMain_main_Slabyb);
$rt_export_main.javaException = org_teavm_runtime_import.$rt_javaException;
let $rt_jso_marker = Symbol('jsoClass');
(() => {
    let c;
    c = j_JsMain$_clinit_$lambda$_6_0.prototype;
    c.create = org_teavm_runtime_import.$rt_callWithReceiver(j_JsMain$_clinit_$lambda$_6_0_create$exported$0_GAudPG);
})();
j_JsMain_$callClinit();
exports.j_JsMain$_clinit_$lambda$_6_0__init_ = j_JsMain$_clinit_$lambda$_6_0__init_;
exports.j_JsMain$_clinit_$lambda$_6_0__init_0 = j_JsMain$_clinit_$lambda$_6_0__init_0;
exports.j_JsMain$_clinit_$lambda$_6_0_create_Wwumam = j_JsMain$_clinit_$lambda$_6_0_create_Wwumam;
exports.j_JsMain$_clinit_$lambda$_6_0_create$exported$0_GAudPG = j_JsMain$_clinit_$lambda$_6_0_create$exported$0_GAudPG;
exports.j_JsMain$_clinit_$lambda$_6_0 = j_JsMain$_clinit_$lambda$_6_0;
exports.j_JsMain$main$lambda$_2_1__init_ = j_JsMain$main$lambda$_2_1__init_;
exports.j_JsMain$main$lambda$_2_1__init_0 = j_JsMain$main$lambda$_2_1__init_0;
exports.j_JsMain$main$lambda$_2_1_accept_lVIoyP = j_JsMain$main$lambda$_2_1_accept_lVIoyP;
exports.j_JsMain$main$lambda$_2_1_accept_NfbYnN = j_JsMain$main$lambda$_2_1_accept_NfbYnN;
exports.j_JsMain$main$lambda$_2_1 = j_JsMain$main$lambda$_2_1;
exports.j_JsMain_foo = j_JsMain_foo;
exports.j_JsMain__init__Wwumam = j_JsMain__init__Wwumam;
exports.j_JsMain__init__Wwumam0 = j_JsMain__init__Wwumam0;
exports.j_JsMain_main_Slabyb = j_JsMain_main_Slabyb;
exports.j_JsMain = j_JsMain;
exports.j_JsMain$main$lambda$_2_0__init__JQwxsu = j_JsMain$main$lambda$_2_0__init__JQwxsu;
exports.j_JsMain$main$lambda$_2_0__init__JQwxsu0 = j_JsMain$main$lambda$_2_0__init__JQwxsu0;
exports.j_JsMain$main$lambda$_2_0_accept_yToRiJ = j_JsMain$main$lambda$_2_0_accept_yToRiJ;
exports.j_JsMain$main$lambda$_2_0_accept_VHLrpW = j_JsMain$main$lambda$_2_0_accept_VHLrpW;
exports.j_JsMain$main$lambda$_2_0 = j_JsMain$main$lambda$_2_0;
exports.j_JsMain$JsMainCtor = j_JsMain$JsMainCtor;
exports.main = $rt_export_main;
exports.main();