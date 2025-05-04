"use strict";
let $rt_seed = 2463534242,
$rt_nextId = () => {
    let x = $rt_seed;
    x ^= x << 13;
    x ^= x >>> 17;
    x ^= x << 5;
    $rt_seed = x;
    return x;
},
$rt_wrapFunction0 = f => function() {
    return f(this);
},
$rt_wrapFunction1 = f => function(p1) {
    return f(this, p1);
},
$rt_wrapFunction2 = f => function(p1, p2) {
    return f(this, p1, p2);
},
$rt_wrapFunction3 = f => function(p1, p2, p3) {
    return f(this, p1, p2, p3, p3);
},
$rt_wrapFunction4 = f => function(p1, p2, p3, p4) {
    return f(this, p1, p2, p3, p4);
},
$rt_wrapFunctionVararg = f => function() {
    let array = new Array();
    array.push(this);
    Array.prototype.push.apply(array, arguments);
    return f.apply(null, array);
},
$rt_threadStarter = f => function() {
    let args = Array.prototype.slice.apply(arguments);
    $rt_startThread(function() {
        f.apply(this, args);
    });
},
$rt_mainStarter = f => (args, callback) => {
    if (!args) {
        args = [];
    }
    let javaArgs = $rt_createArray($rt_objcls(), args.length);
    for (let i = 0;i < args.length;++i) {
        javaArgs.data[i] = $rt_str(args[i]);
    }
    $rt_startThread(() => {
        f.call(null, javaArgs);
    }, callback);
},
$rt_eraseClinit = target => target.$clinit = () => {
},
$dbg_class = obj => {
    let cls = obj.constructor;
    let arrayDegree = 0;
    while (cls.$meta && cls.$meta.item) {
        ++arrayDegree;
        cls = cls.$meta.item;
    }
    let clsName = "";
    if (cls.$meta.primitive) {
        clsName = cls.$meta.name;
    } else {
        clsName = cls.$meta ? cls.$meta.name || "a/" + cls.name : "@" + cls.name;
    }
    while (arrayDegree-- > 0) {
        clsName += "[]";
    }
    return clsName;
},
$rt_classWithoutFields = superclass => {
    if (superclass === 0) {
        return function() {
        };
    }
    if (superclass === void 0) {
        superclass = $rt_objcls();
    }
    return function() {
        superclass.call(this);
    };
},
$rt_cls = cls => java_lang_Class_getClass_LTJNGA(cls),
rt_objcls_gcc_fix = java_lang_Object,
$rt_objcls = () => rt_objcls_gcc_fix,
$rt_getThread = () => {
},
$rt_setThread = t => {
},
$rt_apply = (instance, method, args) => instance[method].apply(instance, args),
$rt_apply_topLevel = (method, args) => method.apply(null, args),
$rt_skip = (array, count) => count === 0 ? array : Array.prototype.slice.call(array, count),
$rt_callWithReceiver = f => function() {
    return f.apply(null, [this].concat(Array.prototype.slice.call(arguments)));
},
$rt_createcls = () => {
    return { $array : null, classObject : null, $meta : { supertypes : [], superclass : null } };
},
$rt_createPrimitiveCls = (name, binaryName) => {
    let cls = $rt_createcls();
    cls.$meta.primitive = true;
    cls.$meta.name = name;
    cls.$meta.binaryName = binaryName;
    cls.$meta.enum = false;
    cls.$meta.item = null;
    cls.$meta.simpleName = null;
    cls.$meta.declaringClass = null;
    cls.$meta.enclosingClass = null;
    return cls;
},
$rt_booleancls = $rt_createPrimitiveCls("boolean", "Z"),
$rt_charcls = $rt_createPrimitiveCls("char", "C"),
$rt_bytecls = $rt_createPrimitiveCls("byte", "B"),
$rt_shortcls = $rt_createPrimitiveCls("short", "S"),
$rt_intcls = $rt_createPrimitiveCls("int", "I"),
$rt_longcls = $rt_createPrimitiveCls("long", "J"),
$rt_floatcls = $rt_createPrimitiveCls("float", "F"),
$rt_doublecls = $rt_createPrimitiveCls("double", "D"),
$rt_voidcls = $rt_createPrimitiveCls("void", "V"),
$rt_numberConversionBuffer = new ArrayBuffer(16),
$rt_numberConversionView = new DataView($rt_numberConversionBuffer),
$rt_numberConversionFloatArray = new Float32Array($rt_numberConversionBuffer),
$rt_numberConversionDoubleArray = new Float64Array($rt_numberConversionBuffer),
$rt_numberConversionIntArray = new Int32Array($rt_numberConversionBuffer),
$rt_numberConversionLongArray = new BigInt64Array($rt_numberConversionBuffer),
$rt_doubleToRawLongBits = n => {
    $rt_numberConversionDoubleArray[0] = n;
    return $rt_numberConversionLongArray[0];
},
$rt_longBitsToDouble = n => {
    $rt_numberConversionLongArray[0] = n;
    return $rt_numberConversionDoubleArray[0];
},
$rt_floatToRawIntBits = n => {
    $rt_numberConversionFloatArray[0] = n;
    return $rt_numberConversionIntArray[0];
},
$rt_intBitsToFloat = n => {
    $rt_numberConversionIntArray[0] = n;
    return $rt_numberConversionFloatArray[0];
},
$rt_equalDoubles = (a, b) => {
    if (a !== a) {
        return b !== b;
    }
    $rt_numberConversionDoubleArray[0] = a;
    $rt_numberConversionDoubleArray[1] = b;
    return $rt_numberConversionIntArray[0] === $rt_numberConversionIntArray[2] && $rt_numberConversionIntArray[1] === $rt_numberConversionIntArray[3];
},
$rt_compare = (a, b) => a > b ? 1 : a < b ?  -1 : a === b ? 0 : 1,
$rt_imul = Math.imul || function(a, b) {
    let ah = a >>> 16 & 0xFFFF;
    let al = a & 0xFFFF;
    let bh = b >>> 16 & 0xFFFF;
    let bl = b & 0xFFFF;
    return al * bl + (ah * bl + al * bh << 16 >>> 0) | 0;
},
$rt_udiv = (a, b) => (a >>> 0) / (b >>> 0) >>> 0,
$rt_umod = (a, b) => (a >>> 0) % (b >>> 0) >>> 0,
$rt_ucmp = (a, b) => {
    a >>>= 0;
    b >>>= 0;
    return a < b ?  -1 : a > b ? 1 : 0;
},
Long_MAX_NORMAL = 1 << 18;
let Long_ZERO = BigInt(0),
Long_create = (lo, hi) => BigInt.asIntN(64, BigInt.asUintN(64, BigInt(lo)) | BigInt.asUintN(64, BigInt(hi) << BigInt(32))),
Long_fromInt = val => BigInt.asIntN(64, BigInt(val | 0)),
Long_fromNumber = val => BigInt.asIntN(64, BigInt(val >= 0 ? Math.floor(val) : Math.ceil(val))),
Long_toNumber = val => Number(val),
Long_hi = val => Number(BigInt.asIntN(64, val >> BigInt(32))) | 0,
Long_lo = val => Number(BigInt.asIntN(32, val)) | 0,
Long_eq = (a, b) => a === b,
Long_ne = (a, b) => a !== b,
Long_gt = (a, b) => a > b,
Long_ge = (a, b) => a >= b,
Long_lt = (a, b) => a < b,
Long_le = (a, b) => a <= b,
Long_add = (a, b) => BigInt.asIntN(64, a + b),
Long_inc = a => BigInt.asIntN(64, a + 1),
Long_dec = a => BigInt.asIntN(64, a - 1),
Long_neg = a => BigInt.asIntN(64,  -a),
Long_sub = (a, b) => BigInt.asIntN(64, a - b),
Long_compare = (a, b) => a < b ?  -1 : a > b ? 1 : 0,
Long_ucompare = (a, b) => {
    a = BigInt.asUintN(64, a);
    b = BigInt.asUintN(64, b);
    return a < b ?  -1 : a > b ? 1 : 0;
},
Long_mul = (a, b) => BigInt.asIntN(64, a * b),
Long_div = (a, b) => BigInt.asIntN(64, a / b),
Long_udiv = (a, b) => BigInt.asIntN(64, BigInt.asUintN(64, a) / BigInt.asUintN(64, b)),
Long_rem = (a, b) => BigInt.asIntN(64, a % b),
Long_urem = (a, b) => BigInt.asIntN(64, BigInt.asUintN(64, a) % BigInt.asUintN(64, b)),
Long_and = (a, b) => BigInt.asIntN(64, a & b),
Long_or = (a, b) => BigInt.asIntN(64, a | b),
Long_xor = (a, b) => BigInt.asIntN(64, a ^ b),
Long_shl = (a, b) => BigInt.asIntN(64, a << BigInt(b & 63)),
Long_shr = (a, b) => BigInt.asIntN(64, a >> BigInt(b & 63)),
Long_shru = (a, b) => BigInt.asIntN(64, BigInt.asUintN(64, a) >> BigInt(b & 63)),
Long_not = a => BigInt.asIntN(64, ~a),
$rt_createArray = (cls, sz) => {
    let data = new Array(sz);
    data.fill(null);
    return new ($rt_arraycls(cls))(data);
},
$rt_wrapArray = (cls, data) => new ($rt_arraycls(cls))(data),
$rt_createUnfilledArray = (cls, sz) => new ($rt_arraycls(cls))(new Array(sz)),
$rt_createLongArray,
$rt_createLongArrayFromData;
if (typeof BigInt64Array !== 'function') {
    $rt_createLongArray = sz => {
        let data = new Array(sz);
        let arr = new $rt_longArrayCls(data);
        data.fill(Long_ZERO);
        return arr;
    };
    $rt_createLongArrayFromData = init => new $rt_longArrayCls(init);
} else {
    $rt_createLongArray = sz => new $rt_longArrayCls(new BigInt64Array(sz));
    $rt_createLongArrayFromData = data => {
        let buffer = new BigInt64Array(data.length);
        buffer.set(data);
        return new $rt_longArrayCls(buffer);
    };
}
let $rt_createCharArray = sz => new $rt_charArrayCls(new Uint16Array(sz)),
$rt_createCharArrayFromData = data => {
    let buffer = new Uint16Array(data.length);
    buffer.set(data);
    return new $rt_charArrayCls(buffer);
},
$rt_createByteArray = sz => new $rt_byteArrayCls(new Int8Array(sz)),
$rt_createByteArrayFromData = data => {
    let buffer = new Int8Array(data.length);
    buffer.set(data);
    return new $rt_byteArrayCls(buffer);
},
$rt_createShortArray = sz => new $rt_shortArrayCls(new Int16Array(sz)),
$rt_createShortArrayFromData = data => {
    let buffer = new Int16Array(data.length);
    buffer.set(data);
    return new $rt_shortArrayCls(buffer);
},
$rt_createIntArray = sz => new $rt_intArrayCls(new Int32Array(sz)),
$rt_createIntArrayFromData = data => {
    let buffer = new Int32Array(data.length);
    buffer.set(data);
    return new $rt_intArrayCls(buffer);
},
$rt_createBooleanArray = sz => new $rt_booleanArrayCls(new Int8Array(sz)),
$rt_createBooleanArrayFromData = data => {
    let buffer = new Int8Array(data.length);
    buffer.set(data);
    return new $rt_booleanArrayCls(buffer);
},
$rt_createFloatArray = sz => new $rt_floatArrayCls(new Float32Array(sz)),
$rt_createFloatArrayFromData = data => {
    let buffer = new Float32Array(data.length);
    buffer.set(data);
    return new $rt_floatArrayCls(buffer);
},
$rt_createDoubleArray = sz => new $rt_doubleArrayCls(new Float64Array(sz)),
$rt_createDoubleArrayFromData = data => {
    let buffer = new Float64Array(data.length);
    buffer.set(data);
    return new $rt_doubleArrayCls(buffer);
},
$rt_arraycls = cls => {
    let result = cls.$array;
    if (result === null) {
        function JavaArray(data) {
            ($rt_objcls()).call(this);
            this.data = data;
        }
        JavaArray.prototype = Object.create(($rt_objcls()).prototype);
        JavaArray.prototype.type = cls;
        JavaArray.prototype.constructor = JavaArray;
        JavaArray.prototype.toString = function() {
            let str = "[";
            for (let i = 0;i < this.data.length;++i) {
                if (i > 0) {
                    str += ", ";
                }
                str += this.data[i].toString();
            }
            str += "]";
            return str;
        };
        JavaArray.prototype.$clone_yToRiJ = function() {
            let dataCopy;
            if ('slice' in this.data) {
                dataCopy = this.data.slice();
            } else {
                dataCopy = new this.data.constructor(this.data.length);
                for (let i = 0;i < dataCopy.length;++i) {
                    dataCopy[i] = this.data[i];
                }
            }
            return new ($rt_arraycls(this.type))(dataCopy);
        };
        let name = "[" + cls.$meta.binaryName;
        JavaArray.$meta = { item : cls, supertypes : [$rt_objcls()], primitive : false, superclass : $rt_objcls(), name : name, binaryName : name, enum : false, simpleName : null, declaringClass : null, enclosingClass : null };
        JavaArray.classObject = null;
        JavaArray.$array = null;
        result = JavaArray;
        cls.$array = JavaArray;
    }
    return result;
},
$rt_createMultiArray = (cls, dimensions) => {
    let first = 0;
    for (let i = dimensions.length - 1;i >= 0;i = i - 1 | 0) {
        if (dimensions[i] === 0) {
            first = i;
            break;
        }
    }
    if (first > 0) {
        for (let i = 0;i < first;i = i + 1 | 0) {
            cls = $rt_arraycls(cls);
        }
        if (first === dimensions.length - 1) {
            return $rt_createArray(cls, dimensions[first]);
        }
    }
    let arrays = new Array($rt_primitiveArrayCount(dimensions, first));
    let firstDim = dimensions[first] | 0;
    for (let i = 0;i < arrays.length;i = i + 1 | 0) {
        arrays[i] = $rt_createArray(cls, firstDim);
    }
    return $rt_createMultiArrayImpl(cls, arrays, dimensions, first);
},
$rt_createByteMultiArray = dimensions => {
    let arrays = new Array($rt_primitiveArrayCount(dimensions, 0));
    if (arrays.length === 0) {
        return $rt_createMultiArray($rt_bytecls, dimensions);
    }
    let firstDim = dimensions[0] | 0;
    for (let i = 0;i < arrays.length;i = i + 1 | 0) {
        arrays[i] = $rt_createByteArray(firstDim);
    }
    return $rt_createMultiArrayImpl($rt_bytecls, arrays, dimensions);
},
$rt_createCharMultiArray = dimensions => {
    let arrays = new Array($rt_primitiveArrayCount(dimensions, 0));
    if (arrays.length === 0) {
        return $rt_createMultiArray($rt_charcls, dimensions);
    }
    let firstDim = dimensions[0] | 0;
    for (let i = 0;i < arrays.length;i = i + 1 | 0) {
        arrays[i] = $rt_createCharArray(firstDim);
    }
    return $rt_createMultiArrayImpl($rt_charcls, arrays, dimensions, 0);
},
$rt_createBooleanMultiArray = dimensions => {
    let arrays = new Array($rt_primitiveArrayCount(dimensions, 0));
    if (arrays.length === 0) {
        return $rt_createMultiArray($rt_booleancls, dimensions);
    }
    let firstDim = dimensions[0] | 0;
    for (let i = 0;i < arrays.length;i = i + 1 | 0) {
        arrays[i] = $rt_createBooleanArray(firstDim);
    }
    return $rt_createMultiArrayImpl($rt_booleancls, arrays, dimensions, 0);
},
$rt_createShortMultiArray = dimensions => {
    let arrays = new Array($rt_primitiveArrayCount(dimensions, 0));
    if (arrays.length === 0) {
        return $rt_createMultiArray($rt_shortcls, dimensions);
    }
    let firstDim = dimensions[0] | 0;
    for (let i = 0;i < arrays.length;i = i + 1 | 0) {
        arrays[i] = $rt_createShortArray(firstDim);
    }
    return $rt_createMultiArrayImpl($rt_shortcls, arrays, dimensions, 0);
},
$rt_createIntMultiArray = dimensions => {
    let arrays = new Array($rt_primitiveArrayCount(dimensions, 0));
    if (arrays.length === 0) {
        return $rt_createMultiArray($rt_intcls, dimensions);
    }
    let firstDim = dimensions[0] | 0;
    for (let i = 0;i < arrays.length;i = i + 1 | 0) {
        arrays[i] = $rt_createIntArray(firstDim);
    }
    return $rt_createMultiArrayImpl($rt_intcls, arrays, dimensions, 0);
},
$rt_createLongMultiArray = dimensions => {
    let arrays = new Array($rt_primitiveArrayCount(dimensions, 0));
    if (arrays.length === 0) {
        return $rt_createMultiArray($rt_longcls, dimensions);
    }
    let firstDim = dimensions[0] | 0;
    for (let i = 0;i < arrays.length;i = i + 1 | 0) {
        arrays[i] = $rt_createLongArray(firstDim);
    }
    return $rt_createMultiArrayImpl($rt_longcls, arrays, dimensions, 0);
},
$rt_createFloatMultiArray = dimensions => {
    let arrays = new Array($rt_primitiveArrayCount(dimensions, 0));
    if (arrays.length === 0) {
        return $rt_createMultiArray($rt_floatcls, dimensions);
    }
    let firstDim = dimensions[0] | 0;
    for (let i = 0;i < arrays.length;i = i + 1 | 0) {
        arrays[i] = $rt_createFloatArray(firstDim);
    }
    return $rt_createMultiArrayImpl($rt_floatcls, arrays, dimensions, 0);
},
$rt_createDoubleMultiArray = dimensions => {
    let arrays = new Array($rt_primitiveArrayCount(dimensions, 0));
    if (arrays.length === 0) {
        return $rt_createMultiArray($rt_doublecls, dimensions);
    }
    let firstDim = dimensions[0] | 0;
    for (let i = 0;i < arrays.length;i = i + 1 | 0) {
        arrays[i] = $rt_createDoubleArray(firstDim);
    }
    return $rt_createMultiArrayImpl($rt_doublecls, arrays, dimensions, 0);
},
$rt_primitiveArrayCount = (dimensions, start) => {
    let val = dimensions[start + 1] | 0;
    for (let i = start + 2;i < dimensions.length;i = i + 1 | 0) {
        val = val * (dimensions[i] | 0) | 0;
        if (val === 0) {
            break;
        }
    }
    return val;
},
$rt_createMultiArrayImpl = (cls, arrays, dimensions, start) => {
    let limit = arrays.length;
    for (let i = start + 1 | 0;i < dimensions.length;i = i + 1 | 0) {
        cls = $rt_arraycls(cls);
        let dim = dimensions[i];
        let index = 0;
        let packedIndex = 0;
        while (index < limit) {
            let arr = $rt_createUnfilledArray(cls, dim);
            for (let j = 0;j < dim;j = j + 1 | 0) {
                arr.data[j] = arrays[index];
                index = index + 1 | 0;
            }
            arrays[packedIndex] = arr;
            packedIndex = packedIndex + 1 | 0;
        }
        limit = packedIndex;
    }
    return arrays[0];
},
$rt_concatArrays = (a, b) => {
    if (a.length === 0) {
        return b;
    }
    if (b.length === 0) {
        return a;
    }
    if (!Array.isArray(a)) {
        a = Array.from(a);
    }
    if (!Array.isArray(b)) {
        b = Array.from(b);
    }
    return a.concat(b);
},
$rt_stringPool_instance,
$rt_stringPool = strings => {
    $rt_stringClassInit();
    $rt_stringPool_instance = new Array(strings.length);
    for (let i = 0;i < strings.length;++i) {
        $rt_stringPool_instance[i] = $rt_intern($rt_str(strings[i]));
    }
},
$rt_s = index => $rt_stringPool_instance[index],
$rt_charArrayToString = (array, offset, count) => {
    let result = "";
    let limit = offset + count;
    for (let i = offset;i < limit;i = i + 1024 | 0) {
        let next = Math.min(limit, i + 1024 | 0);
        result += String.fromCharCode.apply(null, array.subarray(i, next));
    }
    return result;
},
$rt_fullArrayToString = array => $rt_charArrayToString(array, 0, array.length),
$rt_stringToCharArray = (string, begin, dst, dstBegin, count) => {
    for (let i = 0;i < count;i = i + 1 | 0) {
        dst[dstBegin + i] = string.charCodeAt(begin + i);
    }
},
$rt_fastStringToCharArray = string => {
    let array = new Uint16Array(string.length);
    for (let i = 0;i < array.length;++i) {
        array[i] = string.charCodeAt(i);
    }
    return new $rt_charArrayCls(array);
},
$rt_substring = (string, start, end) => {
    if (start === 0 && end === string.length) {
        return string;
    }
    let result = start.substring(start, end - 1) + start.substring(end - 1, end);
    $rt_substringSink = $rt_substringSink + result.charCodeAt(result.length - 1) | 0;
},
$rt_substringSink = 0,
$rt_str = str => str === null ? null : java_lang_String__init__HFyQDR$1(str),
$rt_ustr = str => str === null ? null : str.$nativeString,
$rt_stringClassInit = () => java_lang_String_$callClinit(),
$rt_intern;
{
    $rt_intern = str => str;
}
let $rt_isInstance = (obj, cls) => obj instanceof $rt_objcls() && !!obj.constructor.$meta && $rt_isAssignable(obj.constructor, cls),
$rt_isAssignable = (from, to) => {
    if (from === to) {
        return true;
    }
    let map = from.$meta.assignableCache;
    if (typeof map === 'undefined') {
        map = new Map();
        from.$meta.assignableCache = map;
    }
    let cachedResult = map.get(to);
    if (typeof cachedResult !== 'undefined') {
        return cachedResult;
    }
    if (to.$meta.item !== null) {
        let result = from.$meta.item !== null && $rt_isAssignable(from.$meta.item, to.$meta.item);
        map.set(to, result);
        return result;
    }
    let supertypes = from.$meta.supertypes;
    for (let i = 0;i < supertypes.length;i = i + 1 | 0) {
        if ($rt_isAssignable(supertypes[i], to)) {
            map.set(to, true);
            return true;
        }
    }
    map.set(to, false);
    return false;
},
$rt_castToInterface = (obj, cls) => {
    if (obj !== null && !$rt_isInstance(obj, cls)) {
        $rt_throwCCE();
    }
    return obj;
},
$rt_castToClass = (obj, cls) => {
    if (obj !== null && !(obj instanceof cls)) {
        $rt_throwCCE();
    }
    return obj;
},
$rt_instanceOfOrNull = (obj, cls) => obj === null || obj instanceof cls,
$rt_throw = ex => {
    throw $rt_exception(ex);
},
$rt_javaExceptionProp = Symbol("javaException"),
$rt_exception = ex => {
    let err = ex.$jsException;
    if (!err) {
        let javaCause = $rt_throwableCause(ex);
        let jsCause = javaCause !== null ? javaCause.$jsException : void 0;
        let cause = typeof jsCause === "object" ? { cause : jsCause } : void 0;
        err = new JavaError("Java exception thrown", cause);
        if (typeof Error.captureStackTrace === "function") {
            Error.captureStackTrace(err);
        }
        err[$rt_javaExceptionProp] = ex;
        ex.$jsException = err;
        $rt_fillStack(err, ex);
    }
    return err;
},
$rt_fillStack = (err, ex) => {
    if (typeof $rt_decodeStack === "function" && err.stack) {
        let stack = $rt_decodeStack(err.stack);
        let javaStack = $rt_createArray($rt_stecls(), stack.length);
        let elem;
        let noStack = false;
        for (let i = 0;i < stack.length;++i) {
            let element = stack[i];
            elem = $rt_createStackElement($rt_str(element.className), $rt_str(element.methodName), $rt_str(element.fileName), element.lineNumber);
            if (elem == null) {
                noStack = true;
                break;
            }
            javaStack.data[i] = elem;
        }
        if (!noStack) {
            $rt_setStack(ex, javaStack);
        }
    }
},
JavaError;
if (typeof Reflect === 'object') {
    let defaultMessage = Symbol("defaultMessage");
    JavaError = function JavaError(message, cause) {
        let self = Reflect.construct(Error, [void 0, cause], JavaError);
        Object.setPrototypeOf(self, JavaError.prototype);
        self[defaultMessage] = message;
        return self;
    }
    ;
    JavaError.prototype = Object.create(Error.prototype, { constructor : { configurable : true, writable : true, value : JavaError }, message : { get() {
        try {
            let javaException = this[$rt_javaExceptionProp];
            if (typeof javaException === 'object') {
                let javaMessage = $rt_throwableMessage(javaException);
                if (typeof javaMessage === "object") {
                    return javaMessage !== null ? javaMessage.toString() : null;
                }
            }
            return this[defaultMessage];
        } catch (e){
            return "Exception occurred trying to extract Java exception message: " + e;
        }
    } } });
} else {
    JavaError = Error;
}
let $rt_javaException = e => e instanceof Error && typeof e[$rt_javaExceptionProp] === 'object' ? e[$rt_javaExceptionProp] : null,
$rt_jsException = e => typeof e.$jsException === 'object' ? e.$jsException : null,
$rt_wrapException = err => {
    let ex = err[$rt_javaExceptionProp];
    if (!ex) {
        ex = $rt_createException($rt_str("(JavaScript) " + err.toString()));
        err[$rt_javaExceptionProp] = ex;
        ex.$jsException = err;
        $rt_fillStack(err, ex);
    }
    return ex;
},
$rt_createException = message => java_lang_RuntimeException__init__XjCHVS$1(message),
$rt_throwableMessage = t => java_lang_Throwable_getMessage_VHLrpW(t),
$rt_throwableCause = t => java_lang_Throwable_getCause_MBBfFS(t),
$rt_stecls = () => $rt_objcls(),
$rt_throwAIOOBE = () => $rt_throw($rt_createException($rt_str(""))),
$rt_throwCCE = () => $rt_throw($rt_createException($rt_str(""))),
$rt_throwCCEIfFalse = (value, o) => {
    if (!value) {
        $rt_throwCCE();
    }
    return o;
},
$rt_createStackElement = (className, methodName, fileName, lineNumber) => {
    {
        return null;
    }
},
$rt_setStack = (e, stack) => {
},
$rt_checkBounds = (index, array) => {
    if (index < 0 || index >= array.length) {
        $rt_throwAIOOBE();
    }
    return index;
},
$rt_checkUpperBound = (index, array) => {
    if (index >= array.length) {
        $rt_throwAIOOBE();
    }
    return index;
},
$rt_checkLowerBound = index => {
    if (index < 0) {
        $rt_throwAIOOBE();
    }
    return index;
},
$rt_nullCheck = val => {
    if (val === null) {
        $rt_throw(java_lang_NullPointerException__init__V$1());
    }
    return val;
},
$rt_createOutputFunction = outputFunction => {
    let buffer = "";
    return msg => {
        let index = 0;
        while (true) {
            let next = msg.indexOf('\n', index);
            if (next < 0) {
                break;
            }
            outputFunction(buffer + msg.substring(index, next));
            buffer = "";
            index = next + 1;
        }
        buffer += msg.substring(index);
    };
},
$rt_putStdout = typeof $rt_putStdoutCustom === "function" ? $rt_putStdoutCustom : typeof console === "object" ? $rt_createOutputFunction(msg => console.info(msg)) : () => {
},
$rt_putStderr = typeof $rt_putStderrCustom === "function" ? $rt_putStderrCustom : typeof console === "object" ? $rt_createOutputFunction(msg => console.error(msg)) : () => {
},
$rt_packageData = null,
$rt_packages = data => {
    let i = 0;
    let packages = new Array(data.length);
    for (let j = 0;j < data.length;++j) {
        let prefixIndex = data[i++];
        let prefix = prefixIndex >= 0 ? packages[prefixIndex] : "";
        packages[j] = prefix + data[i++] + ".";
    }
    $rt_packageData = packages;
},
$rt_metadata = data => {
    let packages = $rt_packageData;
    let i = 0;
    while (i < data.length) {
        let cls = data[i++];
        cls.$meta = {  };
        let m = cls.$meta;
        let className = data[i++];
        m.name = className !== 0 ? className : null;
        if (m.name !== null) {
            let packageIndex = data[i++];
            if (packageIndex >= 0) {
                m.name = packages[packageIndex] + m.name;
            }
        }
        m.binaryName = "L" + m.name + ";";
        let superclass = data[i++];
        m.superclass = superclass !== 0 ? superclass : null;
        m.supertypes = data[i++];
        if (m.superclass) {
            m.supertypes.push(m.superclass);
            cls.prototype = Object.create(m.superclass.prototype);
        } else {
            cls.prototype = {  };
        }
        let flags = data[i++];
        m.enum = (flags & 8) !== 0;
        m.flags = flags;
        m.primitive = false;
        m.item = null;
        cls.prototype.constructor = cls;
        cls.classObject = null;
        m.accessLevel = data[i++];
        let innerClassInfo = data[i++];
        if (innerClassInfo === 0) {
            m.simpleName = null;
            m.declaringClass = null;
            m.enclosingClass = null;
        } else {
            let enclosingClass = innerClassInfo[0];
            m.enclosingClass = enclosingClass !== 0 ? enclosingClass : null;
            let declaringClass = innerClassInfo[1];
            m.declaringClass = declaringClass !== 0 ? declaringClass : null;
            let simpleName = innerClassInfo[2];
            m.simpleName = simpleName !== 0 ? simpleName : null;
        }
        let clinit = data[i++];
        cls.$clinit = clinit !== 0 ? clinit : function() {
        };
        let virtualMethods = data[i++];
        if (virtualMethods !== 0) {
            for (let j = 0;j < virtualMethods.length;j += 2) {
                let name = virtualMethods[j];
                let func = virtualMethods[j + 1];
                if (typeof name === 'function') {
                    name = [name];
                }
                for (let k = 0;k < name.length;++k) {
                    name[k](cls.prototype, func);
                }
            }
        }
        cls.$array = null;
    }
},
$rt_startThread = (runner, callback) => {
    let result;
    try {
        result = runner();
    } catch (e){
        result = e;
    }
    if (typeof callback !== 'undefined') {
        callback(result);
    } else if (result instanceof Error) {
        throw result;
    }
},
$rt_suspending = () => false,
$rt_resuming = () => false,
$rt_nativeThread = () => null,
$rt_invalidPointer = () => {
};
function java_lang_Object() {
    this.$id$ = 0;
}
let java_lang_Object__init__V = $this => {
    return;
},
java_lang_Object__init__V$1 = () => {
    let var_0 = new java_lang_Object();
    java_lang_Object__init__V(var_0);
    return var_0;
},
java_lang_Object_getClass_rQPqgt = $this => {
    return java_lang_Class_getClass_LTJNGA($this.constructor);
},
java_lang_Object_toString_VHLrpW = $this => {
    let var$1, var$2, var$3;
    var$1 = java_lang_Class_getName_VHLrpW(java_lang_Object_getClass_rQPqgt($this));
    var$2 = java_lang_Integer_toHexString_iFmOGb(java_lang_Object_identity_I($this));
    var$3 = java_lang_StringBuilder__init__V$1();
    java_lang_StringBuilder_append_ZOYxhs(java_lang_StringBuilder_append_zwKTwE(java_lang_StringBuilder_append_ZOYxhs(var$3, var$1), 64), var$2);
    return java_lang_StringBuilder_toString_VHLrpW(var$3);
},
java_lang_Object_identity_I = $this => {
    let $platformThis;
    $platformThis = $this;
    if (!$platformThis.$id$)
        $platformThis.$id$ = $rt_nextId();
    return $this.$id$;
},
java_lang_AutoCloseable = $rt_classWithoutFields(0),
java_io_Closeable = $rt_classWithoutFields(0),
java_io_Flushable = $rt_classWithoutFields(0),
java_io_OutputStream = $rt_classWithoutFields(),
java_io_OutputStream__init__V = $this => {
    java_lang_Object__init__V($this);
};
function java_io_FilterOutputStream() {
    java_io_OutputStream.call(this);
    this.$out = null;
}
let java_io_FilterOutputStream__init__gjftmH = ($this, $out) => {
    java_io_OutputStream__init__V($this);
    $this.$out = $out;
},
java_io_FilterOutputStream__init__gjftmH$1 = var_0 => {
    let var_1 = new java_io_FilterOutputStream();
    java_io_FilterOutputStream__init__gjftmH(var_1, var_0);
    return var_1;
},
java_lang_Appendable = $rt_classWithoutFields(0);
function java_io_PrintStream() {
    let a = this; java_io_FilterOutputStream.call(a);
    a.$autoFlush = 0;
    a.$sb = null;
    a.$buffer = null;
    a.$charset = null;
}
let java_io_PrintStream__init__RHOATE = ($this, $out, $autoFlush, $charset) => {
    java_io_FilterOutputStream__init__gjftmH($this, $out);
    $this.$sb = java_lang_StringBuilder__init__V$1();
    $this.$buffer = $rt_createCharArray(32);
    $this.$autoFlush = $autoFlush;
    $this.$charset = $charset;
},
java_io_PrintStream__init__RHOATE$1 = (var_0, var_1, var_2) => {
    let var_3 = new java_io_PrintStream();
    java_io_PrintStream__init__RHOATE(var_3, var_0, var_1, var_2);
    return var_3;
},
java_io_Serializable = $rt_classWithoutFields(0),
java_lang_CharSequence = $rt_classWithoutFields(0);
function java_lang_AbstractStringBuilder() {
    let a = this; java_lang_Object.call(a);
    a.$buffer = null;
    a.$length = 0;
}
let java_lang_AbstractStringBuilder__init__V = $this => {
    java_lang_AbstractStringBuilder__init__VI($this, 16);
},
java_lang_AbstractStringBuilder__init__V$1 = () => {
    let var_0 = new java_lang_AbstractStringBuilder();
    java_lang_AbstractStringBuilder__init__V(var_0);
    return var_0;
},
java_lang_AbstractStringBuilder__init__VI = ($this, $capacity) => {
    java_lang_Object__init__V($this);
    $this.$buffer = $rt_createCharArray($capacity);
},
java_lang_AbstractStringBuilder__init__VI$1 = var_0 => {
    let var_1 = new java_lang_AbstractStringBuilder();
    java_lang_AbstractStringBuilder__init__VI(var_1, var_0);
    return var_1;
},
java_lang_AbstractStringBuilder_append_nfyWfb = ($this, $obj) => {
    return $this.$insert_KMHMoz($this.$length, $obj);
},
java_lang_AbstractStringBuilder_append_ZIxCSm = ($this, $string) => {
    return $this.$insert_hzKion($this.$length, $string);
},
java_lang_AbstractStringBuilder_insert_hzKion = ($this, $index, $string) => {
    let $i, var$4, var$5;
    if ($index >= 0 && $index <= $this.$length) {
        if ($string === null)
            $string = $rt_str("null");
        else if ($string.$isEmpty_Z())
            return $this;
        $this.$ensureCapacity_VI($this.$length + $string.$length_I() | 0);
        $i = $this.$length - 1 | 0;
        while ($i >= $index) {
            $this.$buffer.data[$i + $string.$length_I() | 0] = $this.$buffer.data[$i];
            $i = $i + (-1) | 0;
        }
        $this.$length = $this.$length + $string.$length_I() | 0;
        $i = 0;
        while ($i < $string.$length_I()) {
            var$4 = $this.$buffer.data;
            var$5 = $index + 1 | 0;
            var$4[$index] = $string.$charAt_CI($i);
            $i = $i + 1 | 0;
            $index = var$5;
        }
        return $this;
    }
    $rt_throw(java_lang_StringIndexOutOfBoundsException__init__V$1());
},
java_lang_AbstractStringBuilder_append_oqxyew = ($this, $value) => {
    return $this.$append_ylxaCJ($value, 10);
},
java_lang_AbstractStringBuilder_append_ylxaCJ = ($this, $value, $radix) => {
    return $this.$insert_JzPOxM($this.$length, $value, $radix);
},
java_lang_AbstractStringBuilder_insert_JzPOxM = ($this, $target, $value, $radix) => {
    let $positive, var$5, var$6, $pos, $sz, $posLimit, var$10, var$11;
    $positive = 1;
    if ($value < 0) {
        $positive = 0;
        $value =  -$value | 0;
    }
    a: {
        if ($rt_ucmp($value, $radix) < 0) {
            if ($positive)
                java_lang_AbstractStringBuilder_insertSpace_VII($this, $target, $target + 1 | 0);
            else {
                java_lang_AbstractStringBuilder_insertSpace_VII($this, $target, $target + 2 | 0);
                var$5 = $this.$buffer.data;
                var$6 = $target + 1 | 0;
                var$5[$target] = 45;
                $target = var$6;
            }
            $this.$buffer.data[$target] = java_lang_Character_forDigit_CII($value, $radix);
        } else {
            $pos = 1;
            $sz = 1;
            $posLimit = $rt_udiv((-1), $radix);
            b: {
                while (true) {
                    var$10 = $rt_imul($pos, $radix);
                    if ($rt_ucmp(var$10, $value) > 0) {
                        var$10 = $pos;
                        break b;
                    }
                    $sz = $sz + 1 | 0;
                    if ($rt_ucmp(var$10, $posLimit) > 0)
                        break;
                    $pos = var$10;
                }
            }
            if (!$positive)
                $sz = $sz + 1 | 0;
            java_lang_AbstractStringBuilder_insertSpace_VII($this, $target, $target + $sz | 0);
            if ($positive)
                var$11 = $target;
            else {
                var$5 = $this.$buffer.data;
                var$11 = $target + 1 | 0;
                var$5[$target] = 45;
            }
            while (true) {
                if (!var$10)
                    break a;
                var$5 = $this.$buffer.data;
                var$6 = var$11 + 1 | 0;
                var$5[var$11] = java_lang_Character_forDigit_CII($rt_udiv($value, var$10), $radix);
                $value = $rt_umod($value, var$10);
                var$10 = $rt_udiv(var$10, $radix);
                var$11 = var$6;
            }
        }
    }
    return $this;
},
java_lang_AbstractStringBuilder_append_OMqvAE = ($this, $c) => {
    return $this.$insert_joXuZN($this.$length, $c);
},
java_lang_AbstractStringBuilder_insert_joXuZN = ($this, $index, $c) => {
    java_lang_AbstractStringBuilder_insertSpace_VII($this, $index, $index + 1 | 0);
    $this.$buffer.data[$index] = $c;
    return $this;
},
java_lang_AbstractStringBuilder_insert_KMHMoz = ($this, $index, $obj) => {
    return $this.$insert_hzKion($index, $obj === null ? $rt_str("null") : $obj.$toString_VHLrpW());
},
java_lang_AbstractStringBuilder_ensureCapacity_VI = ($this, $capacity) => {
    let $newLength;
    if ($this.$buffer.data.length >= $capacity)
        return;
    $newLength = $this.$buffer.data.length >= 1073741823 ? 2147483647 : java_lang_Math_max_III($capacity, java_lang_Math_max_III($this.$buffer.data.length * 2 | 0, 5));
    $this.$buffer = java_util_Arrays_copyOf__C_CI($this.$buffer, $newLength);
},
java_lang_AbstractStringBuilder_toString_VHLrpW = $this => {
    return java_lang_String__init__V_CII$1($this.$buffer, 0, $this.$length);
},
java_lang_AbstractStringBuilder_insertSpace_VII = ($this, $start, $end) => {
    let $sz, $i;
    $sz = $this.$length - $start | 0;
    $this.$ensureCapacity_VI(($this.$length + $end | 0) - $start | 0);
    $i = $sz - 1 | 0;
    while ($i >= 0) {
        $this.$buffer.data[$end + $i | 0] = $this.$buffer.data[$start + $i | 0];
        $i = $i + (-1) | 0;
    }
    $this.$length = $this.$length + ($end - $start | 0) | 0;
},
java_lang_Comparable = $rt_classWithoutFields(0),
java_lang_Character = $rt_classWithoutFields(),
java_lang_Character_TYPE = null,
java_lang_Character_characterCache = null,
java_lang_Character_$callClinit = () => {
    java_lang_Character_$callClinit = $rt_eraseClinit(java_lang_Character);
    java_lang_Character__clinit__V();
},
java_lang_Character_forDigit_CII = ($digit, $radix) => {
    java_lang_Character_$callClinit();
    if ($radix >= 2 && $radix <= 36 && $digit >= 0 && $digit < $radix)
        return $digit < 10 ? (48 + $digit | 0) & 65535 : ((97 + $digit | 0) - 10 | 0) & 65535;
    return 0;
},
java_lang_Character__clinit__V = () => {
    java_lang_Character_TYPE = $rt_cls($rt_charcls);
    java_lang_Character_characterCache = $rt_createArray(java_lang_Character, 128);
},
java_lang_reflect_AnnotatedElement = $rt_classWithoutFields(0),
java_lang_reflect_Type = $rt_classWithoutFields(0);
function java_lang_Class() {
    let a = this; java_lang_Object.call(a);
    a.$name = null;
    a.$platformClass = null;
}
let java_lang_Class__init__YHHWXM = ($this, $platformClass) => {
    let var$2;
    java_lang_Object__init__V($this);
    $this.$platformClass = $platformClass;
    var$2 = $this;
    $platformClass.classObject = var$2;
},
java_lang_Class__init__YHHWXM$1 = var_0 => {
    let var_1 = new java_lang_Class();
    java_lang_Class__init__YHHWXM(var_1, var_0);
    return var_1;
},
java_lang_Class_getClass_LTJNGA = $cls => {
    let $result;
    if ($cls === null)
        return null;
    $result = $cls.classObject;
    if ($result === null)
        $result = java_lang_Class__init__YHHWXM$1($cls);
    return $result;
},
java_lang_Class_getPlatformClass_BSppjk = $this => {
    return $this.$platformClass;
},
java_lang_Class_getName_VHLrpW = $this => {
    if ($this.$name === null)
        $this.$name = org_teavm_platform_Platform_getName_xWEGZR($this.$platformClass);
    return $this.$name;
},
java_lang_Class_getComponentType_rQPqgt = $this => {
    return java_lang_Class_getClass_LTJNGA(org_teavm_platform_Platform_getArrayItem_PKtewy($this.$platformClass));
};
function java_lang_Throwable() {
    let a = this; java_lang_Object.call(a);
    a.$message = null;
    a.$cause = null;
    a.$suppressionEnabled = 0;
    a.$writableStackTrace = 0;
}
let java_lang_Throwable__init__V = $this => {
    $this.$suppressionEnabled = 1;
    $this.$writableStackTrace = 1;
    $this.$fillInStackTrace_MBBfFS();
},
java_lang_Throwable__init__V$1 = () => {
    let var_0 = new java_lang_Throwable();
    java_lang_Throwable__init__V(var_0);
    return var_0;
},
java_lang_Throwable__init__XjCHVS = ($this, $message) => {
    $this.$suppressionEnabled = 1;
    $this.$writableStackTrace = 1;
    $this.$fillInStackTrace_MBBfFS();
    $this.$message = $message;
},
java_lang_Throwable__init__XjCHVS$1 = var_0 => {
    let var_1 = new java_lang_Throwable();
    java_lang_Throwable__init__XjCHVS(var_1, var_0);
    return var_1;
},
java_lang_Throwable_fillInStackTrace_MBBfFS = $this => {
    return $this;
},
java_lang_Throwable_getMessage_VHLrpW = $this => {
    return $this.$message;
},
java_lang_Throwable_getCause_MBBfFS = $this => {
    return $this.$cause === $this ? null : $this.$cause;
},
java_lang_Exception = $rt_classWithoutFields(java_lang_Throwable),
java_lang_Exception__init__V = $this => {
    java_lang_Throwable__init__V($this);
},
java_lang_Exception__init__V$1 = () => {
    let var_0 = new java_lang_Exception();
    java_lang_Exception__init__V(var_0);
    return var_0;
},
java_lang_Exception__init__XjCHVS = ($this, $message) => {
    java_lang_Throwable__init__XjCHVS($this, $message);
},
java_lang_Exception__init__XjCHVS$1 = var_0 => {
    let var_1 = new java_lang_Exception();
    java_lang_Exception__init__XjCHVS(var_1, var_0);
    return var_1;
},
java_lang_RuntimeException = $rt_classWithoutFields(java_lang_Exception),
java_lang_RuntimeException__init__V = $this => {
    java_lang_Exception__init__V($this);
},
java_lang_RuntimeException__init__V$1 = () => {
    let var_0 = new java_lang_RuntimeException();
    java_lang_RuntimeException__init__V(var_0);
    return var_0;
},
java_lang_RuntimeException__init__XjCHVS = ($this, $message) => {
    java_lang_Exception__init__XjCHVS($this, $message);
},
java_lang_RuntimeException__init__XjCHVS$1 = var_0 => {
    let var_1 = new java_lang_RuntimeException();
    java_lang_RuntimeException__init__XjCHVS(var_1, var_0);
    return var_1;
},
java_lang_ClassCastException = $rt_classWithoutFields(java_lang_RuntimeException),
java_lang_Cloneable = $rt_classWithoutFields(0),
java_lang_IllegalArgumentException = $rt_classWithoutFields(java_lang_RuntimeException),
java_lang_IllegalArgumentException__init__V = $this => {
    java_lang_RuntimeException__init__V($this);
},
java_lang_IllegalArgumentException__init__V$1 = () => {
    let var_0 = new java_lang_IllegalArgumentException();
    java_lang_IllegalArgumentException__init__V(var_0);
    return var_0;
},
java_lang_IllegalArgumentException__init__XjCHVS = ($this, $message) => {
    java_lang_RuntimeException__init__XjCHVS($this, $message);
},
java_lang_IllegalArgumentException__init__XjCHVS$1 = var_0 => {
    let var_1 = new java_lang_IllegalArgumentException();
    java_lang_IllegalArgumentException__init__XjCHVS(var_1, var_0);
    return var_1;
},
java_lang_IndexOutOfBoundsException = $rt_classWithoutFields(java_lang_RuntimeException),
java_lang_IndexOutOfBoundsException__init__V = $this => {
    java_lang_RuntimeException__init__V($this);
},
java_lang_IndexOutOfBoundsException__init__V$1 = () => {
    let var_0 = new java_lang_IndexOutOfBoundsException();
    java_lang_IndexOutOfBoundsException__init__V(var_0);
    return var_0;
},
java_lang_Number = $rt_classWithoutFields(),
java_lang_Number__init__V = $this => {
    java_lang_Object__init__V($this);
};
function java_lang_Integer() {
    java_lang_Number.call(this);
    this.$value = 0;
}
let java_lang_Integer_TYPE = null,
java_lang_Integer_integerCache = null,
java_lang_Integer_$callClinit = () => {
    java_lang_Integer_$callClinit = $rt_eraseClinit(java_lang_Integer);
    java_lang_Integer__clinit__V();
},
java_lang_Integer__init__VI = ($this, $value) => {
    java_lang_Integer_$callClinit();
    java_lang_Number__init__V($this);
    $this.$value = $value;
},
java_lang_Integer__init__VI$1 = var_0 => {
    let var_1 = new java_lang_Integer();
    java_lang_Integer__init__VI(var_1, var_0);
    return var_1;
},
java_lang_Integer_hashCode_II = $value => {
    java_lang_Integer_$callClinit();
    return $value;
},
java_lang_Integer_toHexString_iFmOGb = $i => {
    java_lang_Integer_$callClinit();
    return org_teavm_classlib_impl_IntegerUtil_toUnsignedLogRadixString_KSkSDS($i, 4);
},
java_lang_Integer_valueOf_jxXMoQ = $i => {
    java_lang_Integer_$callClinit();
    if ($i >= (-128) && $i <= 127) {
        java_lang_Integer_ensureIntegerCache_V();
        return java_lang_Integer_integerCache.data[$i + 128 | 0];
    }
    return java_lang_Integer__init__VI$1($i);
},
java_lang_Integer_ensureIntegerCache_V = () => {
    let $j;
    java_lang_Integer_$callClinit();
    a: {
        if (java_lang_Integer_integerCache === null) {
            java_lang_Integer_integerCache = $rt_createArray(java_lang_Integer, 256);
            $j = 0;
            while (true) {
                if ($j >= java_lang_Integer_integerCache.data.length)
                    break a;
                java_lang_Integer_integerCache.data[$j] = java_lang_Integer__init__VI$1($j - 128 | 0);
                $j = $j + 1 | 0;
            }
        }
    }
},
java_lang_Integer_hashCode_I = $this => {
    return java_lang_Integer_hashCode_II($this.$value);
},
java_lang_Integer_numberOfLeadingZeros_II = $i => {
    let $n, var$3, var$4;
    java_lang_Integer_$callClinit();
    if (!$i)
        return 32;
    $n = 0;
    var$3 = $i >>> 16 | 0;
    if (var$3)
        $n = 16;
    else
        var$3 = $i;
    var$4 = var$3 >>> 8 | 0;
    if (!var$4)
        var$4 = var$3;
    else
        $n = $n | 8;
    var$3 = var$4 >>> 4 | 0;
    if (!var$3)
        var$3 = var$4;
    else
        $n = $n | 4;
    var$4 = var$3 >>> 2 | 0;
    if (!var$4)
        var$4 = var$3;
    else
        $n = $n | 2;
    if (var$4 >>> 1 | 0)
        $n = $n | 1;
    return (32 - $n | 0) - 1 | 0;
},
java_lang_Integer__clinit__V = () => {
    java_lang_Integer_TYPE = $rt_cls($rt_intcls);
},
java_lang_Iterable = $rt_classWithoutFields(0),
java_lang_Math = $rt_classWithoutFields(),
java_lang_Math_min_III = ($a, $b) => {
    if ($a < $b)
        $b = $a;
    return $b;
},
java_lang_Math_max_III = ($a, $b) => {
    if ($a > $b)
        $b = $a;
    return $b;
},
java_lang_NegativeArraySizeException = $rt_classWithoutFields(java_lang_RuntimeException),
java_lang_NegativeArraySizeException__init__V = $this => {
    java_lang_RuntimeException__init__V($this);
},
java_lang_NegativeArraySizeException__init__V$1 = () => {
    let var_0 = new java_lang_NegativeArraySizeException();
    java_lang_NegativeArraySizeException__init__V(var_0);
    return var_0;
},
java_lang_NullPointerException = $rt_classWithoutFields(java_lang_RuntimeException),
java_lang_NullPointerException__init__V = $this => {
    java_lang_RuntimeException__init__V($this);
},
java_lang_NullPointerException__init__V$1 = () => {
    let var_0 = new java_lang_NullPointerException();
    java_lang_NullPointerException__init__V(var_0);
    return var_0;
},
java_lang_String = $rt_classWithoutFields(),
java_lang_String_EMPTY_CHARS = null,
java_lang_String_EMPTY = null,
java_lang_String_CASE_INSENSITIVE_ORDER = null,
java_lang_String_$callClinit = () => {
    java_lang_String_$callClinit = $rt_eraseClinit(java_lang_String);
    java_lang_String__clinit__V();
},
java_lang_String__init__V = $this => {
    java_lang_String_$callClinit();
    java_lang_Object__init__V($this);
    $this.$nativeString = "";
},
java_lang_String__init__V$1 = () => {
    let var_0 = new java_lang_String();
    java_lang_String__init__V(var_0);
    return var_0;
},
java_lang_String__init__V_C = ($this, $characters) => {
    let var$2;
    java_lang_String_$callClinit();
    var$2 = $characters.data;
    java_lang_Object__init__V($this);
    $this.$nativeString = $rt_charArrayToString($characters.data, 0, var$2.length);
},
java_lang_String__init__V_C$1 = var_0 => {
    let var_1 = new java_lang_String();
    java_lang_String__init__V_C(var_1, var_0);
    return var_1;
},
java_lang_String__init__HFyQDR = (var$0, var$1) => {
    var$0.$nativeString = var$1;
},
java_lang_String__init__HFyQDR$1 = var_0 => {
    let var_1 = new java_lang_String();
    java_lang_String__init__HFyQDR(var_1, var_0);
    return var_1;
},
java_lang_String__init__V_CII = (var$0, var$1, $offset, $count) => {
    let var$4;
    java_lang_String_$callClinit();
    var$4 = var$1.data;
    java_lang_Object__init__V(var$0);
    java_util_Objects_checkFromIndexSize_IIII($offset, $count, var$4.length);
    var$0.$nativeString = $rt_charArrayToString(var$1.data, $offset, $count);
},
java_lang_String__init__V_CII$1 = (var_0, var_1, var_2) => {
    let var_3 = new java_lang_String();
    java_lang_String__init__V_CII(var_3, var_0, var_1, var_2);
    return var_3;
},
java_lang_String_charAt_CI = ($this, $index) => {
    if ($index >= 0 && $index < $this.$nativeString.length)
        return $this.$nativeString.charCodeAt($index);
    $rt_throw(java_lang_StringIndexOutOfBoundsException__init__V$1());
},
java_lang_String_length_I = $this => {
    return $this.$nativeString.length;
},
java_lang_String_isEmpty_Z = $this => {
    return $this.$nativeString.length ? 0 : 1;
},
java_lang_String_toString_VHLrpW = $this => {
    return $this;
},
java_lang_String_valueOf_iFmOGb = $i => {
    java_lang_String_$callClinit();
    return ((java_lang_StringBuilder__init__V$1()).$append_ZSDQSM($i)).$toString_VHLrpW();
},
java_lang_String__clinit__V = () => {
    java_lang_String_EMPTY_CHARS = $rt_createCharArray(0);
    java_lang_String_EMPTY = java_lang_String__init__V$1();
    java_lang_String_CASE_INSENSITIVE_ORDER = java_lang_String$_clinit_$lambda$_115_0__init__V$1();
},
java_util_Comparator = $rt_classWithoutFields(0),
java_lang_String$_clinit_$lambda$_115_0 = $rt_classWithoutFields(),
java_lang_String$_clinit_$lambda$_115_0__init__V = var$0 => {
    java_lang_Object__init__V(var$0);
},
java_lang_String$_clinit_$lambda$_115_0__init__V$1 = () => {
    let var_0 = new java_lang_String$_clinit_$lambda$_115_0();
    java_lang_String$_clinit_$lambda$_115_0__init__V(var_0);
    return var_0;
},
java_lang_StringBuilder = $rt_classWithoutFields(java_lang_AbstractStringBuilder),
java_lang_StringBuilder__init__V = $this => {
    java_lang_AbstractStringBuilder__init__V($this);
},
java_lang_StringBuilder__init__V$1 = () => {
    let var_0 = new java_lang_StringBuilder();
    java_lang_StringBuilder__init__V(var_0);
    return var_0;
},
java_lang_StringBuilder_append_ZOYxhs = ($this, $obj) => {
    java_lang_AbstractStringBuilder_append_nfyWfb($this, $obj);
    return $this;
},
java_lang_StringBuilder_append_hrVwXi = ($this, $string) => {
    java_lang_AbstractStringBuilder_append_ZIxCSm($this, $string);
    return $this;
};
let java_lang_StringBuilder_append_ZSDQSM = ($this, $value) => {
    java_lang_AbstractStringBuilder_append_oqxyew($this, $value);
    return $this;
},
java_lang_StringBuilder_append_zwKTwE = ($this, $c) => {
    java_lang_AbstractStringBuilder_append_OMqvAE($this, $c);
    return $this;
},
java_lang_StringBuilder_insert_JDogxs = ($this, $index, $obj) => {
    java_lang_AbstractStringBuilder_insert_KMHMoz($this, $index, $obj);
    return $this;
},
java_lang_StringBuilder_insert_CiShRV = ($this, $index, $c) => {
    java_lang_AbstractStringBuilder_insert_joXuZN($this, $index, $c);
    return $this;
},
java_lang_StringBuilder_insert_yVTRbO = ($this, $index, $string) => {
    java_lang_AbstractStringBuilder_insert_hzKion($this, $index, $string);
    return $this;
},
java_lang_StringBuilder_toString_VHLrpW = $this => {
    return java_lang_AbstractStringBuilder_toString_VHLrpW($this);
},
java_lang_StringBuilder_ensureCapacity_VI = ($this, var$1) => {
    java_lang_AbstractStringBuilder_ensureCapacity_VI($this, var$1);
},
java_lang_StringBuilder_insert_KMHMoz = ($this, var$1, var$2) => {
    return $this.$insert_JDogxs(var$1, var$2);
},
java_lang_StringBuilder_insert_joXuZN = ($this, var$1, var$2) => {
    return $this.$insert_CiShRV(var$1, var$2);
},
java_lang_StringBuilder_insert_hzKion = ($this, var$1, var$2) => {
    return $this.$insert_yVTRbO(var$1, var$2);
},
java_lang_StringIndexOutOfBoundsException = $rt_classWithoutFields(java_lang_IndexOutOfBoundsException),
java_lang_StringIndexOutOfBoundsException__init__V = $this => {
    java_lang_IndexOutOfBoundsException__init__V($this);
},
java_lang_StringIndexOutOfBoundsException__init__V$1 = () => {
    let var_0 = new java_lang_StringIndexOutOfBoundsException();
    java_lang_StringIndexOutOfBoundsException__init__V(var_0);
    return var_0;
},
java_lang_System = $rt_classWithoutFields(),
java_lang_System_outCache = null,
java_lang_System_out_JQwxsu = () => {
    if (java_lang_System_outCache === null)
        java_lang_System_outCache = org_teavm_classlib_impl_console_JSStdoutPrintStream__init__V$1();
    return java_lang_System_outCache;
},
java_lang_reflect_Array = $rt_classWithoutFields(),
java_lang_reflect_Array_newInstance_AAjNOn = ($componentType, $length) => {
    if ($componentType === null)
        $rt_throw(java_lang_NullPointerException__init__V$1());
    if ($componentType === $rt_cls($rt_voidcls))
        $rt_throw(java_lang_IllegalArgumentException__init__V$1());
    if ($length < 0)
        $rt_throw(java_lang_NegativeArraySizeException__init__V$1());
    return java_lang_reflect_Array_newInstanceImpl_lfJdlA(java_lang_Class_getPlatformClass_BSppjk($componentType), $length);
},
java_lang_reflect_Array_newInstanceImpl_lfJdlA = (var$1, var$2) => {
    if (var$1.$meta.primitive) {
        switch (var$1) {
        }
        ;
    }
    return $rt_createArray(var$1, var$2);
},
java_nio_charset_Charset = $rt_classWithoutFields(),
java_util_Collection = $rt_classWithoutFields(0),
java_util_AbstractCollection = $rt_classWithoutFields(),
java_util_AbstractCollection__init__V = $this => {
    java_lang_Object__init__V($this);
},
java_util_AbstractCollection_isEmpty_Z = $this => {
    return $this.$size_I() ? 0 : 1;
},
java_util_SequencedCollection = $rt_classWithoutFields(0),
java_util_List = $rt_classWithoutFields(0);
function java_util_AbstractList() {
    java_util_AbstractCollection.call(this);
    this.$modCount = 0;
}
let java_util_AbstractList__init__V = $this => {
    java_util_AbstractCollection__init__V($this);
},
java_util_AbstractList_iterator_nRSvFx = $this => {
    return java_util_AbstractList$1__init__tWBmpm$1($this);
},
java_util_Iterator = $rt_classWithoutFields(0);
function java_util_AbstractList$1() {
    let a = this; java_lang_Object.call(a);
    a.$index = 0;
    a.$modCount = 0;
    a.$size = 0;
    a.$removeIndex = 0;
    a.$this$0 = null;
}
let java_util_AbstractList$1__init__tWBmpm = ($this, $this$0) => {
    $this.$this$0 = $this$0;
    java_lang_Object__init__V($this);
    $this.$modCount = $this.$this$0.$modCount;
    $this.$size = $this.$this$0.$size_I();
    $this.$removeIndex = (-1);
},
java_util_AbstractList$1__init__tWBmpm$1 = var_0 => {
    let var_1 = new java_util_AbstractList$1();
    java_util_AbstractList$1__init__tWBmpm(var_1, var_0);
    return var_1;
},
java_util_AbstractList$1_hasNext_Z = $this => {
    return $this.$index >= $this.$size ? 0 : 1;
},
java_util_AbstractList$1_next_yToRiJ = $this => {
    let var$1, var$2;
    java_util_AbstractList$1_checkConcurrentModification_V($this);
    $this.$removeIndex = $this.$index;
    var$1 = $this.$this$0;
    var$2 = $this.$index;
    $this.$index = var$2 + 1 | 0;
    return var$1.$get_UosgRn(var$2);
},
java_util_AbstractList$1_checkConcurrentModification_V = $this => {
    if ($this.$modCount >= $this.$this$0.$modCount)
        return;
    $rt_throw(java_util_ConcurrentModificationException__init__V$1());
},
java_util_Map = $rt_classWithoutFields(0),
java_util_Map_getOrDefault_tsMSwf = ($this, $key, $defaultValue) => {
    if ($this.$containsKey_uKWEwg($key))
        $defaultValue = $this.$get_lVIoyP($key);
    return $defaultValue;
};
function java_util_AbstractMap() {
    java_lang_Object.call(this);
    this.$cachedKeySet = null;
}
let java_util_AbstractMap__init__V = $this => {
    java_lang_Object__init__V($this);
},
java_util_Set = $rt_classWithoutFields(0),
java_util_AbstractSet = $rt_classWithoutFields(java_util_AbstractCollection),
java_util_AbstractSet__init__V = $this => {
    java_util_AbstractCollection__init__V($this);
},
java_util_RandomAccess = $rt_classWithoutFields(0);
function java_util_ArrayList() {
    let a = this; java_util_AbstractList.call(a);
    a.$array = null;
    a.$size = 0;
}
let java_util_ArrayList__init__VI = ($this, $initialCapacity) => {
    java_util_AbstractList__init__V($this);
    if ($initialCapacity >= 0) {
        $this.$array = $rt_createArray(java_lang_Object, $initialCapacity);
        return;
    }
    $rt_throw(java_lang_IllegalArgumentException__init__V$1());
},
java_util_ArrayList__init__VI$1 = var_0 => {
    let var_1 = new java_util_ArrayList();
    java_util_ArrayList__init__VI(var_1, var_0);
    return var_1;
},
java_util_ArrayList_ensureCapacity_VI = ($this, $minCapacity) => {
    let $newLength;
    if ($this.$array.data.length < $minCapacity) {
        $newLength = $this.$array.data.length >= 1073741823 ? 2147483647 : java_lang_Math_max_III($minCapacity, java_lang_Math_max_III($this.$array.data.length * 2 | 0, 5));
        $this.$array = java_util_Arrays_copyOf_MqkkEq($this.$array, $newLength);
    }
},
java_util_ArrayList_get_UosgRn = ($this, $index) => {
    java_util_ArrayList_checkIndex_VI($this, $index);
    return $this.$array.data[$index];
},
java_util_ArrayList_size_I = $this => {
    return $this.$size;
},
java_util_ArrayList_add_uKWEwg = ($this, $element) => {
    let var$2, var$3;
    $this.$ensureCapacity_VI($this.$size + 1 | 0);
    var$2 = $this.$array.data;
    var$3 = $this.$size;
    $this.$size = var$3 + 1 | 0;
    var$2[var$3] = $element;
    $this.$modCount = $this.$modCount + 1 | 0;
    return 1;
},
java_util_ArrayList_checkIndex_VI = ($this, $index) => {
    if ($index >= 0 && $index < $this.$size)
        return;
    $rt_throw(java_lang_IndexOutOfBoundsException__init__V$1());
},
java_util_Arrays = $rt_classWithoutFields(),
java_util_Arrays_copyOf__C_CI = ($array, $length) => {
    let var$3, $result, $sz, $i;
    var$3 = $array.data;
    $result = $rt_createCharArray($length);
    $sz = java_lang_Math_min_III($length, var$3.length);
    $i = 0;
    while ($i < $sz) {
        $result.data[$i] = var$3[$i];
        $i = $i + 1 | 0;
    }
    return $result;
},
java_util_Arrays_copyOf_MqkkEq = ($original, $newLength) => {
    let var$3, $result, $sz, $i;
    var$3 = $original.data;
    $result = java_lang_reflect_Array_newInstance_AAjNOn(java_lang_Class_getComponentType_rQPqgt(java_lang_Object_getClass_rQPqgt($original)), $newLength);
    $sz = java_lang_Math_min_III($newLength, var$3.length);
    $i = 0;
    while ($i < $sz) {
        $result.data[$i] = var$3[$i];
        $i = $i + 1 | 0;
    }
    return $result;
},
java_util_Arrays_fill_TiCZqH = ($a, $fromIndex, $toIndex, $val) => {
    let var$5, var$6;
    if ($fromIndex > $toIndex)
        $rt_throw(java_lang_IllegalArgumentException__init__V$1());
    while ($fromIndex < $toIndex) {
        var$5 = $a.data;
        var$6 = $fromIndex + 1 | 0;
        var$5[$fromIndex] = $val;
        $fromIndex = var$6;
    }
},
java_util_Arrays_fill_V_CC = ($a, $val) => {
    java_util_Arrays_fill_TiCZqH($a, 0, $a.data.length, $val);
},
java_util_Arrays_hashCode_Xpebqu = $a => {
    let $hash, $i, var$4;
    if ($a === null)
        return 0;
    $hash = 1;
    $i = 0;
    while (true) {
        var$4 = $a.data;
        if ($i >= var$4.length)
            break;
        $hash = (31 * $hash | 0) + java_util_Objects_hashCode_CeygPn(var$4[$i]) | 0;
        $i = $i + 1 | 0;
    }
    return $hash;
},
java_util_ConcurrentModificationException = $rt_classWithoutFields(java_lang_RuntimeException),
java_util_ConcurrentModificationException__init__V = $this => {
    java_lang_RuntimeException__init__V($this);
},
java_util_ConcurrentModificationException__init__V$1 = () => {
    let var_0 = new java_util_ConcurrentModificationException();
    java_util_ConcurrentModificationException__init__V(var_0);
    return var_0;
};
function java_util_HashMap() {
    let a = this; java_util_AbstractMap.call(a);
    a.$elementCount = 0;
    a.$elementData = null;
    a.$modCount = 0;
    a.$loadFactor = 0.0;
    a.$threshold = 0;
}
let java_util_HashMap_newElementArray_HaDQXJ = ($this, $s) => {
    return $rt_createArray(java_util_HashMap$HashEntry, $s);
},
java_util_HashMap__init__V = $this => {
    java_util_HashMap__init__VI($this, 16);
},
java_util_HashMap__init__V$1 = () => {
    let var_0 = new java_util_HashMap();
    java_util_HashMap__init__V(var_0);
    return var_0;
},
java_util_HashMap__init__VI = ($this, $capacity) => {
    java_util_HashMap__init__VIF($this, $capacity, 0.75);
},
java_util_HashMap__init__VI$1 = var_0 => {
    let var_1 = new java_util_HashMap();
    java_util_HashMap__init__VI(var_1, var_0);
    return var_1;
},
java_util_HashMap_calculateCapacity_II = $x => {
    let var$2, var$3;
    if ($x >= 1073741824)
        return 1073741824;
    if (!$x)
        return 16;
    var$2 = $x - 1 | 0;
    var$3 = var$2 | var$2 >> 1;
    var$3 = var$3 | var$3 >> 2;
    var$3 = var$3 | var$3 >> 4;
    var$3 = var$3 | var$3 >> 8;
    var$3 = var$3 | var$3 >> 16;
    return var$3 + 1 | 0;
},
java_util_HashMap__init__VIF = ($this, $capacity, $loadFactor) => {
    let var$3;
    java_util_AbstractMap__init__V($this);
    if ($capacity >= 0 && $loadFactor > 0.0) {
        var$3 = java_util_HashMap_calculateCapacity_II($capacity);
        $this.$elementCount = 0;
        $this.$elementData = $this.$newElementArray_HaDQXJ(var$3);
        $this.$loadFactor = $loadFactor;
        java_util_HashMap_computeThreshold_V($this);
        return;
    }
    $rt_throw(java_lang_IllegalArgumentException__init__V$1());
},
java_util_HashMap__init__VIF$1 = (var_0, var_1) => {
    let var_2 = new java_util_HashMap();
    java_util_HashMap__init__VIF(var_2, var_0, var_1);
    return var_2;
},
java_util_HashMap_computeThreshold_V = $this => {
    $this.$threshold = $this.$elementData.data.length * $this.$loadFactor | 0;
},
java_util_HashMap_containsKey_uKWEwg = ($this, $key) => {
    let $m;
    $m = java_util_HashMap_entryByKey_oGTkjE($this, $key);
    return $m === null ? 0 : 1;
},
java_util_HashMap_get_lVIoyP = ($this, $key) => {
    let $m;
    $m = java_util_HashMap_entryByKey_oGTkjE($this, $key);
    if ($m === null)
        return null;
    return $m.$value;
},
java_util_HashMap_entryByKey_oGTkjE = ($this, $key) => {
    let $m, $hash, $index;
    if ($key === null)
        $m = java_util_HashMap_findNullKeyEntry_QqMKmf($this);
    else {
        $hash = $key.$hashCode_I();
        $index = $hash & ($this.$elementData.data.length - 1 | 0);
        $m = java_util_HashMap_findNonNullKeyEntry_RrVLlf($this, $key, $index, $hash);
    }
    return $m;
},
java_util_HashMap_findNonNullKeyEntry_RrVLlf = ($this, $key, $index, $keyHash) => {
    let $m;
    $m = $this.$elementData.data[$index];
    while ($m !== null && !($m.$origKeyHash == $keyHash && java_util_HashMap_areEqualKeys_UWKivJ($key, $m.$key))) {
        $m = $m.$next;
    }
    return $m;
},
java_util_HashMap_findNullKeyEntry_QqMKmf = $this => {
    let $m;
    $m = $this.$elementData.data[0];
    while ($m !== null && $m.$key !== null) {
        $m = $m.$next;
    }
    return $m;
},
java_util_HashMap_keySet_wfeRzl = $this => {
    if ($this.$cachedKeySet === null)
        $this.$cachedKeySet = java_util_HashMap$1__init__WqYpIS$1($this);
    return $this.$cachedKeySet;
},
java_util_HashMap_put_tsMSwf = ($this, $key, $value) => {
    return java_util_HashMap_putImpl_tsMSwf($this, $key, $value);
},
java_util_HashMap_putImpl_tsMSwf = ($this, $key, $value) => {
    let $entry, var$4, $hash, $index, $result;
    if ($key === null) {
        $entry = java_util_HashMap_findNullKeyEntry_QqMKmf($this);
        if ($entry === null) {
            $this.$modCount = $this.$modCount + 1 | 0;
            $entry = java_util_HashMap_createHashedEntry_RrVLlf($this, null, 0, 0);
            var$4 = $this.$elementCount + 1 | 0;
            $this.$elementCount = var$4;
            if (var$4 > $this.$threshold)
                $this.$rehash_V();
        }
    } else {
        $hash = $key.$hashCode_I();
        $index = $hash & ($this.$elementData.data.length - 1 | 0);
        $entry = java_util_HashMap_findNonNullKeyEntry_RrVLlf($this, $key, $index, $hash);
        if ($entry === null) {
            $this.$modCount = $this.$modCount + 1 | 0;
            $entry = java_util_HashMap_createHashedEntry_RrVLlf($this, $key, $index, $hash);
            var$4 = $this.$elementCount + 1 | 0;
            $this.$elementCount = var$4;
            if (var$4 > $this.$threshold)
                $this.$rehash_V();
        }
    }
    $result = $entry.$value;
    $entry.$value = $value;
    return $result;
},
java_util_HashMap_createHashedEntry_RrVLlf = ($this, $key, $index, $hash) => {
    let $entry;
    $entry = java_util_HashMap$HashEntry__init__moeQBN$1($key, $hash);
    $entry.$next = $this.$elementData.data[$index];
    $this.$elementData.data[$index] = $entry;
    return $entry;
},
java_util_HashMap_rehash_VI = ($this, $capacity) => {
    let $length, $newData, $i, $entry, var$6, $index, $next;
    $length = java_util_HashMap_calculateCapacity_II(!$capacity ? 1 : $capacity << 1);
    $newData = $this.$newElementArray_HaDQXJ($length);
    $i = 0;
    while ($i < $this.$elementData.data.length) {
        $entry = $this.$elementData.data[$i];
        $this.$elementData.data[$i] = null;
        while ($entry !== null) {
            var$6 = $newData.data;
            $index = $entry.$origKeyHash & ($length - 1 | 0);
            $next = $entry.$next;
            $entry.$next = var$6[$index];
            var$6[$index] = $entry;
            $entry = $next;
        }
        $i = $i + 1 | 0;
    }
    $this.$elementData = $newData;
    java_util_HashMap_computeThreshold_V($this);
},
java_util_HashMap_rehash_V = $this => {
    $this.$rehash_VI($this.$elementData.data.length);
},
java_util_HashMap_areEqualKeys_UWKivJ = ($key1, $key2) => {
    return $key1 !== $key2 && !$key1.$equals_uKWEwg($key2) ? 0 : 1;
};
function java_util_HashMap$1() {
    java_util_AbstractSet.call(this);
    this.$this$0 = null;
}
let java_util_HashMap$1__init__WqYpIS = ($this, $this$0) => {
    $this.$this$0 = $this$0;
    java_util_AbstractSet__init__V($this);
},
java_util_HashMap$1__init__WqYpIS$1 = var_0 => {
    let var_1 = new java_util_HashMap$1();
    java_util_HashMap$1__init__WqYpIS(var_1, var_0);
    return var_1;
},
java_util_HashMap$1_iterator_nRSvFx = $this => {
    return java_util_HashMap$KeyIterator__init__WqYpIS$1($this.$this$0);
};
function java_util_HashMap$AbstractMapIterator() {
    let a = this; java_lang_Object.call(a);
    a.$position = 0;
    a.$expectedModCount = 0;
    a.$futureEntry = null;
    a.$currentEntry = null;
    a.$prevEntry = null;
    a.$associatedMap = null;
}
let java_util_HashMap$AbstractMapIterator__init__WqYpIS = ($this, $hm) => {
    java_lang_Object__init__V($this);
    $this.$associatedMap = $hm;
    $this.$expectedModCount = $hm.$modCount;
    $this.$futureEntry = null;
},
java_util_HashMap$AbstractMapIterator__init__WqYpIS$1 = var_0 => {
    let var_1 = new java_util_HashMap$AbstractMapIterator();
    java_util_HashMap$AbstractMapIterator__init__WqYpIS(var_1, var_0);
    return var_1;
},
java_util_HashMap$AbstractMapIterator_hasNext_Z = $this => {
    if ($this.$futureEntry !== null)
        return 1;
    while ($this.$position < $this.$associatedMap.$elementData.data.length) {
        if ($this.$associatedMap.$elementData.data[$this.$position] !== null)
            return 1;
        $this.$position = $this.$position + 1 | 0;
    }
    return 0;
},
java_util_HashMap$AbstractMapIterator_checkConcurrentMod_V = $this => {
    if ($this.$expectedModCount == $this.$associatedMap.$modCount)
        return;
    $rt_throw(java_util_ConcurrentModificationException__init__V$1());
},
java_util_HashMap$AbstractMapIterator_makeNext_V = $this => {
    let var$1, var$2;
    java_util_HashMap$AbstractMapIterator_checkConcurrentMod_V($this);
    if (!$this.$hasNext_Z())
        $rt_throw(java_util_NoSuchElementException__init__V$1());
    if ($this.$futureEntry === null) {
        var$1 = $this.$associatedMap.$elementData.data;
        var$2 = $this.$position;
        $this.$position = var$2 + 1 | 0;
        $this.$currentEntry = var$1[var$2];
        $this.$futureEntry = $this.$currentEntry.$next;
        $this.$prevEntry = null;
    } else {
        if ($this.$currentEntry !== null)
            $this.$prevEntry = $this.$currentEntry;
        $this.$currentEntry = $this.$futureEntry;
        $this.$futureEntry = $this.$futureEntry.$next;
    }
},
java_util_Map$Entry = $rt_classWithoutFields(0);
function java_util_MapEntry() {
    let a = this; java_lang_Object.call(a);
    a.$key = null;
    a.$value = null;
}
let java_util_MapEntry__init__PLTLFS = ($this, $theKey, $theValue) => {
    java_lang_Object__init__V($this);
    $this.$key = $theKey;
    $this.$value = $theValue;
},
java_util_MapEntry__init__PLTLFS$1 = (var_0, var_1) => {
    let var_2 = new java_util_MapEntry();
    java_util_MapEntry__init__PLTLFS(var_2, var_0, var_1);
    return var_2;
};
function java_util_HashMap$HashEntry() {
    let a = this; java_util_MapEntry.call(a);
    a.$origKeyHash = 0;
    a.$next = null;
}
let java_util_HashMap$HashEntry__init__moeQBN = ($this, $theKey, $hash) => {
    java_util_MapEntry__init__PLTLFS($this, $theKey, null);
    $this.$origKeyHash = $hash;
},
java_util_HashMap$HashEntry__init__moeQBN$1 = (var_0, var_1) => {
    let var_2 = new java_util_HashMap$HashEntry();
    java_util_HashMap$HashEntry__init__moeQBN(var_2, var_0, var_1);
    return var_2;
},
java_util_HashMap$KeyIterator = $rt_classWithoutFields(java_util_HashMap$AbstractMapIterator),
java_util_HashMap$KeyIterator__init__WqYpIS = ($this, $map) => {
    java_util_HashMap$AbstractMapIterator__init__WqYpIS($this, $map);
},
java_util_HashMap$KeyIterator__init__WqYpIS$1 = var_0 => {
    let var_1 = new java_util_HashMap$KeyIterator();
    java_util_HashMap$KeyIterator__init__WqYpIS(var_1, var_0);
    return var_1;
},
java_util_HashMap$KeyIterator_next_yToRiJ = $this => {
    java_util_HashMap$AbstractMapIterator_makeNext_V($this);
    return $this.$currentEntry.$key;
},
java_util_NoSuchElementException = $rt_classWithoutFields(java_lang_RuntimeException),
java_util_NoSuchElementException__init__V = $this => {
    java_lang_RuntimeException__init__V($this);
},
java_util_NoSuchElementException__init__V$1 = () => {
    let var_0 = new java_util_NoSuchElementException();
    java_util_NoSuchElementException__init__V(var_0);
    return var_0;
},
java_util_Objects = $rt_classWithoutFields(),
java_util_Objects_hashCode_CeygPn = $o => {
    return $o !== null ? $o.$hashCode_I() : 0;
},
java_util_Objects_hash_Xpebqu = $values => {
    return java_util_Arrays_hashCode_Xpebqu($values);
},
java_util_Objects_checkFromIndexSize_IIII = ($fromIndex, $size, $length) => {
    if ($fromIndex >= 0 && $size >= 0 && $size <= ($length - $fromIndex | 0))
        return $fromIndex;
    $rt_throw(java_lang_IndexOutOfBoundsException__init__V$1());
},
org_teavm_classlib_impl_IntegerUtil = $rt_classWithoutFields(),
org_teavm_classlib_impl_IntegerUtil_toUnsignedLogRadixString_KSkSDS = ($value, $radixLog2) => {
    let $radix, $mask, $sz, $chars, $pos, $target, var$9, $target_0;
    if (!$value)
        return $rt_str("0");
    $radix = 1 << $radixLog2;
    $mask = $radix - 1 | 0;
    $sz = (((32 - java_lang_Integer_numberOfLeadingZeros_II($value) | 0) + $radixLog2 | 0) - 1 | 0) / $radixLog2 | 0;
    $chars = $rt_createCharArray($sz);
    $pos = $rt_imul($sz - 1 | 0, $radixLog2);
    $target = 0;
    while ($pos >= 0) {
        var$9 = $chars.data;
        $target_0 = $target + 1 | 0;
        var$9[$target] = java_lang_Character_forDigit_CII(($value >>> $pos | 0) & $mask, $radix);
        $pos = $pos - $radixLog2 | 0;
        $target = $target_0;
    }
    return java_lang_String__init__V_C$1($chars);
},
org_teavm_classlib_impl_console_JsConsolePrintStream = $rt_classWithoutFields(java_io_PrintStream),
org_teavm_classlib_impl_console_JsConsolePrintStream__init__V = $this => {
    java_io_PrintStream__init__RHOATE($this, null, 0, null);
},
org_teavm_classlib_impl_console_JsConsolePrintStream_println_XjCHVS = ($this, $s) => {
    $this.$print_XjCHVS($s);
    $this.$print_XjCHVS($rt_str("\n"));
},
org_teavm_classlib_impl_console_JSStdoutPrintStream = $rt_classWithoutFields(org_teavm_classlib_impl_console_JsConsolePrintStream),
org_teavm_classlib_impl_console_JSStdoutPrintStream__init__V = $this => {
    org_teavm_classlib_impl_console_JsConsolePrintStream__init__V($this);
},
org_teavm_classlib_impl_console_JSStdoutPrintStream__init__V$1 = () => {
    let var_0 = new org_teavm_classlib_impl_console_JSStdoutPrintStream();
    org_teavm_classlib_impl_console_JSStdoutPrintStream__init__V(var_0);
    return var_0;
},
org_teavm_classlib_impl_console_JSStdoutPrintStream_print_XjCHVS = ($this, $s) => {
    if ($s === null)
        $s = $rt_str("null");
    $rt_putStdout($rt_ustr($s));
},
org_teavm_jso_impl_JS = $rt_classWithoutFields(),
org_teavm_platform_Platform = $rt_classWithoutFields(),
org_teavm_platform_Platform_getArrayItem_PKtewy = $cls => {
    return $cls.$meta.item;
},
org_teavm_platform_Platform_getName_xWEGZR = $cls => {
    return $rt_str($cls.$meta.name);
},
org_teavm_runtime = $rt_classWithoutFields();
$rt_packages([-1, "java", 0, "lang"
]);
$rt_metadata([java_lang_Object, "Object", 1, 0, [], 0, 3, 0, 0, [(o,r)=>o.$getClass_rQPqgt=r, $rt_wrapFunction0(java_lang_Object_getClass_rQPqgt), (o,r)=>o.$toString_VHLrpW=r, $rt_wrapFunction0(java_lang_Object_toString_VHLrpW), (o,r)=>o.$identity_I=r, $rt_wrapFunction0(java_lang_Object_identity_I)],
java_lang_AutoCloseable, 0, java_lang_Object, [], 3, 3, 0, 0, 0,
java_io_Closeable, 0, java_lang_Object, [java_lang_AutoCloseable], 3, 3, 0, 0, 0,
java_io_Flushable, 0, java_lang_Object, [], 3, 3, 0, 0, 0,
java_io_OutputStream, 0, java_lang_Object, [java_io_Closeable, java_io_Flushable], 1, 3, 0, 0, [(o,r)=>o.$_init__V=r, $rt_wrapFunction0(java_io_OutputStream__init__V)],
java_io_FilterOutputStream, 0, java_io_OutputStream, [], 0, 3, 0, 0, [(o,r)=>o.$_init__gjftmH=r, $rt_wrapFunction1(java_io_FilterOutputStream__init__gjftmH)],
java_lang_Appendable, 0, java_lang_Object, [], 3, 3, 0, 0, 0,
java_io_PrintStream, 0, java_io_FilterOutputStream, [java_lang_Appendable], 0, 3, 0, 0, [(o,r)=>o.$_init__RHOATE=r, $rt_wrapFunction3(java_io_PrintStream__init__RHOATE)],
java_io_Serializable, 0, java_lang_Object, [], 3, 3, 0, 0, 0,
java_lang_CharSequence, 0, java_lang_Object, [], 3, 3, 0, 0, 0,
java_lang_AbstractStringBuilder, 0, java_lang_Object, [java_io_Serializable, java_lang_CharSequence], 0, 0, 0, 0, [(o,r)=>o.$_init__V=r, $rt_wrapFunction0(java_lang_AbstractStringBuilder__init__V), (o,r)=>o.$_init__VI=r, $rt_wrapFunction1(java_lang_AbstractStringBuilder__init__VI), (o,r)=>o.$append_nfyWfb=r, $rt_wrapFunction1(java_lang_AbstractStringBuilder_append_nfyWfb), (o,r)=>o.$append_ZIxCSm=r, $rt_wrapFunction1(java_lang_AbstractStringBuilder_append_ZIxCSm), (o,r)=>o.$insert_hzKion=r, $rt_wrapFunction2(java_lang_AbstractStringBuilder_insert_hzKion),
(o,r)=>o.$append_oqxyew=r, $rt_wrapFunction1(java_lang_AbstractStringBuilder_append_oqxyew), (o,r)=>o.$append_ylxaCJ=r, $rt_wrapFunction2(java_lang_AbstractStringBuilder_append_ylxaCJ), (o,r)=>o.$insert_JzPOxM=r, $rt_wrapFunction3(java_lang_AbstractStringBuilder_insert_JzPOxM), (o,r)=>o.$append_OMqvAE=r, $rt_wrapFunction1(java_lang_AbstractStringBuilder_append_OMqvAE), (o,r)=>o.$insert_joXuZN=r, $rt_wrapFunction2(java_lang_AbstractStringBuilder_insert_joXuZN), (o,r)=>o.$insert_KMHMoz=r, $rt_wrapFunction2(java_lang_AbstractStringBuilder_insert_KMHMoz),
(o,r)=>o.$ensureCapacity_VI=r, $rt_wrapFunction1(java_lang_AbstractStringBuilder_ensureCapacity_VI), (o,r)=>o.$toString_VHLrpW=r, $rt_wrapFunction0(java_lang_AbstractStringBuilder_toString_VHLrpW)],
java_lang_Comparable, 0, java_lang_Object, [], 3, 3, 0, 0, 0,
java_lang_Character, 0, java_lang_Object, [java_lang_Comparable], 0, 3, 0, java_lang_Character_$callClinit, 0,
java_lang_reflect_AnnotatedElement, 0, java_lang_Object, [], 3, 3, 0, 0, 0,
java_lang_reflect_Type, 0, java_lang_Object, [], 3, 3, 0, 0, 0,
java_lang_Class, 0, java_lang_Object, [java_lang_reflect_AnnotatedElement, java_lang_reflect_Type], 4, 3, 0, 0, [(o,r)=>o.$getPlatformClass_BSppjk=r, $rt_wrapFunction0(java_lang_Class_getPlatformClass_BSppjk), (o,r)=>o.$getName_VHLrpW=r, $rt_wrapFunction0(java_lang_Class_getName_VHLrpW), (o,r)=>o.$getComponentType_rQPqgt=r, $rt_wrapFunction0(java_lang_Class_getComponentType_rQPqgt)],
java_lang_Throwable, 0, java_lang_Object, [], 0, 3, 0, 0, [(o,r)=>o.$fillInStackTrace_MBBfFS=r, $rt_wrapFunction0(java_lang_Throwable_fillInStackTrace_MBBfFS), (o,r)=>o.$getMessage_VHLrpW=r, $rt_wrapFunction0(java_lang_Throwable_getMessage_VHLrpW), (o,r)=>o.$getCause_MBBfFS=r, $rt_wrapFunction0(java_lang_Throwable_getCause_MBBfFS)],
java_lang_Exception, 0, java_lang_Throwable, [], 0, 3, 0, 0, [(o,r)=>o.$_init__V=r, $rt_wrapFunction0(java_lang_Exception__init__V), (o,r)=>o.$_init__XjCHVS=r, $rt_wrapFunction1(java_lang_Exception__init__XjCHVS)],
java_lang_RuntimeException, 0, java_lang_Exception, [], 0, 3, 0, 0, [(o,r)=>o.$_init__V=r, $rt_wrapFunction0(java_lang_RuntimeException__init__V), (o,r)=>o.$_init__XjCHVS=r, $rt_wrapFunction1(java_lang_RuntimeException__init__XjCHVS)],
java_lang_ClassCastException, 0, java_lang_RuntimeException, [], 0, 3, 0, 0, 0,
java_lang_Cloneable, 0, java_lang_Object, [], 3, 3, 0, 0, 0,
java_lang_IllegalArgumentException, 0, java_lang_RuntimeException, [], 0, 3, 0, 0, [(o,r)=>o.$_init__V=r, $rt_wrapFunction0(java_lang_IllegalArgumentException__init__V), (o,r)=>o.$_init__XjCHVS=r, $rt_wrapFunction1(java_lang_IllegalArgumentException__init__XjCHVS)],
java_lang_IndexOutOfBoundsException, 0, java_lang_RuntimeException, [], 0, 3, 0, 0, [(o,r)=>o.$_init__V=r, $rt_wrapFunction0(java_lang_IndexOutOfBoundsException__init__V)],
java_lang_Number, 0, java_lang_Object, [java_io_Serializable], 1, 3, 0, 0, [(o,r)=>o.$_init__V=r, $rt_wrapFunction0(java_lang_Number__init__V)],
java_lang_Integer, 0, java_lang_Number, [java_lang_Comparable], 0, 3, 0, java_lang_Integer_$callClinit, [(o,r)=>o.$_init__VI=r, $rt_wrapFunction1(java_lang_Integer__init__VI), (o,r)=>o.$hashCode_I=r, $rt_wrapFunction0(java_lang_Integer_hashCode_I)],
java_lang_Iterable, 0, java_lang_Object, [], 3, 3, 0, 0, 0,
java_lang_Math, 0, java_lang_Object, [], 4, 3, 0, 0, 0,
java_lang_NegativeArraySizeException, 0, java_lang_RuntimeException, [], 0, 3, 0, 0, [(o,r)=>o.$_init__V=r, $rt_wrapFunction0(java_lang_NegativeArraySizeException__init__V)],
java_lang_NullPointerException, 0, java_lang_RuntimeException, [], 0, 3, 0, 0, [(o,r)=>o.$_init__V=r, $rt_wrapFunction0(java_lang_NullPointerException__init__V)],
java_lang_String, 0, java_lang_Object, [java_io_Serializable, java_lang_Comparable, java_lang_CharSequence], 0, 3, 0, java_lang_String_$callClinit, [(o,r)=>o.$_init__V=r, $rt_wrapFunction0(java_lang_String__init__V), (o,r)=>o.$_init__V_C=r, $rt_wrapFunction1(java_lang_String__init__V_C), (o,r)=>o.$_init__HFyQDR=r, $rt_wrapFunction1(java_lang_String__init__HFyQDR), (o,r)=>o.$_init__V_CII=r, $rt_wrapFunction3(java_lang_String__init__V_CII), (o,r)=>o.$charAt_CI=r, $rt_wrapFunction1(java_lang_String_charAt_CI),
(o,r)=>o.$length_I=r, $rt_wrapFunction0(java_lang_String_length_I), (o,r)=>o.$isEmpty_Z=r, $rt_wrapFunction0(java_lang_String_isEmpty_Z), (o,r)=>o.$toString_VHLrpW=r, $rt_wrapFunction0(java_lang_String_toString_VHLrpW)],
java_util_Comparator, 0, java_lang_Object, [], 3, 3, 0, 0, 0,
java_lang_String$_clinit_$lambda$_115_0, 0, java_lang_Object, [java_util_Comparator], 0, 3, 0, 0, [(o,r)=>o.$_init__V=r, $rt_wrapFunction0(java_lang_String$_clinit_$lambda$_115_0__init__V)],
java_lang_StringBuilder, 0, java_lang_AbstractStringBuilder, [java_lang_Appendable], 0, 3, 0, 0, [(o,r)=>o.$_init__V=r, $rt_wrapFunction0(java_lang_StringBuilder__init__V), (o,r)=>o.$append_ZOYxhs=r, $rt_wrapFunction1(java_lang_StringBuilder_append_ZOYxhs), (o,r)=>o.$append_hrVwXi=r, $rt_wrapFunction1(java_lang_StringBuilder_append_hrVwXi), (o,r)=>o.$append_ZSDQSM=r, $rt_wrapFunction1(java_lang_StringBuilder_append_ZSDQSM), (o,r)=>o.$append_zwKTwE=r, $rt_wrapFunction1(java_lang_StringBuilder_append_zwKTwE),
(o,r)=>o.$insert_JDogxs=r, $rt_wrapFunction2(java_lang_StringBuilder_insert_JDogxs), (o,r)=>o.$insert_CiShRV=r, $rt_wrapFunction2(java_lang_StringBuilder_insert_CiShRV), (o,r)=>o.$insert_yVTRbO=r, $rt_wrapFunction2(java_lang_StringBuilder_insert_yVTRbO), (o,r)=>o.$toString_VHLrpW=r, $rt_wrapFunction0(java_lang_StringBuilder_toString_VHLrpW), (o,r)=>o.$ensureCapacity_VI=r, $rt_wrapFunction1(java_lang_StringBuilder_ensureCapacity_VI), (o,r)=>o.$insert_KMHMoz=r, $rt_wrapFunction2(java_lang_StringBuilder_insert_KMHMoz),
(o,r)=>o.$insert_joXuZN=r, $rt_wrapFunction2(java_lang_StringBuilder_insert_joXuZN), (o,r)=>o.$insert_hzKion=r, $rt_wrapFunction2(java_lang_StringBuilder_insert_hzKion)],
java_lang_StringIndexOutOfBoundsException, 0, java_lang_IndexOutOfBoundsException, [], 0, 3, 0, 0, [(o,r)=>o.$_init__V=r, $rt_wrapFunction0(java_lang_StringIndexOutOfBoundsException__init__V)],
java_lang_System, 0, java_lang_Object, [], 4, 3, 0, 0, 0,
java_lang_reflect_Array, 0, java_lang_Object, [], 4, 3, 0, 0, 0,
java_nio_charset_Charset, 0, java_lang_Object, [java_lang_Comparable], 1, 3, 0, 0, 0,
java_util_Collection, 0, java_lang_Object, [java_lang_Iterable], 3, 3, 0, 0, 0,
java_util_AbstractCollection, 0, java_lang_Object, [java_util_Collection], 1, 3, 0, 0, [(o,r)=>o.$_init__V=r, $rt_wrapFunction0(java_util_AbstractCollection__init__V), (o,r)=>o.$isEmpty_Z=r, $rt_wrapFunction0(java_util_AbstractCollection_isEmpty_Z)],
java_util_SequencedCollection, 0, java_lang_Object, [java_util_Collection], 3, 3, 0, 0, 0,
java_util_List, 0, java_lang_Object, [java_util_SequencedCollection], 3, 3, 0, 0, 0,
java_util_AbstractList, 0, java_util_AbstractCollection, [java_util_List], 1, 3, 0, 0, [(o,r)=>o.$_init__V=r, $rt_wrapFunction0(java_util_AbstractList__init__V), (o,r)=>o.$iterator_nRSvFx=r, $rt_wrapFunction0(java_util_AbstractList_iterator_nRSvFx)],
java_util_Iterator, 0, java_lang_Object, [], 3, 3, 0, 0, 0,
java_util_AbstractList$1, 0, java_lang_Object, [java_util_Iterator], 0, 0, 0, 0, [(o,r)=>o.$_init__tWBmpm=r, $rt_wrapFunction1(java_util_AbstractList$1__init__tWBmpm), (o,r)=>o.$hasNext_Z=r, $rt_wrapFunction0(java_util_AbstractList$1_hasNext_Z), (o,r)=>o.$next_yToRiJ=r, $rt_wrapFunction0(java_util_AbstractList$1_next_yToRiJ)],
java_util_Map, 0, java_lang_Object, [], 3, 3, 0, 0, [(o,r)=>o.$getOrDefault_tsMSwf=r, $rt_wrapFunction2(java_util_Map_getOrDefault_tsMSwf)],
java_util_AbstractMap, 0, java_lang_Object, [java_util_Map], 1, 3, 0, 0, [(o,r)=>o.$getOrDefault_tsMSwf=r, $rt_wrapFunction2(java_util_Map_getOrDefault_tsMSwf), (o,r)=>o.$_init__V=r, $rt_wrapFunction0(java_util_AbstractMap__init__V)],
java_util_Set, 0, java_lang_Object, [java_util_Collection], 3, 3, 0, 0, 0,
java_util_AbstractSet, 0, java_util_AbstractCollection, [java_util_Set], 1, 3, 0, 0, [(o,r)=>o.$_init__V=r, $rt_wrapFunction0(java_util_AbstractSet__init__V)],
java_util_RandomAccess, 0, java_lang_Object, [], 3, 3, 0, 0, 0,
java_util_ArrayList, 0, java_util_AbstractList, [java_lang_Cloneable, java_io_Serializable, java_util_RandomAccess], 0, 3, 0, 0, [(o,r)=>o.$_init__VI=r, $rt_wrapFunction1(java_util_ArrayList__init__VI), (o,r)=>o.$ensureCapacity_VI=r, $rt_wrapFunction1(java_util_ArrayList_ensureCapacity_VI), (o,r)=>o.$get_UosgRn=r, $rt_wrapFunction1(java_util_ArrayList_get_UosgRn), (o,r)=>o.$size_I=r, $rt_wrapFunction0(java_util_ArrayList_size_I), (o,r)=>o.$add_uKWEwg=r, $rt_wrapFunction1(java_util_ArrayList_add_uKWEwg)]]);
$rt_metadata([java_util_Arrays, 0, java_lang_Object, [], 0, 3, 0, 0, 0,
java_util_ConcurrentModificationException, 0, java_lang_RuntimeException, [], 0, 3, 0, 0, [(o,r)=>o.$_init__V=r, $rt_wrapFunction0(java_util_ConcurrentModificationException__init__V)],
java_util_HashMap, 0, java_util_AbstractMap, [java_lang_Cloneable, java_io_Serializable], 0, 3, 0, 0, [(o,r)=>o.$getOrDefault_tsMSwf=r, $rt_wrapFunction2(java_util_Map_getOrDefault_tsMSwf), (o,r)=>o.$newElementArray_HaDQXJ=r, $rt_wrapFunction1(java_util_HashMap_newElementArray_HaDQXJ), (o,r)=>o.$_init__V=r, $rt_wrapFunction0(java_util_HashMap__init__V), (o,r)=>o.$_init__VI=r, $rt_wrapFunction1(java_util_HashMap__init__VI), (o,r)=>o.$_init__VIF=r, $rt_wrapFunction2(java_util_HashMap__init__VIF), (o,r)=>o.$containsKey_uKWEwg=r,
$rt_wrapFunction1(java_util_HashMap_containsKey_uKWEwg), (o,r)=>o.$get_lVIoyP=r, $rt_wrapFunction1(java_util_HashMap_get_lVIoyP), (o,r)=>o.$entryByKey_oGTkjE=r, $rt_wrapFunction1(java_util_HashMap_entryByKey_oGTkjE), (o,r)=>o.$findNonNullKeyEntry_RrVLlf=r, $rt_wrapFunction3(java_util_HashMap_findNonNullKeyEntry_RrVLlf), (o,r)=>o.$findNullKeyEntry_QqMKmf=r, $rt_wrapFunction0(java_util_HashMap_findNullKeyEntry_QqMKmf), (o,r)=>o.$keySet_wfeRzl=r, $rt_wrapFunction0(java_util_HashMap_keySet_wfeRzl), (o,r)=>o.$put_tsMSwf=r,
$rt_wrapFunction2(java_util_HashMap_put_tsMSwf), (o,r)=>o.$rehash_VI=r, $rt_wrapFunction1(java_util_HashMap_rehash_VI), (o,r)=>o.$rehash_V=r, $rt_wrapFunction0(java_util_HashMap_rehash_V)],
java_util_HashMap$1, 0, java_util_AbstractSet, [], 0, 0, 0, 0, [(o,r)=>o.$_init__WqYpIS=r, $rt_wrapFunction1(java_util_HashMap$1__init__WqYpIS), (o,r)=>o.$iterator_nRSvFx=r, $rt_wrapFunction0(java_util_HashMap$1_iterator_nRSvFx)],
java_util_HashMap$AbstractMapIterator, 0, java_lang_Object, [], 0, 0, 0, 0, [(o,r)=>o.$_init__WqYpIS=r, $rt_wrapFunction1(java_util_HashMap$AbstractMapIterator__init__WqYpIS), (o,r)=>o.$hasNext_Z=r, $rt_wrapFunction0(java_util_HashMap$AbstractMapIterator_hasNext_Z), (o,r)=>o.$checkConcurrentMod_V=r, $rt_wrapFunction0(java_util_HashMap$AbstractMapIterator_checkConcurrentMod_V), (o,r)=>o.$makeNext_V=r, $rt_wrapFunction0(java_util_HashMap$AbstractMapIterator_makeNext_V)],
java_util_Map$Entry, 0, java_lang_Object, [], 3, 3, 0, 0, 0,
java_util_MapEntry, 0, java_lang_Object, [java_util_Map$Entry, java_lang_Cloneable], 0, 0, 0, 0, [(o,r)=>o.$_init__PLTLFS=r, $rt_wrapFunction2(java_util_MapEntry__init__PLTLFS)],
java_util_HashMap$HashEntry, 0, java_util_MapEntry, [], 0, 0, 0, 0, [(o,r)=>o.$_init__moeQBN=r, $rt_wrapFunction2(java_util_HashMap$HashEntry__init__moeQBN)],
java_util_HashMap$KeyIterator, 0, java_util_HashMap$AbstractMapIterator, [java_util_Iterator], 0, 0, 0, 0, [(o,r)=>o.$_init__WqYpIS=r, $rt_wrapFunction1(java_util_HashMap$KeyIterator__init__WqYpIS), (o,r)=>o.$next_yToRiJ=r, $rt_wrapFunction0(java_util_HashMap$KeyIterator_next_yToRiJ)],
java_util_NoSuchElementException, 0, java_lang_RuntimeException, [], 0, 3, 0, 0, [(o,r)=>o.$_init__V=r, $rt_wrapFunction0(java_util_NoSuchElementException__init__V)],
java_util_Objects, 0, java_lang_Object, [], 4, 3, 0, 0, 0,
org_teavm_classlib_impl_IntegerUtil, 0, java_lang_Object, [], 4, 3, 0, 0, 0,
org_teavm_classlib_impl_console_JsConsolePrintStream, 0, java_io_PrintStream, [], 1, 3, 0, 0, [(o,r)=>o.$_init__V=r, $rt_wrapFunction0(org_teavm_classlib_impl_console_JsConsolePrintStream__init__V), (o,r)=>o.$println_XjCHVS=r, $rt_wrapFunction1(org_teavm_classlib_impl_console_JsConsolePrintStream_println_XjCHVS)],
org_teavm_classlib_impl_console_JSStdoutPrintStream, 0, org_teavm_classlib_impl_console_JsConsolePrintStream, [], 0, 3, 0, 0, [(o,r)=>o.$_init__V=r, $rt_wrapFunction0(org_teavm_classlib_impl_console_JSStdoutPrintStream__init__V), (o,r)=>o.$print_XjCHVS=r, $rt_wrapFunction1(org_teavm_classlib_impl_console_JSStdoutPrintStream_print_XjCHVS)],
org_teavm_jso_impl_JS, 0, java_lang_Object, [], 4, 3, 0, 0, 0,
org_teavm_platform_Platform, 0, java_lang_Object, [], 4, 3, 0, 0, 0,
org_teavm_runtime, 0, java_lang_Object, [], 0, 0, 0, 0, 0]);
let $rt_booleanArrayCls = $rt_arraycls($rt_booleancls),
$rt_charArrayCls = $rt_arraycls($rt_charcls),
$rt_byteArrayCls = $rt_arraycls($rt_bytecls),
$rt_shortArrayCls = $rt_arraycls($rt_shortcls),
$rt_intArrayCls = $rt_arraycls($rt_intcls),
$rt_longArrayCls = $rt_arraycls($rt_longcls),
$rt_floatArrayCls = $rt_arraycls($rt_floatcls),
$rt_doubleArrayCls = $rt_arraycls($rt_doublecls);
java_lang_String.prototype.toString = function() {
    return $rt_ustr(this);
};
java_lang_String.prototype.valueOf = java_lang_String.prototype.toString;
java_lang_Object.prototype.toString = function() {
    return $rt_ustr(java_lang_Object_toString_VHLrpW(this));
};
java_lang_Object.prototype.__teavm_class__ = function() {
    return $dbg_class(this);
};
java_lang_Character_$callClinit();
java_lang_Integer_$callClinit();
java_lang_String_$callClinit();
exports.java_io_Closeable = java_io_Closeable;
exports.java_io_FilterOutputStream__init__gjftmH = java_io_FilterOutputStream__init__gjftmH;
exports.java_io_FilterOutputStream__init__gjftmH$1 = java_io_FilterOutputStream__init__gjftmH$1;
exports.java_io_FilterOutputStream = java_io_FilterOutputStream;
exports.java_io_Flushable = java_io_Flushable;
exports.java_io_OutputStream__init__V = java_io_OutputStream__init__V;
exports.java_io_OutputStream = java_io_OutputStream;
exports.java_io_PrintStream__init__RHOATE = java_io_PrintStream__init__RHOATE;
exports.java_io_PrintStream__init__RHOATE$1 = java_io_PrintStream__init__RHOATE$1;
exports.java_io_PrintStream = java_io_PrintStream;
exports.java_io_Serializable = java_io_Serializable;
exports.java_lang_AbstractStringBuilder__init__V = java_lang_AbstractStringBuilder__init__V;
exports.java_lang_AbstractStringBuilder__init__V$1 = java_lang_AbstractStringBuilder__init__V$1;
exports.java_lang_AbstractStringBuilder__init__VI = java_lang_AbstractStringBuilder__init__VI;
exports.java_lang_AbstractStringBuilder__init__VI$1 = java_lang_AbstractStringBuilder__init__VI$1;
exports.java_lang_AbstractStringBuilder_append_OMqvAE = java_lang_AbstractStringBuilder_append_OMqvAE;
exports.java_lang_AbstractStringBuilder_append_oqxyew = java_lang_AbstractStringBuilder_append_oqxyew;
exports.java_lang_AbstractStringBuilder_append_ylxaCJ = java_lang_AbstractStringBuilder_append_ylxaCJ;
exports.java_lang_AbstractStringBuilder_append_nfyWfb = java_lang_AbstractStringBuilder_append_nfyWfb;
exports.java_lang_AbstractStringBuilder_append_ZIxCSm = java_lang_AbstractStringBuilder_append_ZIxCSm;
exports.java_lang_AbstractStringBuilder_ensureCapacity_VI = java_lang_AbstractStringBuilder_ensureCapacity_VI;
exports.java_lang_AbstractStringBuilder_insert_joXuZN = java_lang_AbstractStringBuilder_insert_joXuZN;
exports.java_lang_AbstractStringBuilder_insert_JzPOxM = java_lang_AbstractStringBuilder_insert_JzPOxM;
exports.java_lang_AbstractStringBuilder_insert_KMHMoz = java_lang_AbstractStringBuilder_insert_KMHMoz;
exports.java_lang_AbstractStringBuilder_insert_hzKion = java_lang_AbstractStringBuilder_insert_hzKion;
exports.java_lang_AbstractStringBuilder_toString_VHLrpW = java_lang_AbstractStringBuilder_toString_VHLrpW;
exports.java_lang_AbstractStringBuilder = java_lang_AbstractStringBuilder;
exports.java_lang_Appendable = java_lang_Appendable;
exports.java_lang_AutoCloseable = java_lang_AutoCloseable;
exports.java_lang_CharSequence = java_lang_CharSequence;
exports.java_lang_Character_forDigit_CII = java_lang_Character_forDigit_CII;
exports.java_lang_Character = java_lang_Character;
exports.java_lang_Character_TYPE = java_lang_Character_TYPE;
exports.java_lang_Class_getClass_LTJNGA = java_lang_Class_getClass_LTJNGA;
exports.java_lang_Class_getComponentType_rQPqgt = java_lang_Class_getComponentType_rQPqgt;
exports.java_lang_Class_getName_VHLrpW = java_lang_Class_getName_VHLrpW;
exports.java_lang_Class_getPlatformClass_BSppjk = java_lang_Class_getPlatformClass_BSppjk;
exports.java_lang_Class = java_lang_Class;
exports.java_lang_ClassCastException = java_lang_ClassCastException;
exports.java_lang_Cloneable = java_lang_Cloneable;
exports.java_lang_Comparable = java_lang_Comparable;
exports.java_lang_Exception__init__V = java_lang_Exception__init__V;
exports.java_lang_Exception__init__V$1 = java_lang_Exception__init__V$1;
exports.java_lang_Exception__init__XjCHVS = java_lang_Exception__init__XjCHVS;
exports.java_lang_Exception__init__XjCHVS$1 = java_lang_Exception__init__XjCHVS$1;
exports.java_lang_Exception = java_lang_Exception;
exports.java_lang_IllegalArgumentException__init__V = java_lang_IllegalArgumentException__init__V;
exports.java_lang_IllegalArgumentException__init__V$1 = java_lang_IllegalArgumentException__init__V$1;
exports.java_lang_IllegalArgumentException__init__XjCHVS = java_lang_IllegalArgumentException__init__XjCHVS;
exports.java_lang_IllegalArgumentException__init__XjCHVS$1 = java_lang_IllegalArgumentException__init__XjCHVS$1;
exports.java_lang_IllegalArgumentException = java_lang_IllegalArgumentException;
exports.java_lang_IndexOutOfBoundsException__init__V = java_lang_IndexOutOfBoundsException__init__V;
exports.java_lang_IndexOutOfBoundsException__init__V$1 = java_lang_IndexOutOfBoundsException__init__V$1;
exports.java_lang_IndexOutOfBoundsException = java_lang_IndexOutOfBoundsException;
exports.java_lang_Integer__init__VI = java_lang_Integer__init__VI;
exports.java_lang_Integer__init__VI$1 = java_lang_Integer__init__VI$1;
exports.java_lang_Integer_hashCode_I = java_lang_Integer_hashCode_I;
exports.java_lang_Integer_hashCode_II = java_lang_Integer_hashCode_II;
exports.java_lang_Integer_numberOfLeadingZeros_II = java_lang_Integer_numberOfLeadingZeros_II;
exports.java_lang_Integer_toHexString_iFmOGb = java_lang_Integer_toHexString_iFmOGb;
exports.java_lang_Integer_valueOf_jxXMoQ = java_lang_Integer_valueOf_jxXMoQ;
exports.java_lang_Integer = java_lang_Integer;
exports.java_lang_Integer_TYPE = java_lang_Integer_TYPE;
exports.java_lang_Iterable = java_lang_Iterable;
exports.java_lang_Math_max_III = java_lang_Math_max_III;
exports.java_lang_Math_min_III = java_lang_Math_min_III;
exports.java_lang_Math = java_lang_Math;
exports.java_lang_NegativeArraySizeException__init__V = java_lang_NegativeArraySizeException__init__V;
exports.java_lang_NegativeArraySizeException__init__V$1 = java_lang_NegativeArraySizeException__init__V$1;
exports.java_lang_NegativeArraySizeException = java_lang_NegativeArraySizeException;
exports.java_lang_NullPointerException__init__V = java_lang_NullPointerException__init__V;
exports.java_lang_NullPointerException__init__V$1 = java_lang_NullPointerException__init__V$1;
exports.java_lang_NullPointerException = java_lang_NullPointerException;
exports.java_lang_Number__init__V = java_lang_Number__init__V;
exports.java_lang_Number = java_lang_Number;
exports.java_lang_Object__init__V = java_lang_Object__init__V;
exports.java_lang_Object__init__V$1 = java_lang_Object__init__V$1;
exports.java_lang_Object_getClass_rQPqgt = java_lang_Object_getClass_rQPqgt;
exports.java_lang_Object_identity_I = java_lang_Object_identity_I;
exports.java_lang_Object_toString_VHLrpW = java_lang_Object_toString_VHLrpW;
exports.java_lang_Object = java_lang_Object;
exports.java_lang_RuntimeException__init__V = java_lang_RuntimeException__init__V;
exports.java_lang_RuntimeException__init__V$1 = java_lang_RuntimeException__init__V$1;
exports.java_lang_RuntimeException__init__XjCHVS = java_lang_RuntimeException__init__XjCHVS;
exports.java_lang_RuntimeException__init__XjCHVS$1 = java_lang_RuntimeException__init__XjCHVS$1;
exports.java_lang_RuntimeException = java_lang_RuntimeException;
exports.java_lang_String__init__V = java_lang_String__init__V;
exports.java_lang_String__init__V$1 = java_lang_String__init__V$1;
exports.java_lang_String__init__V_C = java_lang_String__init__V_C;
exports.java_lang_String__init__V_C$1 = java_lang_String__init__V_C$1;
exports.java_lang_String__init__V_CII = java_lang_String__init__V_CII;
exports.java_lang_String__init__V_CII$1 = java_lang_String__init__V_CII$1;
exports.java_lang_String_charAt_CI = java_lang_String_charAt_CI;
exports.java_lang_String_isEmpty_Z = java_lang_String_isEmpty_Z;
exports.java_lang_String_length_I = java_lang_String_length_I;
exports.java_lang_String_toString_VHLrpW = java_lang_String_toString_VHLrpW;
exports.java_lang_String_valueOf_iFmOGb = java_lang_String_valueOf_iFmOGb;
exports.java_lang_String = java_lang_String;
exports.java_lang_String_CASE_INSENSITIVE_ORDER = java_lang_String_CASE_INSENSITIVE_ORDER;
exports.java_lang_String$_clinit_$lambda$_115_0__init__V = java_lang_String$_clinit_$lambda$_115_0__init__V;
exports.java_lang_String$_clinit_$lambda$_115_0__init__V$1 = java_lang_String$_clinit_$lambda$_115_0__init__V$1;
exports.java_lang_String$_clinit_$lambda$_115_0 = java_lang_String$_clinit_$lambda$_115_0;
exports.java_lang_StringBuilder__init__V = java_lang_StringBuilder__init__V;
exports.java_lang_StringBuilder__init__V$1 = java_lang_StringBuilder__init__V$1;
exports.java_lang_StringBuilder_append_zwKTwE = java_lang_StringBuilder_append_zwKTwE;
exports.java_lang_StringBuilder_append_ZSDQSM = java_lang_StringBuilder_append_ZSDQSM;
exports.java_lang_StringBuilder_append_ZOYxhs = java_lang_StringBuilder_append_ZOYxhs;
exports.java_lang_StringBuilder_append_hrVwXi = java_lang_StringBuilder_append_hrVwXi;
exports.java_lang_StringBuilder_ensureCapacity_VI = java_lang_StringBuilder_ensureCapacity_VI;
exports.java_lang_StringBuilder_insert_joXuZN = java_lang_StringBuilder_insert_joXuZN;
exports.java_lang_StringBuilder_insert_CiShRV = java_lang_StringBuilder_insert_CiShRV;
exports.java_lang_StringBuilder_insert_KMHMoz = java_lang_StringBuilder_insert_KMHMoz;
exports.java_lang_StringBuilder_insert_JDogxs = java_lang_StringBuilder_insert_JDogxs;
exports.java_lang_StringBuilder_insert_hzKion = java_lang_StringBuilder_insert_hzKion;
exports.java_lang_StringBuilder_insert_yVTRbO = java_lang_StringBuilder_insert_yVTRbO;
exports.java_lang_StringBuilder_toString_VHLrpW = java_lang_StringBuilder_toString_VHLrpW;
exports.java_lang_StringBuilder = java_lang_StringBuilder;
exports.java_lang_StringIndexOutOfBoundsException__init__V = java_lang_StringIndexOutOfBoundsException__init__V;
exports.java_lang_StringIndexOutOfBoundsException__init__V$1 = java_lang_StringIndexOutOfBoundsException__init__V$1;
exports.java_lang_StringIndexOutOfBoundsException = java_lang_StringIndexOutOfBoundsException;
exports.java_lang_System_out_JQwxsu = java_lang_System_out_JQwxsu;
exports.java_lang_System = java_lang_System;
exports.java_lang_Throwable_fillInStackTrace_MBBfFS = java_lang_Throwable_fillInStackTrace_MBBfFS;
exports.java_lang_Throwable_getCause_MBBfFS = java_lang_Throwable_getCause_MBBfFS;
exports.java_lang_Throwable_getMessage_VHLrpW = java_lang_Throwable_getMessage_VHLrpW;
exports.java_lang_Throwable = java_lang_Throwable;
exports.java_lang_reflect_AnnotatedElement = java_lang_reflect_AnnotatedElement;
exports.java_lang_reflect_Array_newInstance_AAjNOn = java_lang_reflect_Array_newInstance_AAjNOn;
exports.java_lang_reflect_Array = java_lang_reflect_Array;
exports.java_lang_reflect_Type = java_lang_reflect_Type;
exports.java_nio_charset_Charset = java_nio_charset_Charset;
exports.java_util_AbstractCollection__init__V = java_util_AbstractCollection__init__V;
exports.java_util_AbstractCollection_isEmpty_Z = java_util_AbstractCollection_isEmpty_Z;
exports.java_util_AbstractCollection = java_util_AbstractCollection;
exports.java_util_AbstractList__init__V = java_util_AbstractList__init__V;
exports.java_util_AbstractList_iterator_nRSvFx = java_util_AbstractList_iterator_nRSvFx;
exports.java_util_AbstractList = java_util_AbstractList;
exports.java_util_AbstractList$1__init__tWBmpm = java_util_AbstractList$1__init__tWBmpm;
exports.java_util_AbstractList$1__init__tWBmpm$1 = java_util_AbstractList$1__init__tWBmpm$1;
exports.java_util_AbstractList$1_hasNext_Z = java_util_AbstractList$1_hasNext_Z;
exports.java_util_AbstractList$1_next_yToRiJ = java_util_AbstractList$1_next_yToRiJ;
exports.java_util_AbstractList$1 = java_util_AbstractList$1;
exports.java_util_AbstractMap__init__V = java_util_AbstractMap__init__V;
exports.java_util_AbstractMap = java_util_AbstractMap;
exports.java_util_AbstractSet__init__V = java_util_AbstractSet__init__V;
exports.java_util_AbstractSet = java_util_AbstractSet;
exports.java_util_ArrayList__init__VI = java_util_ArrayList__init__VI;
exports.java_util_ArrayList__init__VI$1 = java_util_ArrayList__init__VI$1;
exports.java_util_ArrayList_add_uKWEwg = java_util_ArrayList_add_uKWEwg;
exports.java_util_ArrayList_ensureCapacity_VI = java_util_ArrayList_ensureCapacity_VI;
exports.java_util_ArrayList_get_UosgRn = java_util_ArrayList_get_UosgRn;
exports.java_util_ArrayList_size_I = java_util_ArrayList_size_I;
exports.java_util_ArrayList = java_util_ArrayList;
exports.java_util_Arrays_copyOf__C_CI = java_util_Arrays_copyOf__C_CI;
exports.java_util_Arrays_copyOf_MqkkEq = java_util_Arrays_copyOf_MqkkEq;
exports.java_util_Arrays_fill_V_CC = java_util_Arrays_fill_V_CC;
exports.java_util_Arrays_fill_TiCZqH = java_util_Arrays_fill_TiCZqH;
exports.java_util_Arrays_hashCode_Xpebqu = java_util_Arrays_hashCode_Xpebqu;
exports.java_util_Arrays = java_util_Arrays;
exports.java_util_Collection = java_util_Collection;
exports.java_util_Comparator = java_util_Comparator;
exports.java_util_ConcurrentModificationException__init__V = java_util_ConcurrentModificationException__init__V;
exports.java_util_ConcurrentModificationException__init__V$1 = java_util_ConcurrentModificationException__init__V$1;
exports.java_util_ConcurrentModificationException = java_util_ConcurrentModificationException;
exports.java_util_HashMap__init__V = java_util_HashMap__init__V;
exports.java_util_HashMap__init__V$1 = java_util_HashMap__init__V$1;
exports.java_util_HashMap__init__VI = java_util_HashMap__init__VI;
exports.java_util_HashMap__init__VI$1 = java_util_HashMap__init__VI$1;
exports.java_util_HashMap__init__VIF = java_util_HashMap__init__VIF;
exports.java_util_HashMap__init__VIF$1 = java_util_HashMap__init__VIF$1;
exports.java_util_HashMap_areEqualKeys_UWKivJ = java_util_HashMap_areEqualKeys_UWKivJ;
exports.java_util_HashMap_containsKey_uKWEwg = java_util_HashMap_containsKey_uKWEwg;
exports.java_util_HashMap_entryByKey_oGTkjE = java_util_HashMap_entryByKey_oGTkjE;
exports.java_util_HashMap_findNonNullKeyEntry_RrVLlf = java_util_HashMap_findNonNullKeyEntry_RrVLlf;
exports.java_util_HashMap_findNullKeyEntry_QqMKmf = java_util_HashMap_findNullKeyEntry_QqMKmf;
exports.java_util_HashMap_get_lVIoyP = java_util_HashMap_get_lVIoyP;
exports.java_util_HashMap_keySet_wfeRzl = java_util_HashMap_keySet_wfeRzl;
exports.java_util_HashMap_newElementArray_HaDQXJ = java_util_HashMap_newElementArray_HaDQXJ;
exports.java_util_HashMap_put_tsMSwf = java_util_HashMap_put_tsMSwf;
exports.java_util_HashMap_rehash_V = java_util_HashMap_rehash_V;
exports.java_util_HashMap_rehash_VI = java_util_HashMap_rehash_VI;
exports.java_util_HashMap = java_util_HashMap;
exports.java_util_HashMap$1__init__WqYpIS = java_util_HashMap$1__init__WqYpIS;
exports.java_util_HashMap$1__init__WqYpIS$1 = java_util_HashMap$1__init__WqYpIS$1;
exports.java_util_HashMap$1_iterator_nRSvFx = java_util_HashMap$1_iterator_nRSvFx;
exports.java_util_HashMap$1 = java_util_HashMap$1;
exports.java_util_HashMap$AbstractMapIterator__init__WqYpIS = java_util_HashMap$AbstractMapIterator__init__WqYpIS;
exports.java_util_HashMap$AbstractMapIterator__init__WqYpIS$1 = java_util_HashMap$AbstractMapIterator__init__WqYpIS$1;
exports.java_util_HashMap$AbstractMapIterator_checkConcurrentMod_V = java_util_HashMap$AbstractMapIterator_checkConcurrentMod_V;
exports.java_util_HashMap$AbstractMapIterator_hasNext_Z = java_util_HashMap$AbstractMapIterator_hasNext_Z;
exports.java_util_HashMap$AbstractMapIterator_makeNext_V = java_util_HashMap$AbstractMapIterator_makeNext_V;
exports.java_util_HashMap$AbstractMapIterator = java_util_HashMap$AbstractMapIterator;
exports.java_util_HashMap$HashEntry__init__moeQBN = java_util_HashMap$HashEntry__init__moeQBN;
exports.java_util_HashMap$HashEntry__init__moeQBN$1 = java_util_HashMap$HashEntry__init__moeQBN$1;
exports.java_util_HashMap$HashEntry = java_util_HashMap$HashEntry;
exports.java_util_HashMap$KeyIterator__init__WqYpIS = java_util_HashMap$KeyIterator__init__WqYpIS;
exports.java_util_HashMap$KeyIterator__init__WqYpIS$1 = java_util_HashMap$KeyIterator__init__WqYpIS$1;
exports.java_util_HashMap$KeyIterator_next_yToRiJ = java_util_HashMap$KeyIterator_next_yToRiJ;
exports.java_util_HashMap$KeyIterator = java_util_HashMap$KeyIterator;
exports.java_util_Iterator = java_util_Iterator;
exports.java_util_List = java_util_List;
exports.java_util_Map_getOrDefault_tsMSwf = java_util_Map_getOrDefault_tsMSwf;
exports.java_util_Map = java_util_Map;
exports.java_util_Map$Entry = java_util_Map$Entry;
exports.java_util_MapEntry__init__PLTLFS = java_util_MapEntry__init__PLTLFS;
exports.java_util_MapEntry__init__PLTLFS$1 = java_util_MapEntry__init__PLTLFS$1;
exports.java_util_MapEntry = java_util_MapEntry;
exports.java_util_NoSuchElementException__init__V = java_util_NoSuchElementException__init__V;
exports.java_util_NoSuchElementException__init__V$1 = java_util_NoSuchElementException__init__V$1;
exports.java_util_NoSuchElementException = java_util_NoSuchElementException;
exports.java_util_Objects_checkFromIndexSize_IIII = java_util_Objects_checkFromIndexSize_IIII;
exports.java_util_Objects_hash_Xpebqu = java_util_Objects_hash_Xpebqu;
exports.java_util_Objects_hashCode_CeygPn = java_util_Objects_hashCode_CeygPn;
exports.java_util_Objects = java_util_Objects;
exports.java_util_RandomAccess = java_util_RandomAccess;
exports.java_util_SequencedCollection = java_util_SequencedCollection;
exports.java_util_Set = java_util_Set;
exports.org_teavm_classlib_impl_IntegerUtil_toUnsignedLogRadixString_KSkSDS = org_teavm_classlib_impl_IntegerUtil_toUnsignedLogRadixString_KSkSDS;
exports.org_teavm_classlib_impl_IntegerUtil = org_teavm_classlib_impl_IntegerUtil;
exports.org_teavm_classlib_impl_console_JSStdoutPrintStream__init__V = org_teavm_classlib_impl_console_JSStdoutPrintStream__init__V;
exports.org_teavm_classlib_impl_console_JSStdoutPrintStream__init__V$1 = org_teavm_classlib_impl_console_JSStdoutPrintStream__init__V$1;
exports.org_teavm_classlib_impl_console_JSStdoutPrintStream_print_XjCHVS = org_teavm_classlib_impl_console_JSStdoutPrintStream_print_XjCHVS;
exports.org_teavm_classlib_impl_console_JSStdoutPrintStream = org_teavm_classlib_impl_console_JSStdoutPrintStream;
exports.org_teavm_classlib_impl_console_JsConsolePrintStream__init__V = org_teavm_classlib_impl_console_JsConsolePrintStream__init__V;
exports.org_teavm_classlib_impl_console_JsConsolePrintStream_println_XjCHVS = org_teavm_classlib_impl_console_JsConsolePrintStream_println_XjCHVS;
exports.org_teavm_classlib_impl_console_JsConsolePrintStream = org_teavm_classlib_impl_console_JsConsolePrintStream;
exports.org_teavm_jso_impl_JS = org_teavm_jso_impl_JS;
exports.org_teavm_platform_Platform_getArrayItem_PKtewy = org_teavm_platform_Platform_getArrayItem_PKtewy;
exports.org_teavm_platform_Platform_getName_xWEGZR = org_teavm_platform_Platform_getName_xWEGZR;
exports.org_teavm_platform_Platform = org_teavm_platform_Platform;
exports.org_teavm_runtime = org_teavm_runtime;
exports.$rt_numberConversionView = $rt_numberConversionView;
exports.Long_fromNumber = Long_fromNumber;
exports.$rt_createcls = $rt_createcls;
exports.Long_xor = Long_xor;
exports.$rt_createShortArrayFromData = $rt_createShortArrayFromData;
exports.$rt_checkLowerBound = $rt_checkLowerBound;
exports.$rt_createBooleanMultiArray = $rt_createBooleanMultiArray;
exports.$rt_getThread = $rt_getThread;
exports.Long_lo = Long_lo;
exports.$rt_startThread = $rt_startThread;
exports.Long_lt = Long_lt;
exports.$rt_substringSink = $rt_substringSink;
exports.$rt_exception = $rt_exception;
exports.Long_shru = Long_shru;
exports.$rt_createBooleanArray = $rt_createBooleanArray;
exports.$rt_javaExceptionProp = $rt_javaExceptionProp;
exports.$rt_createIntArray = $rt_createIntArray;
exports.$rt_fillStack = $rt_fillStack;
exports.$rt_throwCCE = $rt_throwCCE;
exports.$rt_createIntMultiArray = $rt_createIntMultiArray;
exports.$rt_javaException = $rt_javaException;
exports.$rt_resuming = $rt_resuming;
exports.$rt_compare = $rt_compare;
exports.$rt_callWithReceiver = $rt_callWithReceiver;
exports.$rt_createMultiArray = $rt_createMultiArray;
exports.Long_MAX_NORMAL = Long_MAX_NORMAL;
exports.$rt_createCharArray = $rt_createCharArray;
exports.$rt_createOutputFunction = $rt_createOutputFunction;
exports.$rt_numberConversionFloatArray = $rt_numberConversionFloatArray;
exports.$rt_nullCheck = $rt_nullCheck;
exports.$rt_isAssignable = $rt_isAssignable;
exports.$rt_throw = $rt_throw;
exports.$rt_throwCCEIfFalse = $rt_throwCCEIfFalse;
exports.$rt_createDoubleArray = $rt_createDoubleArray;
exports.Long_sub = Long_sub;
exports.$rt_mainStarter = $rt_mainStarter;
exports.$rt_equalDoubles = $rt_equalDoubles;
exports.$rt_skip = $rt_skip;
exports.$rt_floatToRawIntBits = $rt_floatToRawIntBits;
exports.$rt_booleancls = $rt_booleancls;
exports.$rt_createCharMultiArray = $rt_createCharMultiArray;
exports.$rt_wrapException = $rt_wrapException;
exports.$rt_createBooleanArrayFromData = $rt_createBooleanArrayFromData;
exports.Long_eq = Long_eq;
exports.$rt_createByteArrayFromData = $rt_createByteArrayFromData;
exports.$rt_umod = $rt_umod;
exports.$rt_wrapArray = $rt_wrapArray;
exports.$rt_createByteMultiArray = $rt_createByteMultiArray;
exports.$rt_seed = $rt_seed;
exports.Long_ne = Long_ne;
exports.$rt_suspending = $rt_suspending;
exports.$rt_ustr = $rt_ustr;
exports.Long_add = Long_add;
exports.$rt_metadata = $rt_metadata;
exports.$rt_charcls = $rt_charcls;
exports.$rt_fullArrayToString = $rt_fullArrayToString;
exports.$rt_floatcls = $rt_floatcls;
exports.$rt_stringClassInit = $rt_stringClassInit;
exports.$rt_throwableCause = $rt_throwableCause;
exports.$rt_createMultiArrayImpl = $rt_createMultiArrayImpl;
exports.$rt_checkUpperBound = $rt_checkUpperBound;
exports.Long_rem = Long_rem;
exports.Long_div = Long_div;
exports.$rt_createShortArray = $rt_createShortArray;
exports.Long_neg = Long_neg;
exports.$rt_createLongArrayFromData = $rt_createLongArrayFromData;
exports.$rt_doubleArrayCls = $rt_doubleArrayCls;
exports.Long_toNumber = Long_toNumber;
exports.Long_ge = Long_ge;
exports.$rt_instanceOfOrNull = $rt_instanceOfOrNull;
exports.$rt_intcls = $rt_intcls;
exports.Long_fromInt = Long_fromInt;
exports.Long_ZERO = Long_ZERO;
exports.$rt_createFloatArray = $rt_createFloatArray;
exports.$rt_stringToCharArray = $rt_stringToCharArray;
exports.$rt_wrapFunction0 = $rt_wrapFunction0;
exports.$rt_createLongArray = $rt_createLongArray;
exports.$rt_wrapFunction1 = $rt_wrapFunction1;
exports.$rt_wrapFunction2 = $rt_wrapFunction2;
exports.Long_or = Long_or;
exports.$rt_stringPool = $rt_stringPool;
exports.$rt_wrapFunction3 = $rt_wrapFunction3;
exports.$rt_wrapFunction4 = $rt_wrapFunction4;
exports.$rt_numberConversionIntArray = $rt_numberConversionIntArray;
exports.$rt_stecls = $rt_stecls;
exports.$rt_putStdout = $rt_putStdout;
exports.$rt_apply_topLevel = $rt_apply_topLevel;
exports.Long_create = Long_create;
exports.$rt_longcls = $rt_longcls;
exports.Long_gt = Long_gt;
exports.$rt_stringPool_instance = $rt_stringPool_instance;
exports.$rt_fastStringToCharArray = $rt_fastStringToCharArray;
exports.$rt_putStderr = $rt_putStderr;
exports.$rt_createByteArray = $rt_createByteArray;
exports.Long_compare = Long_compare;
exports.$rt_imul = $rt_imul;
exports.$rt_doublecls = $rt_doublecls;
exports.$rt_ucmp = $rt_ucmp;
exports.Long_inc = Long_inc;
exports.Long_hi = Long_hi;
exports.$rt_arraycls = $rt_arraycls;
exports.$rt_objcls = $rt_objcls;
exports.$rt_numberConversionDoubleArray = $rt_numberConversionDoubleArray;
exports.Long_not = Long_not;
exports.$rt_charArrayToString = $rt_charArrayToString;
exports.Long_and = Long_and;
exports.$rt_longBitsToDouble = $rt_longBitsToDouble;
exports.$rt_doubleToRawLongBits = $rt_doubleToRawLongBits;
exports.$rt_createFloatArrayFromData = $rt_createFloatArrayFromData;
exports.Long_mul = Long_mul;
exports.$rt_wrapFunctionVararg = $rt_wrapFunctionVararg;
exports.$rt_str = $rt_str;
exports.Long_ucompare = Long_ucompare;
exports.Long_shr = Long_shr;
exports.$rt_udiv = $rt_udiv;
exports.$rt_createIntArrayFromData = $rt_createIntArrayFromData;
exports.$rt_primitiveArrayCount = $rt_primitiveArrayCount;
exports.$rt_createDoubleMultiArray = $rt_createDoubleMultiArray;
exports.$rt_nextId = $rt_nextId;
exports.$rt_throwableMessage = $rt_throwableMessage;
exports.$rt_packageData = $rt_packageData;
exports.$rt_nativeThread = $rt_nativeThread;
exports.$rt_cls = $rt_cls;
exports.Long_udiv = Long_udiv;
exports.Long_shl = Long_shl;
exports.$rt_createFloatMultiArray = $rt_createFloatMultiArray;
exports.$rt_createCharArrayFromData = $rt_createCharArrayFromData;
exports.$rt_booleanArrayCls = $rt_booleanArrayCls;
exports.$rt_substring = $rt_substring;
exports.$rt_longArrayCls = $rt_longArrayCls;
exports.$rt_createArray = $rt_createArray;
exports.$rt_apply = $rt_apply;
exports.$rt_classWithoutFields = $rt_classWithoutFields;
exports.$rt_intern = $rt_intern;
exports.$rt_createStackElement = $rt_createStackElement;
exports.$rt_createUnfilledArray = $rt_createUnfilledArray;
exports.$rt_createShortMultiArray = $rt_createShortMultiArray;
exports.$rt_createPrimitiveCls = $rt_createPrimitiveCls;
exports.$rt_charArrayCls = $rt_charArrayCls;
exports.$rt_setStack = $rt_setStack;
exports.$rt_createLongMultiArray = $rt_createLongMultiArray;
exports.$rt_throwAIOOBE = $rt_throwAIOOBE;
exports.$rt_voidcls = $rt_voidcls;
exports.$rt_intArrayCls = $rt_intArrayCls;
exports.$rt_bytecls = $rt_bytecls;
exports.$rt_shortArrayCls = $rt_shortArrayCls;
exports.$rt_createException = $rt_createException;
exports.$rt_eraseClinit = $rt_eraseClinit;
exports.Long_urem = Long_urem;
exports.$rt_concatArrays = $rt_concatArrays;
exports.$rt_setThread = $rt_setThread;
exports.Long_dec = Long_dec;
exports.$rt_packages = $rt_packages;
exports.$rt_castToInterface = $rt_castToInterface;
exports.$rt_castToClass = $rt_castToClass;
exports.$rt_numberConversionBuffer = $rt_numberConversionBuffer;
exports.$rt_invalidPointer = $rt_invalidPointer;
exports.$rt_createDoubleArrayFromData = $rt_createDoubleArrayFromData;
exports.$rt_s = $rt_s;
exports.$rt_isInstance = $rt_isInstance;
exports.$rt_byteArrayCls = $rt_byteArrayCls;
exports.$rt_shortcls = $rt_shortcls;
exports.$rt_floatArrayCls = $rt_floatArrayCls;
exports.$rt_jsException = $rt_jsException;
exports.$rt_checkBounds = $rt_checkBounds;
exports.$rt_intBitsToFloat = $rt_intBitsToFloat;
exports.$rt_threadStarter = $rt_threadStarter;
exports.Long_le = Long_le;
