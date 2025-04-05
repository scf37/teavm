"use strict";
let jst_TableRenderer_import = require("./jst.TableRenderer.js");
let org_teavm_runtime_import = require("./org.teavm.runtime.js");

let jst_TableRendererImpl = org_teavm_runtime_import.$rt_classWithoutFields(),
jst_TableRendererImpl__init__V = $this => {
    org_teavm_runtime_import.java_lang_Object__init__V($this);
},
jst_TableRendererImpl__init__V$1 = () => {
    let var_0 = new jst_TableRendererImpl();
    jst_TableRendererImpl__init__V(var_0);
    return var_0;
},
jst_TableRendererImpl_renderTable_EQObyq = ($this, $data) => {
    let $width, $cellWidth, var$4, $row, var$6, $cell, var$8, $sb, $it;
    if ($data.$isEmpty_Z())
        return org_teavm_runtime_import.$rt_str("");
    $width = 0;
    $cellWidth = 0;
    var$4 = $data.$iterator_nRSvFx();
    while (var$4.$hasNext_Z()) {
        $row = var$4.$next_yToRiJ();
        var$6 = $row.$iterator_nRSvFx();
        while (var$6.$hasNext_Z()) {
            $cell = var$6.$next_yToRiJ();
            if ($cell.$length_I() > $cellWidth)
                $cellWidth = $cell.$length_I();
        }
        if ($width < $row.$size_I())
            $width = $row.$size_I();
    }
    var$8 = $cellWidth + 2 | 0;
    $sb = org_teavm_runtime_import.java_lang_StringBuilder__init__V$1();
    $it = $data.$iterator_nRSvFx();
    jst_TableRendererImpl_renderRow_pvKxhP($this, $it.$next_yToRiJ(), var$8, $sb);
    jst_TableRendererImpl_renderHeaderLine_yVIygR($this, $width, var$8, $sb);
    while ($it.$hasNext_Z()) {
        jst_TableRendererImpl_renderRow_pvKxhP($this, $it.$next_yToRiJ(), var$8, $sb);
    }
    return $sb.$toString_VHLrpW();
},
jst_TableRendererImpl_renderHeaderLine_yVIygR = ($this, $width, $cellWidth, $sb) => {
    $sb.$append_hrVwXi(jst_TableRendererImpl_fill_jpjwPF($this, 45, $cellWidth + 1 | 0));
    $sb.$append_hrVwXi(org_teavm_runtime_import.$rt_str("+"));
    $sb.$append_hrVwXi(jst_TableRendererImpl_fill_jpjwPF($this, 45, org_teavm_runtime_import.$rt_imul($width - 1 | 0, $cellWidth) + 1 | 0));
    $sb.$append_hrVwXi(org_teavm_runtime_import.$rt_str("\n"));
},
jst_TableRendererImpl_renderRow_pvKxhP = ($this, $row, $cellWidth, $sb) => {
    let $x, var$5, $cell;
    $x = 0;
    var$5 = $row.$iterator_nRSvFx();
    while (var$5.$hasNext_Z()) {
        $cell = var$5.$next_yToRiJ();
        if ($x == 1)
            $sb.$append_hrVwXi(org_teavm_runtime_import.$rt_str(" | "));
        $sb.$append_hrVwXi(jst_TableRendererImpl_padLeftTo_jtMhJT($this, $cell, $cellWidth));
        $x = $x + 1 | 0;
    }
    $sb.$append_hrVwXi(org_teavm_runtime_import.$rt_str("\n"));
},
jst_TableRendererImpl_padLeftTo_jtMhJT = ($this, $s, $size) => {
    let $pad, var$4, var$5;
    $pad = $size - $s.$length_I() | 0;
    if ($pad <= 0)
        return $s;
    var$4 = jst_TableRendererImpl_fill_jpjwPF($this, 32, $pad);
    var$5 = org_teavm_runtime_import.java_lang_StringBuilder__init__V$1();
    org_teavm_runtime_import.java_lang_StringBuilder_append_ZOYxhs(org_teavm_runtime_import.java_lang_StringBuilder_append_ZOYxhs(var$5, var$4), $s);
    return org_teavm_runtime_import.java_lang_StringBuilder_toString_VHLrpW(var$5);
},
jst_TableRendererImpl_fill_jpjwPF = ($this, $c, $size) => {
    let $fill;
    $fill = org_teavm_runtime_import.$rt_createCharArray($size);
    org_teavm_runtime_import.java_util_Arrays_fill_V_CC($fill, $c);
    return org_teavm_runtime_import.java_lang_String__init__V_C$1($fill);
};
org_teavm_runtime_import.$rt_packages([
]);
org_teavm_runtime_import.$rt_metadata([jst_TableRendererImpl, 0, org_teavm_runtime_import.java_lang_Object, [jst_TableRenderer_import.jst_TableRenderer], 0, 0, 0, 0, [(o,r)=>o.$_init__V=r, org_teavm_runtime_import.$rt_wrapFunction0(jst_TableRendererImpl__init__V), (o,r)=>o.$renderTable_EQObyq=r, org_teavm_runtime_import.$rt_wrapFunction1(jst_TableRendererImpl_renderTable_EQObyq)]]);
exports.jst_TableRendererImpl__init__V = jst_TableRendererImpl__init__V;
exports.jst_TableRendererImpl__init__V$1 = jst_TableRendererImpl__init__V$1;
exports.jst_TableRendererImpl_renderTable_EQObyq = jst_TableRendererImpl_renderTable_EQObyq;
exports.jst_TableRendererImpl = jst_TableRendererImpl;
