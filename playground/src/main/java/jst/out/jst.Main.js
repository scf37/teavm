"use strict";
let jst_Table_import = require("./jst.Table.js");
let jst_TableRenderer_import = require("./jst.TableRenderer.js");
let org_teavm_runtime_import = require("./org.teavm.runtime.js");

let jst_Main = org_teavm_runtime_import.$rt_classWithoutFields(),
jst_Main_$callClinit = () => {
    jst_Main_$callClinit = org_teavm_runtime_import.$rt_eraseClinit(jst_Main);
    jst_Main__clinit__V();
},
jst_Main_main_WiJjkv = $args => {
    jst_Main_$callClinit();
    (org_teavm_runtime_import.java_lang_System_out_JQwxsu()).$println_XjCHVS(jst_Main_renderTable_VHLrpW());
},
jst_Main_renderTable_VHLrpW = () => {
    let $table, $tableRenderer;
    jst_Main_$callClinit();
    $table = jst_Table_import.jst_Table_newInstance_Fdfton();
    $tableRenderer = jst_TableRenderer_import.jst_TableRenderer_newInstance_SodLDa();
    jst_Main_fillTable_usRYdC($table);
    return $tableRenderer.$renderTable_EQObyq($table.$getTable_guavLb());
},
jst_Main_fillTable_usRYdC = $table => {
    let $i, $j;
    jst_Main_$callClinit();
    $i = 1;
    while ($i <= 15) {
        $j = 1;
        while ($j <= 15) {
            $table.$addCell_BPCxea($j, $i, org_teavm_runtime_import.java_lang_String_valueOf_iFmOGb(org_teavm_runtime_import.$rt_imul($i, $j)));
            $j = $j + 1 | 0;
        }
        $table.$addColumnHeader_yUVyrR($i, org_teavm_runtime_import.java_lang_String_valueOf_iFmOGb($i));
        $table.$addRowHeader_yUVyrR($i, org_teavm_runtime_import.java_lang_String_valueOf_iFmOGb($i));
        $i = $i + 1 | 0;
    }
},
jst_Main__clinit__V = () => {
    return;
};
org_teavm_runtime_import.$rt_packages([
]);
org_teavm_runtime_import.$rt_metadata([jst_Main, 0, org_teavm_runtime_import.java_lang_Object, [], 0, 3, 0, jst_Main_$callClinit, 0]);
let $rt_export_main = org_teavm_runtime_import.$rt_mainStarter(jst_Main_main_WiJjkv);
$rt_export_main.javaException = org_teavm_runtime_import.$rt_javaException;
jst_Main_$callClinit();
exports.jst_Main_main_WiJjkv = jst_Main_main_WiJjkv;
exports.jst_Main = jst_Main;
exports.main = $rt_export_main;
exports.main();