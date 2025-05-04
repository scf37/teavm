"use strict";
let js_Bar_import = require("./js.Bar.js");
let js_Baz_import = require("./js.Baz.js");
let js_Iface_import = require("./js.Iface.js");
let js_Service1_import = require("./js.Service1.js");
let js_Service2_import = require("./js.Service2.js");
let js_Service3_import = require("./js.Service3.js");
let org_teavm_runtime_import = require("./org.teavm.runtime.js");

function js_JsMain() {
    org_teavm_runtime_import.java_lang_Object.call(this);
    this.$service3 = null;
}
let js_JsMain_$callClinit = () => {
    js_JsMain_$callClinit = org_teavm_runtime_import.$rt_eraseClinit(js_JsMain);
    js_JsMain__clinit__V();
},
js_JsMain_foo_VHLrpW = $this => {
    let var$1, var$2;
    var$1 = $this.$service3.$foo_VHLrpW();
    var$2 = org_teavm_runtime_import.java_lang_StringBuilder__init__V$1();
    org_teavm_runtime_import.java_lang_StringBuilder_append_ZOYxhs(org_teavm_runtime_import.java_lang_StringBuilder_append_ZOYxhs(var$2, org_teavm_runtime_import.$rt_str("Main:")), var$1);
    return org_teavm_runtime_import.java_lang_StringBuilder_toString_VHLrpW(var$2);
},
js_JsMain__init__mmFgnD = ($this, $service3) => {
    js_JsMain_$callClinit();
    org_teavm_runtime_import.java_lang_Object__init__V($this);
    $this.$service3 = $service3;
},
js_JsMain__init__mmFgnD$1 = var_0 => {
    let var_1 = new js_JsMain();
    js_JsMain__init__mmFgnD(var_1, var_0);
    return var_1;
},
js_JsMain_main_WiJjkv = $args => {
    let $service1, $service2, $service3, $main, $list, var$7, $map, $bar, $baz;
    js_JsMain_$callClinit();
    $service1 = js_Service1_import.js_Service1__init__V$1();
    $service2 = js_Service2_import.js_Service2__init__V$1();
    $service3 = js_Service3_import.js_Service3__init__linHFy$1($service1, $service2);
    $main = js_JsMain__init__mmFgnD$1($service3);
    $list = org_teavm_runtime_import.java_util_ArrayList__init__V$1();
    $list.$add_uKWEwg(org_teavm_runtime_import.$rt_str("item1"));
    $list.$add_uKWEwg(org_teavm_runtime_import.$rt_str("item2"));
    $list.$add_uKWEwg(org_teavm_runtime_import.$rt_str("item3"));
    var$7 = org_teavm_runtime_import.java_lang_System_out_JQwxsu();
    org_teavm_runtime_import.java_util_Objects_requireNonNull_lVIoyP(var$7);
    $list.$forEach_bOKmPa(js_JsMain$main$lambda$_2_0__init__lLaEnR$1(var$7));
    (org_teavm_runtime_import.java_lang_System_out_JQwxsu()).$println_XjCHVS($main.$foo_VHLrpW());
    var$7 = org_teavm_runtime_import.java_lang_System_out_JQwxsu();
    var$7.$println_VI(org_teavm_runtime_import.java_lang_String_CASE_INSENSITIVE_ORDER.$compare_ZygPOh(org_teavm_runtime_import.$rt_str("HELLO"), org_teavm_runtime_import.$rt_str("hello")));
    $map = org_teavm_runtime_import.java_util_HashMap__init__V$1();
    $map.$put_tsMSwf(org_teavm_runtime_import.$rt_str("hello"), org_teavm_runtime_import.java_lang_Integer_valueOf_jxXMoQ(1));
    $map.$put_tsMSwf(org_teavm_runtime_import.$rt_str("world"), org_teavm_runtime_import.java_lang_Integer_valueOf_jxXMoQ(2));
    $map.$forEach_bjTrMv(js_JsMain$main$lambda$_2_1__init__V$1());
    $bar = js_Bar_import.js_Bar__init__XjCHVS$1(org_teavm_runtime_import.$rt_str("x"));
    (org_teavm_runtime_import.java_lang_System_out_JQwxsu()).$println_XjCHVS($bar.$foo_VHLrpW());
    $baz = js_Baz_import.js_Baz__init__XjCHVS$1(org_teavm_runtime_import.$rt_str("y"));
    (org_teavm_runtime_import.java_lang_System_out_JQwxsu()).$println_XjCHVS($baz.$foo_VHLrpW());
    (org_teavm_runtime_import.java_lang_System_out_JQwxsu()).$println_XjCHVS((js_JsMain_make_aTGoyT(org_teavm_runtime_import.$rt_str("Bar"))).$foo_VHLrpW());
    (org_teavm_runtime_import.java_lang_System_out_JQwxsu()).$println_XjCHVS((js_JsMain_make_aTGoyT(org_teavm_runtime_import.$rt_str("Baz"))).$foo_VHLrpW());
    (org_teavm_runtime_import.java_lang_System_out_JQwxsu()).$println_XjCHVS(org_teavm_runtime_import.java_lang_Class_getName_VHLrpW(org_teavm_runtime_import.java_lang_Object_getClass_rQPqgt(js_JsMain_make_aTGoyT(org_teavm_runtime_import.$rt_str("Bar")))));
    (org_teavm_runtime_import.java_lang_System_out_JQwxsu()).$println_XjCHVS(org_teavm_runtime_import.java_lang_Class_getName_VHLrpW(org_teavm_runtime_import.java_lang_Object_getClass_rQPqgt(js_JsMain_make_aTGoyT(org_teavm_runtime_import.$rt_str("Baz")))));
    (org_teavm_runtime_import.java_lang_System_out_JQwxsu()).$println_VZ(org_teavm_runtime_import.$rt_isInstance(js_JsMain_make_aTGoyT(org_teavm_runtime_import.$rt_str("Baz")), js_Iface_import.js_Iface));
    (org_teavm_runtime_import.java_lang_System_out_JQwxsu()).$println_VZ(org_teavm_runtime_import.$rt_isInstance(js_JsMain_make_aTGoyT(org_teavm_runtime_import.$rt_str("Baz")), js_Bar_import.js_Bar));
    (org_teavm_runtime_import.java_lang_System_out_JQwxsu()).$println_VZ(org_teavm_runtime_import.$rt_isInstance(js_JsMain_make_aTGoyT(org_teavm_runtime_import.$rt_str("Baz")), js_Baz_import.js_Baz));
    (org_teavm_runtime_import.java_lang_System_out_JQwxsu()).$println_VZ(org_teavm_runtime_import.$rt_isInstance(js_JsMain_make_aTGoyT(org_teavm_runtime_import.$rt_str("Bar")), js_Iface_import.js_Iface));
    (org_teavm_runtime_import.java_lang_System_out_JQwxsu()).$println_VZ(org_teavm_runtime_import.$rt_isInstance(js_JsMain_make_aTGoyT(org_teavm_runtime_import.$rt_str("Bar")), js_Bar_import.js_Bar));
    (org_teavm_runtime_import.java_lang_System_out_JQwxsu()).$println_VZ(org_teavm_runtime_import.$rt_isInstance(js_JsMain_make_aTGoyT(org_teavm_runtime_import.$rt_str("Bar")), js_Baz_import.js_Baz));
},
js_JsMain_make_aTGoyT = $what => {
    js_JsMain_$callClinit();
    if ($what.$equals_uKWEwg(org_teavm_runtime_import.$rt_str("Bar")))
        return js_Bar_import.js_Bar__init__XjCHVS$1(org_teavm_runtime_import.$rt_str("x"));
    if (!$what.$equals_uKWEwg(org_teavm_runtime_import.$rt_str("Baz")))
        return null;
    return js_Baz_import.js_Baz__init__XjCHVS$1(org_teavm_runtime_import.$rt_str("y"));
},
js_JsMain_lambda$main$0_CeLKBX = ($k, $v) => {
    let var$3, var$4;
    js_JsMain_$callClinit();
    var$3 = org_teavm_runtime_import.java_lang_System_out_JQwxsu();
    var$4 = org_teavm_runtime_import.java_lang_StringBuilder__init__V$1();
    org_teavm_runtime_import.java_lang_StringBuilder_append_ZOYxhs(org_teavm_runtime_import.java_lang_StringBuilder_append_zwKTwE(org_teavm_runtime_import.java_lang_StringBuilder_append_ZOYxhs(var$4, $k), 32), $v);
    var$3.$println_XjCHVS(org_teavm_runtime_import.java_lang_StringBuilder_toString_VHLrpW(var$4));
},
js_JsMain__clinit__V = () => {
    let var$1;
    var$1 = js_JsMain$_clinit_$lambda$_6_0__init__V$1();
    js_JsMain_export$js_body$_4_jMtQXM("JsMain1", org_teavm_runtime_import.org_teavm_jso_impl_JS_function_PmAeiP(org_teavm_runtime_import.org_teavm_jso_impl_JSWrapper_unwrap_jntYSA(var$1), "create"));
},
js_JsMain_export$js_body$_4_jMtQXM = (var$1, var$2) => {
    let window = {  };
    window[var$1] = var$2;
},
js_JsMain$JsMainCtor = org_teavm_runtime_import.$rt_classWithoutFields(0),
js_JsMain$_clinit_$lambda$_6_0 = org_teavm_runtime_import.$rt_classWithoutFields(),
js_JsMain$_clinit_$lambda$_6_0__init__V = var$0 => {
    org_teavm_runtime_import.java_lang_Object__init__V(var$0);
},
js_JsMain$_clinit_$lambda$_6_0__init__V$1 = () => {
    let var_0 = new js_JsMain$_clinit_$lambda$_6_0();
    js_JsMain$_clinit_$lambda$_6_0__init__V(var_0);
    return var_0;
},
js_JsMain$_clinit_$lambda$_6_0_create_yGwQxM = (var$0, var$1) => {
    return js_JsMain__init__mmFgnD$1(var$1);
},
js_JsMain$_clinit_$lambda$_6_0_create$exported$0_PmAeiP = (var$1, var$2) => {
    var$2 = var$2;
    return org_teavm_runtime_import.org_teavm_jso_impl_JSWrapper_javaToJs_jntYSA(var$1.$create_yGwQxM(var$2));
};
function js_JsMain$main$lambda$_2_0() {
    org_teavm_runtime_import.java_lang_Object.call(this);
    this.$_0 = null;
}
let js_JsMain$main$lambda$_2_0__init__lLaEnR = (var$0, var$1) => {
    org_teavm_runtime_import.java_lang_Object__init__V(var$0);
    var$0.$_0 = var$1;
},
js_JsMain$main$lambda$_2_0__init__lLaEnR$1 = var_0 => {
    let var_1 = new js_JsMain$main$lambda$_2_0();
    js_JsMain$main$lambda$_2_0__init__lLaEnR(var_1, var_0);
    return var_1;
},
js_JsMain$main$lambda$_2_0_accept_HFyQDR = (var$0, var$1) => {
    js_JsMain$main$lambda$_2_0_accept_XjCHVS(var$0, var$1);
},
js_JsMain$main$lambda$_2_0_accept_XjCHVS = (var$0, var$1) => {
    var$0.$_0.$println_XjCHVS(var$1);
},
js_JsMain$main$lambda$_2_1 = org_teavm_runtime_import.$rt_classWithoutFields(),
js_JsMain$main$lambda$_2_1__init__V = var$0 => {
    org_teavm_runtime_import.java_lang_Object__init__V(var$0);
},
js_JsMain$main$lambda$_2_1__init__V$1 = () => {
    let var_0 = new js_JsMain$main$lambda$_2_1();
    js_JsMain$main$lambda$_2_1__init__V(var_0);
    return var_0;
},
js_JsMain$main$lambda$_2_1_accept_PLTLFS = (var$0, var$1, var$2) => {
    js_JsMain$main$lambda$_2_1_accept_CeLKBX(var$0, var$1, var$2);
},
js_JsMain$main$lambda$_2_1_accept_CeLKBX = (var$0, var$1, var$2) => {
    js_JsMain_lambda$main$0_CeLKBX(var$1, var$2);
};
org_teavm_runtime_import.$rt_packages([
]);
org_teavm_runtime_import.$rt_metadata([js_JsMain, 0, org_teavm_runtime_import.java_lang_Object, [], 0, 3, 0, js_JsMain_$callClinit, [(o,r)=>o.$foo_VHLrpW=r, org_teavm_runtime_import.$rt_wrapFunction0(js_JsMain_foo_VHLrpW), (o,r)=>o.$_init__mmFgnD=r, org_teavm_runtime_import.$rt_wrapFunction1(js_JsMain__init__mmFgnD)],
js_JsMain$JsMainCtor, 0, org_teavm_runtime_import.java_lang_Object, [org_teavm_runtime_import.org_teavm_jso_JSObject], 3, 3, 0, 0, 0,
js_JsMain$_clinit_$lambda$_6_0, 0, org_teavm_runtime_import.java_lang_Object, [js_JsMain$JsMainCtor], 0, 3, 0, 0, [(o,r)=>o.$_init__V=r, org_teavm_runtime_import.$rt_wrapFunction0(js_JsMain$_clinit_$lambda$_6_0__init__V), (o,r)=>o.$create_yGwQxM=r, org_teavm_runtime_import.$rt_wrapFunction1(js_JsMain$_clinit_$lambda$_6_0_create_yGwQxM)],
js_JsMain$main$lambda$_2_0, 0, org_teavm_runtime_import.java_lang_Object, [org_teavm_runtime_import.java_util_function_Consumer], 0, 3, 0, 0, [(o,r)=>o.$_init__lLaEnR=r, org_teavm_runtime_import.$rt_wrapFunction1(js_JsMain$main$lambda$_2_0__init__lLaEnR), (o,r)=>o.$accept_HFyQDR=r, org_teavm_runtime_import.$rt_wrapFunction1(js_JsMain$main$lambda$_2_0_accept_HFyQDR), (o,r)=>o.$accept_XjCHVS=r, org_teavm_runtime_import.$rt_wrapFunction1(js_JsMain$main$lambda$_2_0_accept_XjCHVS)],
js_JsMain$main$lambda$_2_1, 0, org_teavm_runtime_import.java_lang_Object, [org_teavm_runtime_import.java_util_function_BiConsumer], 0, 3, 0, 0, [(o,r)=>o.$_init__V=r, org_teavm_runtime_import.$rt_wrapFunction0(js_JsMain$main$lambda$_2_1__init__V), (o,r)=>o.$accept_PLTLFS=r, org_teavm_runtime_import.$rt_wrapFunction2(js_JsMain$main$lambda$_2_1_accept_PLTLFS), (o,r)=>o.$accept_CeLKBX=r, org_teavm_runtime_import.$rt_wrapFunction2(js_JsMain$main$lambda$_2_1_accept_CeLKBX)]]);
let $rt_export_main = org_teavm_runtime_import.$rt_mainStarter(js_JsMain_main_WiJjkv);
$rt_export_main.javaException = org_teavm_runtime_import.$rt_javaException;
let $rt_jso_marker = Symbol('jsoClass');
(() => {
    let c;
    c = js_JsMain$_clinit_$lambda$_6_0.prototype;
    c.create = org_teavm_runtime_import.$rt_callWithReceiver(js_JsMain$_clinit_$lambda$_6_0_create$exported$0_PmAeiP);
})();
js_JsMain_$callClinit();
exports.js_JsMain__init__mmFgnD = js_JsMain__init__mmFgnD;
exports.js_JsMain__init__mmFgnD$1 = js_JsMain__init__mmFgnD$1;
exports.js_JsMain_foo_VHLrpW = js_JsMain_foo_VHLrpW;
exports.js_JsMain_main_WiJjkv = js_JsMain_main_WiJjkv;
exports.js_JsMain = js_JsMain;
exports.js_JsMain$_clinit_$lambda$_6_0__init__V = js_JsMain$_clinit_$lambda$_6_0__init__V;
exports.js_JsMain$_clinit_$lambda$_6_0__init__V$1 = js_JsMain$_clinit_$lambda$_6_0__init__V$1;
exports.js_JsMain$_clinit_$lambda$_6_0_create$exported$0_PmAeiP = js_JsMain$_clinit_$lambda$_6_0_create$exported$0_PmAeiP;
exports.js_JsMain$_clinit_$lambda$_6_0_create_yGwQxM = js_JsMain$_clinit_$lambda$_6_0_create_yGwQxM;
exports.js_JsMain$_clinit_$lambda$_6_0 = js_JsMain$_clinit_$lambda$_6_0;
exports.js_JsMain$JsMainCtor = js_JsMain$JsMainCtor;
exports.js_JsMain$main$lambda$_2_0__init__lLaEnR = js_JsMain$main$lambda$_2_0__init__lLaEnR;
exports.js_JsMain$main$lambda$_2_0__init__lLaEnR$1 = js_JsMain$main$lambda$_2_0__init__lLaEnR$1;
exports.js_JsMain$main$lambda$_2_0_accept_HFyQDR = js_JsMain$main$lambda$_2_0_accept_HFyQDR;
exports.js_JsMain$main$lambda$_2_0_accept_XjCHVS = js_JsMain$main$lambda$_2_0_accept_XjCHVS;
exports.js_JsMain$main$lambda$_2_0 = js_JsMain$main$lambda$_2_0;
exports.js_JsMain$main$lambda$_2_1__init__V = js_JsMain$main$lambda$_2_1__init__V;
exports.js_JsMain$main$lambda$_2_1__init__V$1 = js_JsMain$main$lambda$_2_1__init__V$1;
exports.js_JsMain$main$lambda$_2_1_accept_PLTLFS = js_JsMain$main$lambda$_2_1_accept_PLTLFS;
exports.js_JsMain$main$lambda$_2_1_accept_CeLKBX = js_JsMain$main$lambda$_2_1_accept_CeLKBX;
exports.js_JsMain$main$lambda$_2_1 = js_JsMain$main$lambda$_2_1;
exports.main = $rt_export_main;
