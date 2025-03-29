"use strict";
let js2_Table_import = require("./js2.Table.js");
let org_teavm_runtime_import = require("./org.teavm.runtime.js");

function j_TableImpl() {
    org_teavm_runtime_import.jl_Object.call(this);
    this.$values = null;
}
let j_TableImpl__init_ = $this => {
    org_teavm_runtime_import.jl_Object__init_($this);
    $this.$values = org_teavm_runtime_import.ju_HashMap__init_0();
},
j_TableImpl__init_0 = () => {
    let var_0 = new j_TableImpl();
    j_TableImpl__init_(var_0);
    return var_0;
},
j_TableImpl_addCell_RzmAeX = ($this, $x, $y, $value) => {
    if ($x >= 0 && $y >= 0) {
        $this.$values.$put_lVIoyP(j_TableImpl$Point__init__hhSBUI0($this, $x, $y), $value);
        return;
    }
    org_teavm_runtime_import.$rt_throw(org_teavm_runtime_import.jl_IllegalArgumentException__init__VHLrpW0(org_teavm_runtime_import.$rt_str("Table coordinates can not be negative")));
},
j_TableImpl_addRowHeader_nftnjR = ($this, $n, $value) => {
    $this.$values.$put_lVIoyP(j_TableImpl$Point__init__hhSBUI0($this, (-1), $n), $value);
},
j_TableImpl_addColumnHeader_nftnjR = ($this, $n, $value) => {
    $this.$values.$put_lVIoyP(j_TableImpl$Point__init__hhSBUI0($this, $n, (-1)), $value);
},
j_TableImpl_getTable = $this => {
    let $width, $height, var$3, $p, var$5, var$6, $result, $y, $row, $x, $value;
    $width = (-1);
    $height = (-1);
    var$3 = ($this.$values.$keySet()).$iterator();
    while (var$3.$hasNext()) {
        $p = var$3.$next();
        if ($p.$x > $width)
            $width = $p.$x;
        if ($p.$y > $height)
            $height = $p.$y;
    }
    var$5 = $width + 1 | 0;
    var$6 = $height + 1 | 0;
    $result = org_teavm_runtime_import.ju_ArrayList__init__I0(var$6);
    $y = (-1);
    while ($y < var$6) {
        $row = org_teavm_runtime_import.ju_ArrayList__init__I0(var$5);
        $x = (-1);
        while ($x < var$5) {
            $value = $this.$values.$getOrDefault_lVIoyP(j_TableImpl$Point__init__hhSBUI0($this, $x, $y), org_teavm_runtime_import.$rt_str("?"));
            if ($x == (-1) && $y == (-1))
                $value = org_teavm_runtime_import.$rt_str("");
            $row.$add_yToRiJ($value);
            $x = $x + 1 | 0;
        }
        $result.$add_yToRiJ($row);
        $y = $y + 1 | 0;
    }
    return $result;
};
function j_TableImpl$Point() {
    let a = this; org_teavm_runtime_import.jl_Object.call(a);
    a.$x = 0;
    a.$y = 0;
    a.$this$0 = null;
}
let j_TableImpl$Point__init__hhSBUI = ($this, var$1, $x, $y) => {
    $this.$this$0 = var$1;
    org_teavm_runtime_import.jl_Object__init_($this);
    $this.$x = $x;
    $this.$y = $y;
},
j_TableImpl$Point__init__hhSBUI0 = (var_0, var_1, var_2) => {
    let var_3 = new j_TableImpl$Point();
    j_TableImpl$Point__init__hhSBUI(var_3, var_0, var_1, var_2);
    return var_3;
},
j_TableImpl$Point_equals_yToRiJ = ($this, $o) => {
    let $point;
    if (!($o instanceof j_TableImpl$Point))
        return 0;
    $point = $o;
    return $this.$x == $point.$x && $this.$y == $point.$y ? 1 : 0;
},
j_TableImpl$Point_hashCode = $this => {
    let var$1, var$2;
    var$1 = org_teavm_runtime_import.$rt_createArray(org_teavm_runtime_import.jl_Object, 2);
    var$2 = var$1.data;
    var$2[0] = org_teavm_runtime_import.jl_Integer_valueOf_I($this.$x);
    var$2[1] = org_teavm_runtime_import.jl_Integer_valueOf_I($this.$y);
    return org_teavm_runtime_import.ju_Objects_hash_MzFGbf(var$1);
};
org_teavm_runtime_import.$rt_packages([
]);
org_teavm_runtime_import.$rt_metadata([j_TableImpl, 0, org_teavm_runtime_import.jl_Object, [js2_Table_import.j_Table], 0, 0, 0, 0, [(o,r)=>o.$_init_=r, org_teavm_runtime_import.$rt_wrapFunction0(j_TableImpl__init_), (o,r)=>o.$addCell_RzmAeX=r, org_teavm_runtime_import.$rt_wrapFunction3(j_TableImpl_addCell_RzmAeX), (o,r)=>o.$addRowHeader_nftnjR=r, org_teavm_runtime_import.$rt_wrapFunction2(j_TableImpl_addRowHeader_nftnjR), (o,r)=>o.$addColumnHeader_nftnjR=r, org_teavm_runtime_import.$rt_wrapFunction2(j_TableImpl_addColumnHeader_nftnjR),
(o,r)=>o.$getTable=r, org_teavm_runtime_import.$rt_wrapFunction0(j_TableImpl_getTable)],
j_TableImpl$Point, 0, org_teavm_runtime_import.jl_Object, [], 0, 0, 0, 0, [(o,r)=>o.$_init__hhSBUI=r, org_teavm_runtime_import.$rt_wrapFunction3(j_TableImpl$Point__init__hhSBUI), (o,r)=>o.$equals_yToRiJ=r, org_teavm_runtime_import.$rt_wrapFunction1(j_TableImpl$Point_equals_yToRiJ), (o,r)=>o.$hashCode=r, org_teavm_runtime_import.$rt_wrapFunction0(j_TableImpl$Point_hashCode)]]);
exports.j_TableImpl__init_ = j_TableImpl__init_;
exports.j_TableImpl__init_0 = j_TableImpl__init_0;
exports.j_TableImpl_addCell_RzmAeX = j_TableImpl_addCell_RzmAeX;
exports.j_TableImpl_addRowHeader_nftnjR = j_TableImpl_addRowHeader_nftnjR;
exports.j_TableImpl_addColumnHeader_nftnjR = j_TableImpl_addColumnHeader_nftnjR;
exports.j_TableImpl_getTable = j_TableImpl_getTable;
exports.j_TableImpl = j_TableImpl;
exports.j_TableImpl$Point__init__hhSBUI = j_TableImpl$Point__init__hhSBUI;
exports.j_TableImpl$Point__init__hhSBUI0 = j_TableImpl$Point__init__hhSBUI0;
exports.j_TableImpl$Point_equals_yToRiJ = j_TableImpl$Point_equals_yToRiJ;
exports.j_TableImpl$Point_hashCode = j_TableImpl$Point_hashCode;
exports.j_TableImpl$Point = j_TableImpl$Point;
