"use strict";
let jst_Table_import = require("./jst.Table.js");
let jst_TableRenderer_import = require("./jst.TableRenderer.js");
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
    let $table, $tableRenderer;
    j_Main_$callClinit();
    $table = jst_Table_import.j_Table_newInstance();
    $tableRenderer = jst_TableRenderer_import.j_TableRenderer_newInstance();
    j_Main_fillTable_Fdfton($table);
    return $tableRenderer.$renderTable_guavLb($table.$getTable());
},
j_Main_fillTable_Fdfton = $table => {
    let $i, $j;
    j_Main_$callClinit();
    $i = 1;
    while ($i <= 15) {
        $j = 1;
        while ($j <= 15) {
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