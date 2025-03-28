"use strict";
let js2_Table_import = require("./js2.Table.js");
let js2_TableRenderer_import = require("./js2.TableRenderer.js");
let org_teavm_runtime_import = require("./org.teavm.runtime.js");

let j_Main = org_teavm_runtime_import.$rt_classWithoutFields(),
j_Main_$callClinit = () => {
    j_Main_$callClinit = org_teavm_runtime_import.$rt_eraseClinit(j_Main);
    j_Main__clinit_();
},
j_Main_main_Slabyb = $args => {
    j_Main_$callClinit();
    (org_teavm_runtime_import.jl_System_out()).$println_VHLrpW(j_Main_renderTable());
},
j_Main_renderTable = () => {
    let $table;
    j_Main_$callClinit();
    $table = js2_Table_import.j_Table_newInstance();
    j_Main_fillTable_ZCrTeN($table);
    return (js2_TableRenderer_import.j_TableRenderer__init_0()).$renderTable_guavLb($table.$getTable());
},
j_Main_fillTable_ZCrTeN = $table => {
    let $i, $j;
    j_Main_$callClinit();
    $i = 1;
    while ($i < 15) {
        $j = 1;
        while ($j < 15) {
            $table.$addCell_RzmAeX($j, $i, org_teavm_runtime_import.jl_String_valueOf_I(org_teavm_runtime_import.$rt_imul($i, $j)));
            $j = $j + 1 | 0;
        }
        $table.$addColumnHeader_nftnjR($i, org_teavm_runtime_import.jl_String_valueOf_I($i));
        $table.$addRowHeader_nftnjR($i, org_teavm_runtime_import.jl_String_valueOf_I($i));
        $i = $i + 1 | 0;
    }
},
j_Main__clinit_ = () => {
    return;
};
org_teavm_runtime_import.$rt_packages([
]);
org_teavm_runtime_import.$rt_metadata([j_Main, 0, org_teavm_runtime_import.jl_Object, [], 0, 3, 0, j_Main_$callClinit, 0]);
let $rt_export_main = org_teavm_runtime_import.$rt_mainStarter(j_Main_main_Slabyb);
$rt_export_main.javaException = org_teavm_runtime_import.$rt_javaException;
j_Main_$callClinit();
exports.j_Main_main_Slabyb = j_Main_main_Slabyb;
exports.j_Main = j_Main;
exports.main = $rt_export_main;
exports.main();