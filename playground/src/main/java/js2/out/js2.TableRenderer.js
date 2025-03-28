"use strict";
let org_teavm_runtime_import = require("./org.teavm.runtime.js");

let j_TableRenderer = org_teavm_runtime_import.$rt_classWithoutFields(),
j_TableRenderer__init_ = $this => {
    org_teavm_runtime_import.jl_Object__init_($this);
},
j_TableRenderer__init_0 = () => {
    let var_0 = new j_TableRenderer();
    j_TableRenderer__init_(var_0);
    return var_0;
},
j_TableRenderer_renderTable_guavLb = ($this, $data) => {
    let $width, $cellWidth, var$4, $row, var$6, $cell, var$8, $sb, $it;
    if ($data.$isEmpty())
        return org_teavm_runtime_import.$rt_str("");
    $width = 0;
    $cellWidth = 0;
    var$4 = $data.$iterator();
    while (var$4.$hasNext()) {
        $row = var$4.$next();
        var$6 = $row.$iterator();
        while (var$6.$hasNext()) {
            $cell = var$6.$next();
            if ($cell.$length() > $cellWidth)
                $cellWidth = $cell.$length();
        }
        if ($width < $row.$size())
            $width = $row.$size();
    }
    var$8 = $cellWidth + 2 | 0;
    $sb = org_teavm_runtime_import.jl_StringBuilder__init_0();
    $it = $data.$iterator();
    j_TableRenderer_renderRow_Jibwis($this, $it.$next(), var$8, $sb);
    j_TableRenderer_renderHeaderLine_BACbqG($this, $width, var$8, $sb);
    while ($it.$hasNext()) {
        j_TableRenderer_renderRow_Jibwis($this, $it.$next(), var$8, $sb);
    }
    return $sb.$toString();
},
j_TableRenderer_renderHeaderLine_BACbqG = ($this, $width, $cellWidth, $sb) => {
    $sb.$append_VHLrpW(j_TableRenderer_fill_CI($this, 45, $cellWidth + 1 | 0));
    $sb.$append_VHLrpW(org_teavm_runtime_import.$rt_str("+"));
    $sb.$append_VHLrpW(j_TableRenderer_fill_CI($this, 45, org_teavm_runtime_import.$rt_imul($width - 1 | 0, $cellWidth) + 1 | 0));
    $sb.$append_VHLrpW(org_teavm_runtime_import.$rt_str("\n"));
},
j_TableRenderer_renderRow_Jibwis = ($this, $row, $cellWidth, $sb) => {
    let $x, var$5, $cell;
    $x = 0;
    var$5 = $row.$iterator();
    while (var$5.$hasNext()) {
        $cell = var$5.$next();
        if ($x == 1)
            $sb.$append_VHLrpW(org_teavm_runtime_import.$rt_str(" | "));
        $sb.$append_VHLrpW(j_TableRenderer_padLeftTo_iFmOGb($this, $cell, $cellWidth));
        $x = $x + 1 | 0;
    }
    $sb.$append_VHLrpW(org_teavm_runtime_import.$rt_str("\n"));
},
j_TableRenderer_padLeftTo_iFmOGb = ($this, $s, $size) => {
    let $pad, var$4, var$5;
    $pad = $size - $s.$length() | 0;
    if ($pad <= 0)
        return $s;
    var$4 = j_TableRenderer_fill_CI($this, 32, $pad);
    var$5 = org_teavm_runtime_import.jl_StringBuilder__init_0();
    org_teavm_runtime_import.jl_StringBuilder_append_yToRiJ(org_teavm_runtime_import.jl_StringBuilder_append_yToRiJ(var$5, var$4), $s);
    return org_teavm_runtime_import.jl_StringBuilder_toString(var$5);
},
j_TableRenderer_fill_CI = ($this, $c, $size) => {
    let $fill;
    $fill = org_teavm_runtime_import.$rt_createCharArray($size);
    org_teavm_runtime_import.ju_Arrays_fill__CC($fill, $c);
    return org_teavm_runtime_import.jl_String__init___C0($fill);
};
org_teavm_runtime_import.$rt_packages([
]);
org_teavm_runtime_import.$rt_metadata([j_TableRenderer, 0, org_teavm_runtime_import.jl_Object, [], 0, 3, 0, 0, [(o,r)=>o.$_init_=r, org_teavm_runtime_import.$rt_wrapFunction0(j_TableRenderer__init_), (o,r)=>o.$renderTable_guavLb=r, org_teavm_runtime_import.$rt_wrapFunction1(j_TableRenderer_renderTable_guavLb)]]);
exports.j_TableRenderer__init_ = j_TableRenderer__init_;
exports.j_TableRenderer__init_0 = j_TableRenderer__init_0;
exports.j_TableRenderer_renderTable_guavLb = j_TableRenderer_renderTable_guavLb;
exports.j_TableRenderer = j_TableRenderer;
