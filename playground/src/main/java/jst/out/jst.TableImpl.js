"use strict";
let jst_Table_import = require("./jst.Table.js");
let org_teavm_runtime_import = require("./org.teavm.runtime.js");

function jst_TableImpl() {
    org_teavm_runtime_import.java_lang_Object.call(this);
    this.$values = null;
}
let jst_TableImpl__init__V = $this => {
    org_teavm_runtime_import.java_lang_Object__init__V($this);
    $this.$values = org_teavm_runtime_import.java_util_HashMap__init__V$1();
},
jst_TableImpl__init__V$1 = () => {
    let var_0 = new jst_TableImpl();
    jst_TableImpl__init__V(var_0);
    return var_0;
},
jst_TableImpl_addCell_BPCxea = ($this, $x, $y, $value) => {
    if ($x >= 0 && $y >= 0) {
        $this.$values.$put_tsMSwf(jst_TableImpl$Point__init__roZgez$1($this, $x, $y), $value);
        return;
    }
    org_teavm_runtime_import.$rt_throw(org_teavm_runtime_import.java_lang_IllegalArgumentException__init__XjCHVS$1(org_teavm_runtime_import.$rt_str("Table coordinates can not be negative")));
},
jst_TableImpl_addRowHeader_yUVyrR = ($this, $n, $value) => {
    $this.$values.$put_tsMSwf(jst_TableImpl$Point__init__roZgez$1($this, (-1), $n), $value);
},
jst_TableImpl_addColumnHeader_yUVyrR = ($this, $n, $value) => {
    $this.$values.$put_tsMSwf(jst_TableImpl$Point__init__roZgez$1($this, $n, (-1)), $value);
},
jst_TableImpl_getTable_guavLb = $this => {
    let $width, $height, var$3, $p, var$5, var$6, $result, $y, $row, $x, $value;
    $width = (-1);
    $height = (-1);
    var$3 = ($this.$values.$keySet_wfeRzl()).$iterator_nRSvFx();
    while (var$3.$hasNext_Z()) {
        $p = var$3.$next_yToRiJ();
        if ($p.$x > $width)
            $width = $p.$x;
        if ($p.$y > $height)
            $height = $p.$y;
    }
    var$5 = $width + 1 | 0;
    var$6 = $height + 1 | 0;
    $result = org_teavm_runtime_import.java_util_ArrayList__init__VI$1(var$6);
    $y = (-1);
    while ($y < var$6) {
        $row = org_teavm_runtime_import.java_util_ArrayList__init__VI$1(var$5);
        $x = (-1);
        while ($x < var$5) {
            $value = $this.$values.$getOrDefault_tsMSwf(jst_TableImpl$Point__init__roZgez$1($this, $x, $y), org_teavm_runtime_import.$rt_str("?"));
            if ($x == (-1) && $y == (-1))
                $value = org_teavm_runtime_import.$rt_str("");
            $row.$add_uKWEwg($value);
            $x = $x + 1 | 0;
        }
        $result.$add_uKWEwg($row);
        $y = $y + 1 | 0;
    }
    return $result;
};
function jst_TableImpl$Point() {
    let a = this; org_teavm_runtime_import.java_lang_Object.call(a);
    a.$x = 0;
    a.$y = 0;
    a.$this$0 = null;
}
let jst_TableImpl$Point__init__roZgez = ($this, var$1, $x, $y) => {
    $this.$this$0 = var$1;
    org_teavm_runtime_import.java_lang_Object__init__V($this);
    $this.$x = $x;
    $this.$y = $y;
},
jst_TableImpl$Point__init__roZgez$1 = (var_0, var_1, var_2) => {
    let var_3 = new jst_TableImpl$Point();
    jst_TableImpl$Point__init__roZgez(var_3, var_0, var_1, var_2);
    return var_3;
},
jst_TableImpl$Point_equals_uKWEwg = ($this, $o) => {
    let $point;
    if (!($o instanceof jst_TableImpl$Point))
        return 0;
    $point = $o;
    return $this.$x == $point.$x && $this.$y == $point.$y ? 1 : 0;
},
jst_TableImpl$Point_hashCode_I = $this => {
    let var$1, var$2;
    var$1 = org_teavm_runtime_import.$rt_createArray(org_teavm_runtime_import.java_lang_Object, 2);
    var$2 = var$1.data;
    var$2[0] = org_teavm_runtime_import.java_lang_Integer_valueOf_jxXMoQ($this.$x);
    var$2[1] = org_teavm_runtime_import.java_lang_Integer_valueOf_jxXMoQ($this.$y);
    return org_teavm_runtime_import.java_util_Objects_hash_Xpebqu(var$1);
};
org_teavm_runtime_import.$rt_packages([
]);
org_teavm_runtime_import.$rt_metadata([jst_TableImpl, 0, org_teavm_runtime_import.java_lang_Object, [jst_Table_import.jst_Table], 0, 0, 0, 0, [(o,r)=>o.$_init__V=r, org_teavm_runtime_import.$rt_wrapFunction0(jst_TableImpl__init__V), (o,r)=>o.$addCell_BPCxea=r, org_teavm_runtime_import.$rt_wrapFunction3(jst_TableImpl_addCell_BPCxea), (o,r)=>o.$addRowHeader_yUVyrR=r, org_teavm_runtime_import.$rt_wrapFunction2(jst_TableImpl_addRowHeader_yUVyrR), (o,r)=>o.$addColumnHeader_yUVyrR=r, org_teavm_runtime_import.$rt_wrapFunction2(jst_TableImpl_addColumnHeader_yUVyrR),
(o,r)=>o.$getTable_guavLb=r, org_teavm_runtime_import.$rt_wrapFunction0(jst_TableImpl_getTable_guavLb)],
jst_TableImpl$Point, 0, org_teavm_runtime_import.java_lang_Object, [], 0, 0, 0, 0, [(o,r)=>o.$_init__roZgez=r, org_teavm_runtime_import.$rt_wrapFunction3(jst_TableImpl$Point__init__roZgez), (o,r)=>o.$equals_uKWEwg=r, org_teavm_runtime_import.$rt_wrapFunction1(jst_TableImpl$Point_equals_uKWEwg), (o,r)=>o.$hashCode_I=r, org_teavm_runtime_import.$rt_wrapFunction0(jst_TableImpl$Point_hashCode_I)]]);
exports.jst_TableImpl__init__V = jst_TableImpl__init__V;
exports.jst_TableImpl__init__V$1 = jst_TableImpl__init__V$1;
exports.jst_TableImpl_addCell_BPCxea = jst_TableImpl_addCell_BPCxea;
exports.jst_TableImpl_addColumnHeader_yUVyrR = jst_TableImpl_addColumnHeader_yUVyrR;
exports.jst_TableImpl_addRowHeader_yUVyrR = jst_TableImpl_addRowHeader_yUVyrR;
exports.jst_TableImpl_getTable_guavLb = jst_TableImpl_getTable_guavLb;
exports.jst_TableImpl = jst_TableImpl;
exports.jst_TableImpl$Point__init__roZgez = jst_TableImpl$Point__init__roZgez;
exports.jst_TableImpl$Point__init__roZgez$1 = jst_TableImpl$Point__init__roZgez$1;
exports.jst_TableImpl$Point_equals_uKWEwg = jst_TableImpl$Point_equals_uKWEwg;
exports.jst_TableImpl$Point_hashCode_I = jst_TableImpl$Point_hashCode_I;
exports.jst_TableImpl$Point = jst_TableImpl$Point;
