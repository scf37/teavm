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
$rt_mainStarter = f => (args, callback) => {
    $rt_init_metadata();
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
$rt_cls = cls => jl_Class_getClass_LTJNGA(cls),
rt_objcls_gcc_fix = jl_Object,
$rt_objcls = () => rt_objcls_gcc_fix,
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
$rt_intcls = $rt_createPrimitiveCls("int", "I"),
$rt_voidcls = $rt_createPrimitiveCls("void", "V"),
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
$rt_createArray = (cls, sz) => {
    let data = new Array(sz);
    data.fill(null);
    return new ($rt_arraycls(cls))(data);
};
if (typeof BigInt64Array !== 'function') {
} else {
}
let $rt_createCharArray = sz => new $rt_charArrayCls(new Uint16Array(sz)),
$rt_createIntArray = sz => new $rt_intArrayCls(new Int32Array(sz)),
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
$rt_str = str => str === null ? null : jl_String__init__HFyQDR$1(str),
$rt_ustr = str => str === null ? null : str.$nativeString,
$rt_stringClassInit = () => jl_String_$callClinit(),
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
$rt_throwableMessage = t => jl_Throwable_getMessage_VHLrpW(t),
$rt_throwableCause = t => jl_Throwable_getCause_MBBfFS(t),
$rt_stecls = () => jl_StackTraceElement,
$rt_createStackElement = (className, methodName, fileName, lineNumber) => {
    {
        return null;
    }
},
$rt_setStack = (e, stack) => {
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
$rt_packageData = null,
$rt_metadataQueue = [],
$rt_packages = data => {
    $rt_metadataQueue.push(() => $rt_packages1(data));
},
$rt_metadata = data => {
    $rt_metadataQueue.push(() => $rt_metadata1(data));
},
$rt_init_metadata = () => {
    $rt_init_metadata = () => {
    };
    for (let i = 0;i < $rt_metadataQueue.length;++i) {
        $rt_metadataQueue[i]();
    }
    $rt_metadataQueue = [];
},
$rt_packages1 = data => {
    let i = 0;
    let packages = new Array(data.length);
    for (let j = 0;j < data.length;++j) {
        let prefixIndex = data[i++];
        let prefix = prefixIndex >= 0 ? packages[prefixIndex] : "";
        packages[j] = prefix + data[i++] + ".";
    }
    $rt_packageData = packages;
},
$rt_metadata1 = data => {
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
};
function jl_Object() {
    this.$id$ = 0;
}
let jl_Object__init__V = $this => {
    $rt_init_metadata();
},
jl_Object__init__V$1 = () => {
    let var_0 = new jl_Object();
    jl_Object__init__V(var_0);
    return var_0;
},
jl_Object_getClass_rQPqgt = $this => {
    return jl_Class_getClass_LTJNGA($this.constructor);
},
jl_Object_toString_VHLrpW = $this => {
    let var$1, var$2, var$3;
    var$1 = jl_Class_getName_VHLrpW(jl_Object_getClass_rQPqgt($this));
    var$2 = jl_Integer_toHexString_iFmOGb(jl_Object_identity_I($this));
    var$3 = jl_StringBuilder__init__V$1();
    jl_StringBuilder_append_ZOYxhs(jl_StringBuilder_append_zwKTwE(jl_StringBuilder_append_ZOYxhs(var$3, var$1), 64), var$2);
    return jl_StringBuilder_toString_VHLrpW(var$3);
},
jl_Object_identity_I = $this => {
    let $platformThis;
    $platformThis = $this;
    if (!$platformThis.$id$)
        $platformThis.$id$ = $rt_nextId();
    return $this.$id$;
},
jl_AutoCloseable = $rt_classWithoutFields(0),
ji_Closeable = $rt_classWithoutFields(0),
ji_Flushable = $rt_classWithoutFields(0),
ji_OutputStream = $rt_classWithoutFields(),
ji_OutputStream__init__V = $this => {
    $rt_init_metadata();
    jl_Object__init__V($this);
};
function ji_FilterOutputStream() {
    ji_OutputStream.call(this);
    this.$out = null;
}
let ji_FilterOutputStream__init__gjftmH = ($this, $out) => {
    $rt_init_metadata();
    ji_OutputStream__init__V($this);
    $this.$out = $out;
},
ji_FilterOutputStream__init__gjftmH$1 = var_0 => {
    let var_1 = new ji_FilterOutputStream();
    ji_FilterOutputStream__init__gjftmH(var_1, var_0);
    return var_1;
},
jl_Appendable = $rt_classWithoutFields(0);
function ji_PrintStream() {
    let a = this; ji_FilterOutputStream.call(a);
    a.$autoFlush = 0;
    a.$sb = null;
    a.$buffer0 = null;
    a.$charset = null;
}
let ji_PrintStream__init__RHOATE = ($this, $out, $autoFlush, $charset) => {
    $rt_init_metadata();
    ji_FilterOutputStream__init__gjftmH($this, $out);
    $this.$sb = jl_StringBuilder__init__V$1();
    $this.$buffer0 = $rt_createCharArray(32);
    $this.$autoFlush = $autoFlush;
    $this.$charset = $charset;
},
ji_PrintStream__init__RHOATE$1 = (var_0, var_1, var_2) => {
    let var_3 = new ji_PrintStream();
    ji_PrintStream__init__RHOATE(var_3, var_0, var_1, var_2);
    return var_3;
},
ji_Serializable = $rt_classWithoutFields(0),
jl_CharSequence = $rt_classWithoutFields(0);
function jl_AbstractStringBuilder() {
    let a = this; jl_Object.call(a);
    a.$buffer = null;
    a.$length = 0;
}
let jl_AbstractStringBuilder__init__V = $this => {
    $rt_init_metadata();
    jl_AbstractStringBuilder__init__VI($this, 16);
},
jl_AbstractStringBuilder__init__V$1 = () => {
    let var_0 = new jl_AbstractStringBuilder();
    jl_AbstractStringBuilder__init__V(var_0);
    return var_0;
},
jl_AbstractStringBuilder__init__VI = ($this, $capacity) => {
    $rt_init_metadata();
    jl_Object__init__V($this);
    $this.$buffer = $rt_createCharArray($capacity);
},
jl_AbstractStringBuilder__init__VI$1 = var_0 => {
    let var_1 = new jl_AbstractStringBuilder();
    jl_AbstractStringBuilder__init__VI(var_1, var_0);
    return var_1;
},
jl_AbstractStringBuilder_append_nfyWfb = ($this, $obj) => {
    return $this.$insert_KMHMoz($this.$length, $obj);
},
jl_AbstractStringBuilder_insert_hzKion = ($this, $index, $string) => {
    let $i, var$4, var$5;
    if ($index >= 0 && $index <= $this.$length) {
        if ($string === null)
            $string = $rt_s(0);
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
    $rt_throw(jl_StringIndexOutOfBoundsException__init__V$1());
},
jl_AbstractStringBuilder_append_oqxyew = ($this, $value) => {
    return $this.$append_ylxaCJ($value, 10);
},
jl_AbstractStringBuilder_append_ylxaCJ = ($this, $value, $radix) => {
    return $this.$insert_JzPOxM($this.$length, $value, $radix);
},
jl_AbstractStringBuilder_insert_JzPOxM = ($this, $target, $value, $radix) => {
    let $positive, var$5, var$6, $pos, $sz, $posLimit, var$10, var$11;
    $positive = 1;
    if ($value < 0) {
        $positive = 0;
        $value =  -$value | 0;
    }
    a: {
        if ($rt_ucmp($value, $radix) < 0) {
            if ($positive)
                jl_AbstractStringBuilder_insertSpace_VII($this, $target, $target + 1 | 0);
            else {
                jl_AbstractStringBuilder_insertSpace_VII($this, $target, $target + 2 | 0);
                var$5 = $this.$buffer.data;
                var$6 = $target + 1 | 0;
                var$5[$target] = 45;
                $target = var$6;
            }
            $this.$buffer.data[$target] = jl_Character_forDigit_CII($value, $radix);
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
            jl_AbstractStringBuilder_insertSpace_VII($this, $target, $target + $sz | 0);
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
                var$5[var$11] = jl_Character_forDigit_CII($rt_udiv($value, var$10), $radix);
                $value = $rt_umod($value, var$10);
                var$10 = $rt_udiv(var$10, $radix);
                var$11 = var$6;
            }
        }
    }
    return $this;
},
jl_AbstractStringBuilder_append_OMqvAE = ($this, $c) => {
    return $this.$insert_joXuZN($this.$length, $c);
},
jl_AbstractStringBuilder_insert_joXuZN = ($this, $index, $c) => {
    jl_AbstractStringBuilder_insertSpace_VII($this, $index, $index + 1 | 0);
    $this.$buffer.data[$index] = $c;
    return $this;
},
jl_AbstractStringBuilder_insert_KMHMoz = ($this, $index, $obj) => {
    return $this.$insert_hzKion($index, $obj === null ? $rt_s(0) : $obj.$toString_VHLrpW());
},
jl_AbstractStringBuilder_ensureCapacity_VI = ($this, $capacity) => {
    let $newLength;
    if ($this.$buffer.data.length >= $capacity)
        return;
    $newLength = $this.$buffer.data.length >= 1073741823 ? 2147483647 : jl_Math_max_III($capacity, jl_Math_max_III($this.$buffer.data.length * 2 | 0, 5));
    $this.$buffer = ju_Arrays_copyOf__C_CI($this.$buffer, $newLength);
},
jl_AbstractStringBuilder_toString_VHLrpW = $this => {
    return jl_String__init__V_CII$1($this.$buffer, 0, $this.$length);
},
jl_AbstractStringBuilder_insertSpace_VII = ($this, $start, $end) => {
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
jl_Comparable = $rt_classWithoutFields(0);
function jl_Boolean() {
    jl_Object.call(this);
    this.$value1 = 0;
}
let jl_Boolean_TRUE = null;
function jl_Boolean_TRUE$get_BuxLVW() { $rt_init_metadata(); jl_Boolean_$callClinit();  return jl_Boolean_TRUE; }
function jl_Boolean_TRUE$set_xmeeTf(value) { $rt_init_metadata(); jl_Boolean_$callClinit(); jl_Boolean_TRUE = value; }
let jl_Boolean_FALSE = null;
function jl_Boolean_FALSE$get_BuxLVW() { $rt_init_metadata(); jl_Boolean_$callClinit();  return jl_Boolean_FALSE; }
function jl_Boolean_FALSE$set_xmeeTf(value) { $rt_init_metadata(); jl_Boolean_$callClinit(); jl_Boolean_FALSE = value; }
let jl_Boolean_TYPE = null;
function jl_Boolean_TYPE$get_rQPqgt() { $rt_init_metadata(); jl_Boolean_$callClinit();  return jl_Boolean_TYPE; }
function jl_Boolean_TYPE$set_GfbAYs(value) { $rt_init_metadata(); jl_Boolean_$callClinit(); jl_Boolean_TYPE = value; }
let jl_Boolean_$callClinit = () => {
    jl_Boolean_$callClinit = $rt_eraseClinit(jl_Boolean);
    jl_Boolean__clinit__V();
},
jl_Boolean__init__VZ = ($this, $value) => {
    $rt_init_metadata();
    jl_Boolean_$callClinit();
    jl_Object__init__V($this);
    $this.$value1 = $value;
},
jl_Boolean__init__VZ$1 = var_0 => {
    let var_1 = new jl_Boolean();
    jl_Boolean__init__VZ(var_1, var_0);
    return var_1;
},
jl_Boolean_toString_adrUOL = $value => {
    $rt_init_metadata();
    jl_Boolean_$callClinit();
    return !$value ? $rt_s(1) : $rt_s(2);
},
jl_Boolean__clinit__V = () => {
    jl_Boolean_TRUE$set_xmeeTf(jl_Boolean__init__VZ$1(1));
    jl_Boolean_FALSE$set_xmeeTf(jl_Boolean__init__VZ$1(0));
    jl_Boolean_TYPE$set_GfbAYs($rt_cls($rt_booleancls));
},
jl_Character = $rt_classWithoutFields(),
jl_Character_TYPE = null;
function jl_Character_TYPE$get_rQPqgt() { $rt_init_metadata(); jl_Character_$callClinit();  return jl_Character_TYPE; }
function jl_Character_TYPE$set_GfbAYs(value) { $rt_init_metadata(); jl_Character_$callClinit(); jl_Character_TYPE = value; }
let jl_Character_lowerCaseMapping = null;
function jl_Character_lowerCaseMapping$get_RZKDDF() { $rt_init_metadata(); jl_Character_$callClinit();  return jl_Character_lowerCaseMapping; }
function jl_Character_lowerCaseMapping$set_ZUCuEm(value) { $rt_init_metadata(); jl_Character_$callClinit(); jl_Character_lowerCaseMapping = value; }
let jl_Character_characterCache = null;
function jl_Character_characterCache$get_jBueGa() { $rt_init_metadata(); jl_Character_$callClinit();  return jl_Character_characterCache; }
function jl_Character_characterCache$set_waRJaZ(value) { $rt_init_metadata(); jl_Character_$callClinit(); jl_Character_characterCache = value; }
let jl_Character_$$metadata$$0 = null;
function jl_Character_$$metadata$$0$get_WDWuRL() { $rt_init_metadata(); jl_Character_$callClinit();  return jl_Character_$$metadata$$0; }
function jl_Character_$$metadata$$0$set_tTBCfR(value) { $rt_init_metadata(); jl_Character_$callClinit(); jl_Character_$$metadata$$0 = value; }
let jl_Character_$callClinit = () => {
    jl_Character_$callClinit = $rt_eraseClinit(jl_Character);
    jl_Character__clinit__V();
},
jl_Character_toLowerCase_CC = $ch => {
    $rt_init_metadata();
    jl_Character_$callClinit();
    return jl_Character_toLowerCase_II($ch) & 65535;
},
jl_Character_toLowerCase_II = $ch => {
    $rt_init_metadata();
    jl_Character_$callClinit();
    return jl_Character_mapChar_vlkZUR(jl_Character_getLowerCaseMapping_RZKDDF(), $ch);
},
jl_Character_getLowerCaseMapping_RZKDDF = () => {
    let var$1;
    $rt_init_metadata();
    jl_Character_$callClinit();
    if (jl_Character_lowerCaseMapping$get_RZKDDF() === null) {
        var$1 = otciu_UnicodeHelper_decodeCaseMapping_JHgFIf(((jl_Character_acquireLowerCaseMapping_WDWuRL()).value !== null ? $rt_str((jl_Character_acquireLowerCaseMapping_WDWuRL()).value) : null));
        jl_Character_lowerCaseMapping$set_ZUCuEm(otciu_UnicodeHelper_createCharMapping_uLlFHT(var$1));
    }
    return jl_Character_lowerCaseMapping$get_RZKDDF();
},
jl_Character_acquireLowerCaseMapping_WDWuRL = () => {
    $rt_init_metadata();
    jl_Character_$callClinit();
    if (jl_Character_$$metadata$$0$get_WDWuRL() === null)
        jl_Character_$$metadata$$0$set_tTBCfR(jl_Character_acquireLowerCaseMapping$$create_WDWuRL());
    return jl_Character_$$metadata$$0$get_WDWuRL();
},
jl_Character_mapChar_vlkZUR = ($table, $codePoint) => {
    let $binSearchTable, $index, var$5, var$6;
    $rt_init_metadata();
    jl_Character_$callClinit();
    if ($codePoint < $table.$fastTable.data.length)
        return $codePoint + $table.$fastTable.data[$codePoint] | 0;
    $binSearchTable = $table.$binarySearchTable;
    $index = jl_Character_binarySearchTable_I_II($binSearchTable, $codePoint);
    if ($index >= 0) {
        var$5 = $binSearchTable.data;
        var$6 = $index * 2 | 0;
        if (var$6 < var$5.length)
            return $codePoint + var$5[var$6 + 1 | 0] | 0;
    }
    return 0;
},
jl_Character_binarySearchTable_I_II = ($data, $key) => {
    let var$3, $l, $u, $i, $e, var$8;
    $rt_init_metadata();
    jl_Character_$callClinit();
    var$3 = $data.data;
    $l = 0;
    $u = (var$3.length / 2 | 0) - 1 | 0;
    while (true) {
        $i = ($l + $u | 0) / 2 | 0;
        $e = var$3[$i * 2 | 0];
        var$8 = $rt_compare($e, $key);
        if (!var$8)
            break;
        if (var$8 <= 0) {
            $l = $i + 1 | 0;
            if ($l > $u)
                return $i;
        } else {
            $u = $i - 1 | 0;
            if ($u < $l)
                return $u;
        }
    }
    return $i;
},
jl_Character_forDigit_CII = ($digit, $radix) => {
    $rt_init_metadata();
    jl_Character_$callClinit();
    if ($radix >= 2 && $radix <= 36 && $digit >= 0 && $digit < $radix)
        return $digit < 10 ? (48 + $digit | 0) & 65535 : ((97 + $digit | 0) - 10 | 0) & 65535;
    return 0;
},
jl_Character__clinit__V = () => {
    jl_Character_TYPE$set_GfbAYs($rt_cls($rt_charcls));
    jl_Character_characterCache$set_waRJaZ($rt_createArray(jl_Character, 128));
},
jl_Character_acquireLowerCaseMapping$$create_WDWuRL = () => {
    return {"value" : "TW  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
    + "%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
    + "# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 a$#%# -mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%"
    + "# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
    + "#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%"
    + "# #%# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# #$$r#%# \'%# +%# #%# #%# #P6rM \'%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# .\'F#S HB#F#b o@5F#b Jo=N#f "};
},
jlr_AnnotatedElement = $rt_classWithoutFields(0),
jlr_Type = $rt_classWithoutFields(0);
function jl_Class() {
    let a = this; jl_Object.call(a);
    a.$name = null;
    a.$platformClass = null;
}
let jl_Class__init__YHHWXM = ($this, $platformClass) => {
    let var$2;
    $rt_init_metadata();
    jl_Object__init__V($this);
    $this.$platformClass = $platformClass;
    var$2 = $this;
    $platformClass.classObject = var$2;
},
jl_Class__init__YHHWXM$1 = var_0 => {
    let var_1 = new jl_Class();
    jl_Class__init__YHHWXM(var_1, var_0);
    return var_1;
},
jl_Class_getClass_LTJNGA = $cls => {
    let $result;
    $rt_init_metadata();
    if ($cls === null)
        return null;
    $result = $cls.classObject;
    if ($result === null)
        $result = jl_Class__init__YHHWXM$1($cls);
    return $result;
},
jl_Class_getPlatformClass_BSppjk = $this => {
    return $this.$platformClass;
},
jl_Class_getName_VHLrpW = $this => {
    if ($this.$name === null)
        $this.$name = otp_Platform_getName_xWEGZR($this.$platformClass);
    return $this.$name;
},
jl_Class_getComponentType_rQPqgt = $this => {
    return jl_Class_getClass_LTJNGA(otp_Platform_getArrayItem_PKtewy($this.$platformClass));
};
function jl_Throwable() {
    let a = this; jl_Object.call(a);
    a.$message = null;
    a.$cause = null;
    a.$suppressionEnabled = 0;
    a.$writableStackTrace = 0;
}
let jl_Throwable__init__V = $this => {
    $rt_init_metadata();
    $this.$suppressionEnabled = 1;
    $this.$writableStackTrace = 1;
    $this.$fillInStackTrace_MBBfFS();
},
jl_Throwable__init__V$1 = () => {
    let var_0 = new jl_Throwable();
    jl_Throwable__init__V(var_0);
    return var_0;
},
jl_Throwable__init__XjCHVS = ($this, $message) => {
    $rt_init_metadata();
    $this.$suppressionEnabled = 1;
    $this.$writableStackTrace = 1;
    $this.$fillInStackTrace_MBBfFS();
    $this.$message = $message;
},
jl_Throwable__init__XjCHVS$1 = var_0 => {
    let var_1 = new jl_Throwable();
    jl_Throwable__init__XjCHVS(var_1, var_0);
    return var_1;
},
jl_Throwable_fillInStackTrace_MBBfFS = $this => {
    return $this;
},
jl_Throwable_getMessage_VHLrpW = $this => {
    return $this.$message;
},
jl_Throwable_getCause_MBBfFS = $this => {
    return $this.$cause === $this ? null : $this.$cause;
},
jl_Exception = $rt_classWithoutFields(jl_Throwable),
jl_Exception__init__V = $this => {
    $rt_init_metadata();
    jl_Throwable__init__V($this);
},
jl_Exception__init__V$1 = () => {
    let var_0 = new jl_Exception();
    jl_Exception__init__V(var_0);
    return var_0;
},
jl_Exception__init__XjCHVS = ($this, $message) => {
    $rt_init_metadata();
    jl_Throwable__init__XjCHVS($this, $message);
},
jl_Exception__init__XjCHVS$1 = var_0 => {
    let var_1 = new jl_Exception();
    jl_Exception__init__XjCHVS(var_1, var_0);
    return var_1;
},
jl_RuntimeException = $rt_classWithoutFields(jl_Exception),
jl_RuntimeException__init__V = $this => {
    $rt_init_metadata();
    jl_Exception__init__V($this);
},
jl_RuntimeException__init__V$1 = () => {
    let var_0 = new jl_RuntimeException();
    jl_RuntimeException__init__V(var_0);
    return var_0;
},
jl_RuntimeException__init__XjCHVS = ($this, $message) => {
    $rt_init_metadata();
    jl_Exception__init__XjCHVS($this, $message);
},
jl_RuntimeException__init__XjCHVS$1 = var_0 => {
    let var_1 = new jl_RuntimeException();
    jl_RuntimeException__init__XjCHVS(var_1, var_0);
    return var_1;
},
jl_ClassCastException = $rt_classWithoutFields(jl_RuntimeException),
jl_Cloneable = $rt_classWithoutFields(0),
jl_IllegalArgumentException = $rt_classWithoutFields(jl_RuntimeException),
jl_IllegalArgumentException__init__V = $this => {
    $rt_init_metadata();
    jl_RuntimeException__init__V($this);
},
jl_IllegalArgumentException__init__V$1 = () => {
    let var_0 = new jl_IllegalArgumentException();
    jl_IllegalArgumentException__init__V(var_0);
    return var_0;
},
jl_IndexOutOfBoundsException = $rt_classWithoutFields(jl_RuntimeException),
jl_IndexOutOfBoundsException__init__V = $this => {
    $rt_init_metadata();
    jl_RuntimeException__init__V($this);
},
jl_IndexOutOfBoundsException__init__V$1 = () => {
    let var_0 = new jl_IndexOutOfBoundsException();
    jl_IndexOutOfBoundsException__init__V(var_0);
    return var_0;
},
jl_Number = $rt_classWithoutFields(),
jl_Number__init__V = $this => {
    $rt_init_metadata();
    jl_Object__init__V($this);
};
function jl_Integer() {
    jl_Number.call(this);
    this.$value0 = 0;
}
let jl_Integer_TYPE = null;
function jl_Integer_TYPE$get_rQPqgt() { $rt_init_metadata(); jl_Integer_$callClinit();  return jl_Integer_TYPE; }
function jl_Integer_TYPE$set_GfbAYs(value) { $rt_init_metadata(); jl_Integer_$callClinit(); jl_Integer_TYPE = value; }
let jl_Integer_integerCache = null;
function jl_Integer_integerCache$get_JiUhVo() { $rt_init_metadata(); jl_Integer_$callClinit();  return jl_Integer_integerCache; }
function jl_Integer_integerCache$set_KsSsFz(value) { $rt_init_metadata(); jl_Integer_$callClinit(); jl_Integer_integerCache = value; }
let jl_Integer_$callClinit = () => {
    jl_Integer_$callClinit = $rt_eraseClinit(jl_Integer);
    jl_Integer__clinit__V();
},
jl_Integer__init__VI = ($this, $value) => {
    $rt_init_metadata();
    jl_Integer_$callClinit();
    jl_Number__init__V($this);
    $this.$value0 = $value;
},
jl_Integer__init__VI$1 = var_0 => {
    let var_1 = new jl_Integer();
    jl_Integer__init__VI(var_1, var_0);
    return var_1;
},
jl_Integer_toString_KSkSDS = ($i, $radix) => {
    $rt_init_metadata();
    jl_Integer_$callClinit();
    if (!($radix >= 2 && $radix <= 36))
        $radix = 10;
    return ((jl_AbstractStringBuilder__init__VI$1(20)).$append_ylxaCJ($i, $radix)).$toString_VHLrpW();
},
jl_Integer_toHexString_iFmOGb = $i => {
    $rt_init_metadata();
    jl_Integer_$callClinit();
    return otci_IntegerUtil_toUnsignedLogRadixString_KSkSDS($i, 4);
},
jl_Integer_toString_iFmOGb = $i => {
    $rt_init_metadata();
    jl_Integer_$callClinit();
    return jl_Integer_toString_KSkSDS($i, 10);
},
jl_Integer_valueOf_jxXMoQ = $i => {
    $rt_init_metadata();
    jl_Integer_$callClinit();
    if ($i >= (-128) && $i <= 127) {
        jl_Integer_ensureIntegerCache_V();
        return (jl_Integer_integerCache$get_JiUhVo()).data[$i + 128 | 0];
    }
    return jl_Integer__init__VI$1($i);
},
jl_Integer_ensureIntegerCache_V = () => {
    let $j;
    $rt_init_metadata();
    jl_Integer_$callClinit();
    a: {
        if (jl_Integer_integerCache$get_JiUhVo() === null) {
            jl_Integer_integerCache$set_KsSsFz($rt_createArray(jl_Integer, 256));
            $j = 0;
            while (true) {
                if ($j >= (jl_Integer_integerCache$get_JiUhVo()).data.length)
                    break a;
                (jl_Integer_integerCache$get_JiUhVo()).data[$j] = jl_Integer__init__VI$1($j - 128 | 0);
                $j = $j + 1 | 0;
            }
        }
    }
},
jl_Integer_toString_VHLrpW = $this => {
    return jl_Integer_toString_iFmOGb($this.$value0);
},
jl_Integer_numberOfLeadingZeros_II = $i => {
    let $n, var$3, var$4;
    $rt_init_metadata();
    jl_Integer_$callClinit();
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
jl_Integer__clinit__V = () => {
    jl_Integer_TYPE$set_GfbAYs($rt_cls($rt_intcls));
},
jl_Iterable = $rt_classWithoutFields(0),
jl_Math = $rt_classWithoutFields(),
jl_Math_min_III = ($a, $b) => {
    $rt_init_metadata();
    if ($a < $b)
        $b = $a;
    return $b;
},
jl_Math_max_III = ($a, $b) => {
    $rt_init_metadata();
    if ($a > $b)
        $b = $a;
    return $b;
},
jl_NegativeArraySizeException = $rt_classWithoutFields(jl_RuntimeException),
jl_NegativeArraySizeException__init__V = $this => {
    $rt_init_metadata();
    jl_RuntimeException__init__V($this);
},
jl_NegativeArraySizeException__init__V$1 = () => {
    let var_0 = new jl_NegativeArraySizeException();
    jl_NegativeArraySizeException__init__V(var_0);
    return var_0;
},
jl_NullPointerException = $rt_classWithoutFields(jl_RuntimeException),
jl_NullPointerException__init__XjCHVS = ($this, $message) => {
    $rt_init_metadata();
    jl_RuntimeException__init__XjCHVS($this, $message);
},
jl_NullPointerException__init__XjCHVS$1 = var_0 => {
    let var_1 = new jl_NullPointerException();
    jl_NullPointerException__init__XjCHVS(var_1, var_0);
    return var_1;
},
jl_NullPointerException__init__V = $this => {
    $rt_init_metadata();
    jl_RuntimeException__init__V($this);
},
jl_NullPointerException__init__V$1 = () => {
    let var_0 = new jl_NullPointerException();
    jl_NullPointerException__init__V(var_0);
    return var_0;
};
function jl_String() {
    jl_Object.call(this);
    this.$hashCode = 0;
}
let jl_String_EMPTY_CHARS = null;
function jl_String_EMPTY_CHARS$get__C() { $rt_init_metadata(); jl_String_$callClinit();  return jl_String_EMPTY_CHARS; }
function jl_String_EMPTY_CHARS$set_V_C(value) { $rt_init_metadata(); jl_String_$callClinit(); jl_String_EMPTY_CHARS = value; }
let jl_String_EMPTY = null;
function jl_String_EMPTY$get_VHLrpW() { $rt_init_metadata(); jl_String_$callClinit();  return jl_String_EMPTY; }
function jl_String_EMPTY$set_XjCHVS(value) { $rt_init_metadata(); jl_String_$callClinit(); jl_String_EMPTY = value; }
let jl_String_CASE_INSENSITIVE_ORDER = null;
function jl_String_CASE_INSENSITIVE_ORDER$get_kbAFBE() { $rt_init_metadata(); jl_String_$callClinit();  return jl_String_CASE_INSENSITIVE_ORDER; }
function jl_String_CASE_INSENSITIVE_ORDER$set_anNSmD(value) { $rt_init_metadata(); jl_String_$callClinit(); jl_String_CASE_INSENSITIVE_ORDER = value; }
let jl_String_$callClinit = () => {
    jl_String_$callClinit = $rt_eraseClinit(jl_String);
    jl_String__clinit__V();
},
jl_String__init__V = $this => {
    $rt_init_metadata();
    jl_String_$callClinit();
    jl_Object__init__V($this);
    $this.$nativeString = "";
},
jl_String__init__V$1 = () => {
    let var_0 = new jl_String();
    jl_String__init__V(var_0);
    return var_0;
},
jl_String__init__V_C = ($this, $characters) => {
    let var$2;
    $rt_init_metadata();
    jl_String_$callClinit();
    var$2 = $characters.data;
    jl_Object__init__V($this);
    $this.$nativeString = $rt_charArrayToString($characters.data, 0, var$2.length);
},
jl_String__init__V_C$1 = var_0 => {
    let var_1 = new jl_String();
    jl_String__init__V_C(var_1, var_0);
    return var_1;
},
jl_String__init__HFyQDR = (var$0, var$1) => {
    var$0.$nativeString = var$1;
},
jl_String__init__HFyQDR$1 = var_0 => {
    let var_1 = new jl_String();
    jl_String__init__HFyQDR(var_1, var_0);
    return var_1;
},
jl_String__init__V_CII = (var$0, var$1, $offset, $count) => {
    let var$4;
    $rt_init_metadata();
    jl_String_$callClinit();
    var$4 = var$1.data;
    jl_Object__init__V(var$0);
    ju_Objects_checkFromIndexSize_IIII($offset, $count, var$4.length);
    var$0.$nativeString = $rt_charArrayToString(var$1.data, $offset, $count);
},
jl_String__init__V_CII$1 = (var_0, var_1, var_2) => {
    let var_3 = new jl_String();
    jl_String__init__V_CII(var_3, var_0, var_1, var_2);
    return var_3;
},
jl_String_charAt_CI = ($this, $index) => {
    if ($index >= 0 && $index < $this.$nativeString.length)
        return $this.$nativeString.charCodeAt($index);
    $rt_throw(jl_StringIndexOutOfBoundsException__init__V$1());
},
jl_String_length_I = $this => {
    return $this.$nativeString.length;
},
jl_String_isEmpty_Z = $this => {
    return $this.$nativeString.length ? 0 : 1;
},
jl_String_compareToIgnoreCase_nftnjR = ($this, $anotherString) => {
    let $l, $i, $a, $b, var$6;
    if ($this === $anotherString)
        return 0;
    $l = jl_Math_min_III($this.$length_I(), $anotherString.$length_I());
    $i = 0;
    while (true) {
        if ($i >= $l)
            return $this.$length_I() - $anotherString.$length_I() | 0;
        $a = jl_Character_toLowerCase_CC($this.$charAt_CI($i));
        $b = jl_Character_toLowerCase_CC($anotherString.$charAt_CI($i));
        var$6 = $a - $b | 0;
        if (var$6)
            break;
        $i = $i + 1 | 0;
    }
    return var$6;
},
jl_String_toString_VHLrpW = $this => {
    return $this;
},
jl_String_toCharArray__C = $this => {
    let $array, $i, var$3;
    $array = $rt_createCharArray($this.$nativeString.length);
    $i = 0;
    while (true) {
        var$3 = $array.data;
        if ($i >= var$3.length)
            break;
        var$3[$i] = $this.$charAt_CI($i);
        $i = $i + 1 | 0;
    }
    return $array;
},
jl_String_equals_uKWEwg = ($this, $other) => {
    let $str;
    if ($this === $other)
        return 1;
    if (!($other instanceof jl_String))
        return 0;
    $str = $other;
    return $this.$nativeString !== $str.$nativeString ? 0 : 1;
},
jl_String_hashCode_I = $this => {
    let $i;
    a: {
        if (!$this.$hashCode) {
            $i = 0;
            while (true) {
                if ($i >= $this.$nativeString.length)
                    break a;
                $this.$hashCode = (31 * $this.$hashCode | 0) + $this.$nativeString.charCodeAt($i) | 0;
                $i = $i + 1 | 0;
            }
        }
    }
    return $this.$hashCode;
},
jl_String_lambda$static$0_fDwPQb = ($o1, $o2) => {
    $rt_init_metadata();
    jl_String_$callClinit();
    return $o1.$compareToIgnoreCase_nftnjR($o2);
},
jl_String__clinit__V = () => {
    jl_String_EMPTY_CHARS$set_V_C($rt_createCharArray(0));
    jl_String_EMPTY$set_XjCHVS(jl_String__init__V$1());
    jl_String_CASE_INSENSITIVE_ORDER$set_anNSmD(jl_String$_clinit_$lambda$_115_0__init__V$1());
},
ju_Comparator = $rt_classWithoutFields(0),
jl_String$_clinit_$lambda$_115_0 = $rt_classWithoutFields(),
jl_String$_clinit_$lambda$_115_0__init__V = var$0 => {
    $rt_init_metadata();
    jl_Object__init__V(var$0);
},
jl_String$_clinit_$lambda$_115_0__init__V$1 = () => {
    let var_0 = new jl_String$_clinit_$lambda$_115_0();
    jl_String$_clinit_$lambda$_115_0__init__V(var_0);
    return var_0;
},
jl_String$_clinit_$lambda$_115_0_compare_ZygPOh = (var$0, var$1, var$2) => {
    return jl_String$_clinit_$lambda$_115_0_compare_fDwPQb(var$0, var$1, var$2);
},
jl_String$_clinit_$lambda$_115_0_compare_fDwPQb = (var$0, var$1, var$2) => {
    return jl_String_lambda$static$0_fDwPQb(var$1, var$2);
},
jl_StringBuilder = $rt_classWithoutFields(jl_AbstractStringBuilder),
jl_StringBuilder__init__V = $this => {
    $rt_init_metadata();
    jl_AbstractStringBuilder__init__V($this);
},
jl_StringBuilder__init__V$1 = () => {
    let var_0 = new jl_StringBuilder();
    jl_StringBuilder__init__V(var_0);
    return var_0;
},
jl_StringBuilder_append_ZOYxhs = ($this, $obj) => {
    jl_AbstractStringBuilder_append_nfyWfb($this, $obj);
    return $this;
},
jl_StringBuilder_append_ZSDQSM = ($this, $value) => {
    jl_AbstractStringBuilder_append_oqxyew($this, $value);
    return $this;
},
jl_StringBuilder_append_zwKTwE = ($this, $c) => {
    jl_AbstractStringBuilder_append_OMqvAE($this, $c);
    return $this;
},
jl_StringBuilder_insert_JDogxs = ($this, $index, $obj) => {
    jl_AbstractStringBuilder_insert_KMHMoz($this, $index, $obj);
    return $this;
},
jl_StringBuilder_insert_CiShRV = ($this, $index, $c) => {
    jl_AbstractStringBuilder_insert_joXuZN($this, $index, $c);
    return $this;
},
jl_StringBuilder_insert_yVTRbO = ($this, $index, $string) => {
    jl_AbstractStringBuilder_insert_hzKion($this, $index, $string);
    return $this;
},
jl_StringBuilder_toString_VHLrpW = $this => {
    return jl_AbstractStringBuilder_toString_VHLrpW($this);
},
jl_StringBuilder_ensureCapacity_VI = ($this, var$1) => {
    jl_AbstractStringBuilder_ensureCapacity_VI($this, var$1);
},
jl_StringBuilder_insert_KMHMoz = ($this, var$1, var$2) => {
    return $this.$insert_JDogxs(var$1, var$2);
},
jl_StringBuilder_insert_joXuZN = ($this, var$1, var$2) => {
    return $this.$insert_CiShRV(var$1, var$2);
},
jl_StringBuilder_insert_hzKion = ($this, var$1, var$2) => {
    return $this.$insert_yVTRbO(var$1, var$2);
},
jl_StringIndexOutOfBoundsException = $rt_classWithoutFields(jl_IndexOutOfBoundsException),
jl_StringIndexOutOfBoundsException__init__V = $this => {
    $rt_init_metadata();
    jl_IndexOutOfBoundsException__init__V($this);
},
jl_StringIndexOutOfBoundsException__init__V$1 = () => {
    let var_0 = new jl_StringIndexOutOfBoundsException();
    jl_StringIndexOutOfBoundsException__init__V(var_0);
    return var_0;
},
jl_System = $rt_classWithoutFields(),
jl_System_outCache = null;
function jl_System_outCache$get_JQwxsu() { $rt_init_metadata();  return jl_System_outCache; }
function jl_System_outCache$set_lLaEnR(value) { $rt_init_metadata(); jl_System_outCache = value; }
let jl_System_out_JQwxsu = () => {
    $rt_init_metadata();
    if (jl_System_outCache$get_JQwxsu() === null)
        jl_System_outCache$set_lLaEnR(otcic_JSStdoutPrintStream__init__V$1());
    return jl_System_outCache$get_JQwxsu();
},
jlr_Array = $rt_classWithoutFields(),
jlr_Array_newInstance_AAjNOn = ($componentType, $length) => {
    $rt_init_metadata();
    if ($componentType === null)
        $rt_throw(jl_NullPointerException__init__V$1());
    if ($componentType === $rt_cls($rt_voidcls))
        $rt_throw(jl_IllegalArgumentException__init__V$1());
    if ($length < 0)
        $rt_throw(jl_NegativeArraySizeException__init__V$1());
    return jlr_Array_newInstanceImpl_lfJdlA(jl_Class_getPlatformClass_BSppjk($componentType), $length);
},
jlr_Array_newInstanceImpl_lfJdlA = (var$1, var$2) => {
    if (var$1.$meta.primitive) {
        switch (var$1) {
        }
        ;
    }
    return $rt_createArray(var$1, var$2);
},
jnc_Charset = $rt_classWithoutFields(),
ju_Collection = $rt_classWithoutFields(0),
ju_AbstractCollection = $rt_classWithoutFields(),
ju_AbstractCollection__init__V = $this => {
    $rt_init_metadata();
    jl_Object__init__V($this);
},
ju_SequencedCollection = $rt_classWithoutFields(0),
ju_List = $rt_classWithoutFields(0);
function ju_AbstractList() {
    ju_AbstractCollection.call(this);
    this.$modCount0 = 0;
}
let ju_AbstractList__init__V = $this => {
    $rt_init_metadata();
    ju_AbstractCollection__init__V($this);
},
ju_Map = $rt_classWithoutFields(0),
ju_AbstractMap = $rt_classWithoutFields(),
ju_AbstractMap__init__V = $this => {
    $rt_init_metadata();
    jl_Object__init__V($this);
},
ju_RandomAccess = $rt_classWithoutFields(0);
function ju_ArrayList() {
    let a = this; ju_AbstractList.call(a);
    a.$array = null;
    a.$size = 0;
}
let ju_ArrayList__init__V = $this => {
    $rt_init_metadata();
    ju_ArrayList__init__VI($this, 10);
},
ju_ArrayList__init__V$1 = () => {
    let var_0 = new ju_ArrayList();
    ju_ArrayList__init__V(var_0);
    return var_0;
},
ju_ArrayList__init__VI = ($this, $initialCapacity) => {
    $rt_init_metadata();
    ju_AbstractList__init__V($this);
    if ($initialCapacity >= 0) {
        $this.$array = $rt_createArray(jl_Object, $initialCapacity);
        return;
    }
    $rt_throw(jl_IllegalArgumentException__init__V$1());
},
ju_ArrayList__init__VI$1 = var_0 => {
    let var_1 = new ju_ArrayList();
    ju_ArrayList__init__VI(var_1, var_0);
    return var_1;
},
ju_ArrayList_ensureCapacity_VI = ($this, $minCapacity) => {
    let $newLength;
    if ($this.$array.data.length < $minCapacity) {
        $newLength = $this.$array.data.length >= 1073741823 ? 2147483647 : jl_Math_max_III($minCapacity, jl_Math_max_III($this.$array.data.length * 2 | 0, 5));
        $this.$array = ju_Arrays_copyOf_MqkkEq($this.$array, $newLength);
    }
},
ju_ArrayList_add_uKWEwg = ($this, $element) => {
    let var$2, var$3;
    $this.$ensureCapacity_VI($this.$size + 1 | 0);
    var$2 = $this.$array.data;
    var$3 = $this.$size;
    $this.$size = var$3 + 1 | 0;
    var$2[var$3] = $element;
    $this.$modCount0 = $this.$modCount0 + 1 | 0;
    return 1;
},
ju_ArrayList_forEach_bOKmPa = ($this, $action) => {
    let $i;
    $i = 0;
    while ($i < $this.$size) {
        $action.$accept_HFyQDR($this.$array.data[$i]);
        $i = $i + 1 | 0;
    }
},
ju_Arrays = $rt_classWithoutFields(),
ju_Arrays_copyOf__C_CI = ($array, $length) => {
    let var$3, $result, $sz, $i;
    $rt_init_metadata();
    var$3 = $array.data;
    $result = $rt_createCharArray($length);
    $sz = jl_Math_min_III($length, var$3.length);
    $i = 0;
    while ($i < $sz) {
        $result.data[$i] = var$3[$i];
        $i = $i + 1 | 0;
    }
    return $result;
},
ju_Arrays_copyOf_MqkkEq = ($original, $newLength) => {
    let var$3, $result, $sz, $i;
    $rt_init_metadata();
    var$3 = $original.data;
    $result = jlr_Array_newInstance_AAjNOn(jl_Class_getComponentType_rQPqgt(jl_Object_getClass_rQPqgt($original)), $newLength);
    $sz = jl_Math_min_III($newLength, var$3.length);
    $i = 0;
    while ($i < $sz) {
        $result.data[$i] = var$3[$i];
        $i = $i + 1 | 0;
    }
    return $result;
},
ju_Arrays_fill_yhNzHk = ($a, $fromIndex, $toIndex, $val) => {
    let var$5, var$6;
    $rt_init_metadata();
    if ($fromIndex > $toIndex)
        $rt_throw(jl_IllegalArgumentException__init__V$1());
    while ($fromIndex < $toIndex) {
        var$5 = $a.data;
        var$6 = $fromIndex + 1 | 0;
        var$5[$fromIndex] = $val;
        $fromIndex = var$6;
    }
},
ju_ConcurrentModificationException = $rt_classWithoutFields(jl_RuntimeException),
ju_ConcurrentModificationException__init__V = $this => {
    $rt_init_metadata();
    jl_RuntimeException__init__V($this);
},
ju_ConcurrentModificationException__init__V$1 = () => {
    let var_0 = new ju_ConcurrentModificationException();
    ju_ConcurrentModificationException__init__V(var_0);
    return var_0;
};
function ju_HashMap() {
    let a = this; ju_AbstractMap.call(a);
    a.$elementCount = 0;
    a.$elementData = null;
    a.$modCount = 0;
    a.$loadFactor = 0.0;
    a.$threshold = 0;
}
let ju_HashMap_newElementArray_HaDQXJ = ($this, $s) => {
    return $rt_createArray(ju_HashMap$HashEntry, $s);
},
ju_HashMap__init__V = $this => {
    $rt_init_metadata();
    ju_HashMap__init__VI($this, 16);
},
ju_HashMap__init__V$1 = () => {
    let var_0 = new ju_HashMap();
    ju_HashMap__init__V(var_0);
    return var_0;
},
ju_HashMap__init__VI = ($this, $capacity) => {
    $rt_init_metadata();
    ju_HashMap__init__VIF($this, $capacity, 0.75);
},
ju_HashMap__init__VI$1 = var_0 => {
    let var_1 = new ju_HashMap();
    ju_HashMap__init__VI(var_1, var_0);
    return var_1;
},
ju_HashMap_calculateCapacity_II = $x => {
    let var$2, var$3;
    $rt_init_metadata();
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
ju_HashMap__init__VIF = ($this, $capacity, $loadFactor) => {
    let var$3;
    $rt_init_metadata();
    ju_AbstractMap__init__V($this);
    if ($capacity >= 0 && $loadFactor > 0.0) {
        var$3 = ju_HashMap_calculateCapacity_II($capacity);
        $this.$elementCount = 0;
        $this.$elementData = $this.$newElementArray_HaDQXJ(var$3);
        $this.$loadFactor = $loadFactor;
        ju_HashMap_computeThreshold_V($this);
        return;
    }
    $rt_throw(jl_IllegalArgumentException__init__V$1());
},
ju_HashMap__init__VIF$1 = (var_0, var_1) => {
    let var_2 = new ju_HashMap();
    ju_HashMap__init__VIF(var_2, var_0, var_1);
    return var_2;
},
ju_HashMap_computeThreshold_V = $this => {
    $this.$threshold = $this.$elementData.data.length * $this.$loadFactor | 0;
},
ju_HashMap_findNonNullKeyEntry_RrVLlf = ($this, $key, $index, $keyHash) => {
    let $m;
    $m = $this.$elementData.data[$index];
    while ($m !== null && !($m.$origKeyHash == $keyHash && ju_HashMap_areEqualKeys_UWKivJ($key, $m.$key))) {
        $m = $m.$next;
    }
    return $m;
},
ju_HashMap_findNullKeyEntry_QqMKmf = $this => {
    let $m;
    $m = $this.$elementData.data[0];
    while ($m !== null && $m.$key !== null) {
        $m = $m.$next;
    }
    return $m;
},
ju_HashMap_put_tsMSwf = ($this, $key, $value) => {
    return ju_HashMap_putImpl_tsMSwf($this, $key, $value);
},
ju_HashMap_putImpl_tsMSwf = ($this, $key, $value) => {
    let $entry, var$4, $hash, $index, $result;
    if ($key === null) {
        $entry = ju_HashMap_findNullKeyEntry_QqMKmf($this);
        if ($entry === null) {
            $this.$modCount = $this.$modCount + 1 | 0;
            $entry = ju_HashMap_createHashedEntry_RrVLlf($this, null, 0, 0);
            var$4 = $this.$elementCount + 1 | 0;
            $this.$elementCount = var$4;
            if (var$4 > $this.$threshold)
                $this.$rehash_V();
        }
    } else {
        $hash = $key.$hashCode_I();
        $index = $hash & ($this.$elementData.data.length - 1 | 0);
        $entry = ju_HashMap_findNonNullKeyEntry_RrVLlf($this, $key, $index, $hash);
        if ($entry === null) {
            $this.$modCount = $this.$modCount + 1 | 0;
            $entry = ju_HashMap_createHashedEntry_RrVLlf($this, $key, $index, $hash);
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
ju_HashMap_createHashedEntry_RrVLlf = ($this, $key, $index, $hash) => {
    let $entry;
    $entry = ju_HashMap$HashEntry__init__moeQBN$1($key, $hash);
    $entry.$next = $this.$elementData.data[$index];
    $this.$elementData.data[$index] = $entry;
    return $entry;
},
ju_HashMap_rehash_VI = ($this, $capacity) => {
    let $length, $newData, $i, $entry, var$6, $index, $next;
    $length = ju_HashMap_calculateCapacity_II(!$capacity ? 1 : $capacity << 1);
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
    ju_HashMap_computeThreshold_V($this);
},
ju_HashMap_rehash_V = $this => {
    $this.$rehash_VI($this.$elementData.data.length);
},
ju_HashMap_forEach_bjTrMv = ($this, $action) => {
    let $prevModCount, $i, $entry;
    a: {
        if ($this.$elementCount > 0) {
            $prevModCount = $this.$modCount;
            $i = 0;
            while (true) {
                if ($i >= $this.$elementData.data.length)
                    break a;
                $entry = $this.$elementData.data[$i];
                while ($entry !== null) {
                    $action.$accept_PLTLFS($entry.$key, $entry.$value);
                    $entry = $entry.$next;
                    if ($prevModCount != $this.$modCount)
                        $rt_throw(ju_ConcurrentModificationException__init__V$1());
                }
                $i = $i + 1 | 0;
            }
        }
    }
},
ju_HashMap_areEqualKeys_UWKivJ = ($key1, $key2) => {
    $rt_init_metadata();
    return $key1 !== $key2 && !$key1.$equals_uKWEwg($key2) ? 0 : 1;
},
ju_Map$Entry = $rt_classWithoutFields(0);
function ju_MapEntry() {
    let a = this; jl_Object.call(a);
    a.$key = null;
    a.$value = null;
}
let ju_MapEntry__init__PLTLFS = ($this, $theKey, $theValue) => {
    $rt_init_metadata();
    jl_Object__init__V($this);
    $this.$key = $theKey;
    $this.$value = $theValue;
},
ju_MapEntry__init__PLTLFS$1 = (var_0, var_1) => {
    let var_2 = new ju_MapEntry();
    ju_MapEntry__init__PLTLFS(var_2, var_0, var_1);
    return var_2;
};
function ju_HashMap$HashEntry() {
    let a = this; ju_MapEntry.call(a);
    a.$origKeyHash = 0;
    a.$next = null;
}
let ju_HashMap$HashEntry__init__moeQBN = ($this, $theKey, $hash) => {
    $rt_init_metadata();
    ju_MapEntry__init__PLTLFS($this, $theKey, null);
    $this.$origKeyHash = $hash;
},
ju_HashMap$HashEntry__init__moeQBN$1 = (var_0, var_1) => {
    let var_2 = new ju_HashMap$HashEntry();
    ju_HashMap$HashEntry__init__moeQBN(var_2, var_0, var_1);
    return var_2;
},
ju_Objects = $rt_classWithoutFields(),
ju_Objects_requireNonNull_lVIoyP = $obj => {
    $rt_init_metadata();
    return ju_Objects_requireNonNull_iCEnfr($obj, $rt_s(3));
},
ju_Objects_requireNonNull_iCEnfr = ($obj, $message) => {
    $rt_init_metadata();
    if ($obj !== null)
        return $obj;
    $rt_throw(jl_NullPointerException__init__XjCHVS$1($message));
},
ju_Objects_checkFromIndexSize_IIII = ($fromIndex, $size, $length) => {
    $rt_init_metadata();
    if ($fromIndex >= 0 && $size >= 0 && $size <= ($length - $fromIndex | 0))
        return $fromIndex;
    $rt_throw(jl_IndexOutOfBoundsException__init__V$1());
},
juf_BiConsumer = $rt_classWithoutFields(0),
juf_Consumer = $rt_classWithoutFields(0),
j_Iface = $rt_classWithoutFields(0);
function j_Bar() {
    jl_Object.call(this);
    this.$p = null;
}
let j_Bar__init__XjCHVS = ($this, $p) => {
    $rt_init_metadata();
    jl_Object__init__V($this);
    $this.$p = $p;
},
j_Bar__init__XjCHVS$1 = var_0 => {
    let var_1 = new j_Bar();
    j_Bar__init__XjCHVS(var_1, var_0);
    return var_1;
},
j_Bar_foo_VHLrpW = $this => {
    let var$1, var$2;
    var$1 = $this.$p;
    var$2 = jl_StringBuilder__init__V$1();
    jl_StringBuilder_append_ZOYxhs(jl_StringBuilder_append_ZOYxhs(var$2, $rt_s(4)), var$1);
    return jl_StringBuilder_toString_VHLrpW(var$2);
},
j_Baz = $rt_classWithoutFields(j_Bar),
j_Baz__init__XjCHVS = ($this, $p) => {
    $rt_init_metadata();
    j_Bar__init__XjCHVS($this, $p);
},
j_Baz__init__XjCHVS$1 = var_0 => {
    let var_1 = new j_Baz();
    j_Baz__init__XjCHVS(var_1, var_0);
    return var_1;
},
j_Baz_foo_VHLrpW = $this => {
    return $rt_s(5);
};
function j_JsMain() {
    jl_Object.call(this);
    this.$service3 = null;
}
let j_JsMain_$callClinit = () => {
    j_JsMain_$callClinit = $rt_eraseClinit(j_JsMain);
    j_JsMain__clinit__V();
},
j_JsMain_foo_VHLrpW = $this => {
    let var$1, var$2;
    var$1 = $this.$service3.$foo_VHLrpW();
    var$2 = jl_StringBuilder__init__V$1();
    jl_StringBuilder_append_ZOYxhs(jl_StringBuilder_append_ZOYxhs(var$2, $rt_s(6)), var$1);
    return jl_StringBuilder_toString_VHLrpW(var$2);
},
j_JsMain__init__mmFgnD = ($this, $service3) => {
    $rt_init_metadata();
    j_JsMain_$callClinit();
    jl_Object__init__V($this);
    $this.$service3 = $service3;
},
j_JsMain__init__mmFgnD$1 = var_0 => {
    let var_1 = new j_JsMain();
    j_JsMain__init__mmFgnD(var_1, var_0);
    return var_1;
},
j_JsMain_main_WiJjkv = $args => {
    let var$2, $service1, $service2, $service3, $main, $list, $map, $bar, $baz;
    $rt_init_metadata();
    j_JsMain_$callClinit();
    var$2 = j_JsMain$main$lambda$_2_0__init__V$1();
    setTimeout(otji_JS_function_PmAeiP(otji_JSWrapper_unwrap_jntYSA(var$2), "onTimer"), 1000);
    $rt_init_metadata();
    j_Service1_$callClinit();
    j_Service1_staticNum$set_VI(j_Service1_staticNum$get_I() + 1 | 0);
    (jl_System_out_JQwxsu()).$println_VI(j_Service1_staticNum$get_I());
    $service1 = j_Service1__init__V$1();
    var$2 = j_Service1__init__V$1();
    $service2 = j_Service2__init__V$1();
    $service3 = j_Service3__init__linHFy$1(var$2, $service2);
    $main = j_JsMain__init__mmFgnD$1($service3);
    $list = ju_ArrayList__init__V$1();
    $list.$add_uKWEwg($rt_s(7));
    $list.$add_uKWEwg($rt_s(8));
    $list.$add_uKWEwg($rt_s(9));
    var$2 = jl_System_out_JQwxsu();
    ju_Objects_requireNonNull_lVIoyP(var$2);
    $list.$forEach_bOKmPa(j_JsMain$main$lambda$_2_1__init__lLaEnR$1(var$2));
    (jl_System_out_JQwxsu()).$println_XjCHVS($main.$foo_VHLrpW());
    var$2 = jl_System_out_JQwxsu();
    $rt_init_metadata();
    jl_String_$callClinit();
    var$2.$println_VI((jl_String_CASE_INSENSITIVE_ORDER$get_kbAFBE()).$compare_ZygPOh($rt_s(10), $rt_s(11)));
    $map = ju_HashMap__init__V$1();
    $map.$put_tsMSwf($rt_s(11), jl_Integer_valueOf_jxXMoQ(1));
    $map.$put_tsMSwf($rt_s(12), jl_Integer_valueOf_jxXMoQ(2));
    $map.$forEach_bjTrMv(j_JsMain$main$lambda$_2_2__init__V$1());
    $bar = j_Bar__init__XjCHVS$1($rt_s(13));
    (jl_System_out_JQwxsu()).$println_XjCHVS($bar.$foo_VHLrpW());
    $baz = j_Baz__init__XjCHVS$1($rt_s(14));
    (jl_System_out_JQwxsu()).$println_XjCHVS($baz.$foo_VHLrpW());
    (jl_System_out_JQwxsu()).$println_XjCHVS((j_JsMain_make_aTGoyT($rt_s(4))).$foo_VHLrpW());
    (jl_System_out_JQwxsu()).$println_XjCHVS((j_JsMain_make_aTGoyT($rt_s(5))).$foo_VHLrpW());
    (jl_System_out_JQwxsu()).$println_XjCHVS(jl_Class_getName_VHLrpW(jl_Object_getClass_rQPqgt(j_JsMain_make_aTGoyT($rt_s(4)))));
    (jl_System_out_JQwxsu()).$println_XjCHVS(jl_Class_getName_VHLrpW(jl_Object_getClass_rQPqgt(j_JsMain_make_aTGoyT($rt_s(5)))));
    (jl_System_out_JQwxsu()).$println_VZ($rt_isInstance(j_JsMain_make_aTGoyT($rt_s(5)), j_Iface));
    (jl_System_out_JQwxsu()).$println_VZ(j_JsMain_make_aTGoyT($rt_s(5)) instanceof j_Bar);
    (jl_System_out_JQwxsu()).$println_VZ(j_JsMain_make_aTGoyT($rt_s(5)) instanceof j_Baz);
    (jl_System_out_JQwxsu()).$println_VZ($rt_isInstance(j_JsMain_make_aTGoyT($rt_s(4)), j_Iface));
    (jl_System_out_JQwxsu()).$println_VZ(j_JsMain_make_aTGoyT($rt_s(4)) instanceof j_Bar);
    (jl_System_out_JQwxsu()).$println_VZ(j_JsMain_make_aTGoyT($rt_s(4)) instanceof j_Baz);
},
j_JsMain_make_aTGoyT = $what => {
    $rt_init_metadata();
    j_JsMain_$callClinit();
    if ($what.$equals_uKWEwg($rt_s(4)))
        return j_Bar__init__XjCHVS$1($rt_s(13));
    if (!$what.$equals_uKWEwg($rt_s(5)))
        return null;
    return j_Baz__init__XjCHVS$1($rt_s(14));
},
j_JsMain_lambda$main$1_CeLKBX = ($k, $v) => {
    let var$3, var$4;
    $rt_init_metadata();
    j_JsMain_$callClinit();
    var$3 = jl_System_out_JQwxsu();
    var$4 = jl_StringBuilder__init__V$1();
    jl_StringBuilder_append_ZOYxhs(jl_StringBuilder_append_zwKTwE(jl_StringBuilder_append_ZOYxhs(var$4, $k), 32), $v);
    var$3.$println_XjCHVS(jl_StringBuilder_toString_VHLrpW(var$4));
},
j_JsMain_lambda$main$0_V = () => {
    $rt_init_metadata();
    j_JsMain_$callClinit();
    (jl_System_out_JQwxsu()).$println_XjCHVS($rt_s(15));
},
j_JsMain__clinit__V = () => {
    let var$1;
    var$1 = j_JsMain$_clinit_$lambda$_7_0__init__V$1();
    j_JsMain_export$js_body$_4_jMtQXM("JsMain1", otji_JS_function_PmAeiP(otji_JSWrapper_unwrap_jntYSA(var$1), "create"));
},
j_JsMain_export$js_body$_4_jMtQXM = (var$1, var$2) => {
    let window = {  };
    window[var$1] = var$2;
},
otj_JSObject = $rt_classWithoutFields(0),
j_JsMain$JsMainCtor = $rt_classWithoutFields(0),
j_JsMain$_clinit_$lambda$_7_0 = $rt_classWithoutFields(),
j_JsMain$_clinit_$lambda$_7_0__init__V = var$0 => {
    $rt_init_metadata();
    jl_Object__init__V(var$0);
},
j_JsMain$_clinit_$lambda$_7_0__init__V$1 = () => {
    let var_0 = new j_JsMain$_clinit_$lambda$_7_0();
    j_JsMain$_clinit_$lambda$_7_0__init__V(var_0);
    return var_0;
},
j_JsMain$_clinit_$lambda$_7_0_create_yGwQxM = (var$0, var$1) => {
    return j_JsMain__init__mmFgnD$1(var$1);
},
j_JsMain$_clinit_$lambda$_7_0_create$exported$0_PmAeiP = (var$1, var$2) => {
    $rt_init_metadata();
    var$2 = var$2;
    return otji_JSWrapper_javaToJs_jntYSA(var$1.$create_yGwQxM(var$2));
},
otjb_TimerHandler = $rt_classWithoutFields(0),
j_JsMain$main$lambda$_2_0 = $rt_classWithoutFields(),
j_JsMain$main$lambda$_2_0__init__V = var$0 => {
    $rt_init_metadata();
    jl_Object__init__V(var$0);
},
j_JsMain$main$lambda$_2_0__init__V$1 = () => {
    let var_0 = new j_JsMain$main$lambda$_2_0();
    j_JsMain$main$lambda$_2_0__init__V(var_0);
    return var_0;
},
j_JsMain$main$lambda$_2_0_onTimer_V = var$0 => {
    j_JsMain_lambda$main$0_V();
},
j_JsMain$main$lambda$_2_0_onTimer$exported$0_ompCkp = var$1 => {
    $rt_init_metadata();
    var$1.$onTimer_V();
};
function j_JsMain$main$lambda$_2_1() {
    jl_Object.call(this);
    this.$_0 = null;
}
let j_JsMain$main$lambda$_2_1__init__lLaEnR = (var$0, var$1) => {
    $rt_init_metadata();
    jl_Object__init__V(var$0);
    var$0.$_0 = var$1;
},
j_JsMain$main$lambda$_2_1__init__lLaEnR$1 = var_0 => {
    let var_1 = new j_JsMain$main$lambda$_2_1();
    j_JsMain$main$lambda$_2_1__init__lLaEnR(var_1, var_0);
    return var_1;
},
j_JsMain$main$lambda$_2_1_accept_HFyQDR = (var$0, var$1) => {
    j_JsMain$main$lambda$_2_1_accept_XjCHVS(var$0, var$1);
},
j_JsMain$main$lambda$_2_1_accept_XjCHVS = (var$0, var$1) => {
    var$0.$_0.$println_XjCHVS(var$1);
},
j_JsMain$main$lambda$_2_2 = $rt_classWithoutFields(),
j_JsMain$main$lambda$_2_2__init__V = var$0 => {
    $rt_init_metadata();
    jl_Object__init__V(var$0);
},
j_JsMain$main$lambda$_2_2__init__V$1 = () => {
    let var_0 = new j_JsMain$main$lambda$_2_2();
    j_JsMain$main$lambda$_2_2__init__V(var_0);
    return var_0;
},
j_JsMain$main$lambda$_2_2_accept_PLTLFS = (var$0, var$1, var$2) => {
    j_JsMain$main$lambda$_2_2_accept_CeLKBX(var$0, var$1, var$2);
},
j_JsMain$main$lambda$_2_2_accept_CeLKBX = (var$0, var$1, var$2) => {
    j_JsMain_lambda$main$1_CeLKBX(var$1, var$2);
};
function j_Service1() {
    jl_Object.call(this);
    this.$num = 0;
}
let j_Service1_staticNum = 0;
function j_Service1_staticNum$get_I() { $rt_init_metadata(); j_Service1_$callClinit();  return j_Service1_staticNum; }
function j_Service1_staticNum$set_VI(value) { $rt_init_metadata(); j_Service1_$callClinit(); j_Service1_staticNum = value; }
let j_Service1_$callClinit = () => {
    j_Service1_$callClinit = $rt_eraseClinit(j_Service1);
    j_Service1__clinit__V();
},
j_Service1__init__V = $this => {
    $rt_init_metadata();
    j_Service1_$callClinit();
    jl_Object__init__V($this);
    $this.$num = 1;
    (jl_System_out_JQwxsu()).$println_XjCHVS($rt_s(16));
},
j_Service1__init__V$1 = () => {
    let var_0 = new j_Service1();
    j_Service1__init__V(var_0);
    return var_0;
},
j_Service1_foo_VHLrpW = $this => {
    let var$1, var$2;
    var$1 = $this.$num;
    var$2 = jl_StringBuilder__init__V$1();
    jl_StringBuilder_append_ZSDQSM(jl_StringBuilder_append_ZOYxhs(var$2, $rt_s(17)), var$1);
    return jl_StringBuilder_toString_VHLrpW(var$2);
},
j_Service1__clinit__V = () => {
    j_Service1_staticNum$set_VI(2);
    (jl_System_out_JQwxsu()).$println_XjCHVS($rt_s(18));
},
j_Service2 = $rt_classWithoutFields(),
j_Service2__init__V = $this => {
    $rt_init_metadata();
    jl_Object__init__V($this);
},
j_Service2__init__V$1 = () => {
    let var_0 = new j_Service2();
    j_Service2__init__V(var_0);
    return var_0;
},
j_Service2_foo_VHLrpW = $this => {
    return $rt_s(19);
};
function j_Service3() {
    let a = this; jl_Object.call(a);
    a.$service1 = null;
    a.$service2 = null;
}
let j_Service3__init__linHFy = ($this, $service1, $service2) => {
    $rt_init_metadata();
    jl_Object__init__V($this);
    $this.$service1 = $service1;
    $this.$service2 = $service2;
},
j_Service3__init__linHFy$1 = (var_0, var_1) => {
    let var_2 = new j_Service3();
    j_Service3__init__linHFy(var_2, var_0, var_1);
    return var_2;
},
j_Service3_foo_VHLrpW = $this => {
    let var$1, var$2, var$3;
    var$1 = $this.$service1.$foo_VHLrpW();
    var$2 = $this.$service2.$foo_VHLrpW();
    var$3 = jl_StringBuilder__init__V$1();
    jl_StringBuilder_append_ZOYxhs(jl_StringBuilder_append_ZOYxhs(jl_StringBuilder_append_ZOYxhs(jl_StringBuilder_append_ZOYxhs(var$3, $rt_s(20)), var$1), $rt_s(21)), var$2);
    return jl_StringBuilder_toString_VHLrpW(var$3);
},
otci_Base46 = $rt_classWithoutFields(),
otci_Base46_decodeUnsigned_fpZHVA = $seq => {
    let $number, $pos, var$4, var$5, $digit, $hasMore;
    $rt_init_metadata();
    $number = 0;
    $pos = 1;
    while (true) {
        var$4 = $seq.$characters.data;
        var$5 = $seq.$pointer;
        $seq.$pointer = var$5 + 1 | 0;
        $digit = otci_Base46_decodeDigit_IC(var$4[var$5]);
        $hasMore = ($digit % 2 | 0) != 1 ? 0 : 1;
        $number = $number + $rt_imul($pos, $digit / 2 | 0) | 0;
        $pos = $pos * 46 | 0;
        if (!$hasMore)
            break;
    }
    return $number;
},
otci_Base46_decode_fpZHVA = $seq => {
    let $number, $result;
    $rt_init_metadata();
    $number = otci_Base46_decodeUnsigned_fpZHVA($seq);
    $result = $number / 2 | 0;
    if ($number % 2 | 0)
        $result =  -$result | 0;
    return $result;
},
otci_Base46_decodeDigit_IC = $c => {
    $rt_init_metadata();
    if ($c < 34)
        return $c - 32 | 0;
    if ($c >= 92)
        return ($c - 32 | 0) - 2 | 0;
    return ($c - 32 | 0) - 1 | 0;
};
function otci_CharFlow() {
    let a = this; jl_Object.call(a);
    a.$characters = null;
    a.$pointer = 0;
}
let otci_CharFlow__init__V_C = ($this, $characters) => {
    $rt_init_metadata();
    jl_Object__init__V($this);
    $this.$characters = $characters;
},
otci_CharFlow__init__V_C$1 = var_0 => {
    let var_1 = new otci_CharFlow();
    otci_CharFlow__init__V_C(var_1, var_0);
    return var_1;
},
otci_IntegerUtil = $rt_classWithoutFields(),
otci_IntegerUtil_toUnsignedLogRadixString_KSkSDS = ($value, $radixLog2) => {
    let $radix, $mask, $sz, $chars, $pos, $target, var$9, $target_0;
    $rt_init_metadata();
    if (!$value)
        return $rt_s(22);
    $radix = 1 << $radixLog2;
    $mask = $radix - 1 | 0;
    $sz = (((32 - jl_Integer_numberOfLeadingZeros_II($value) | 0) + $radixLog2 | 0) - 1 | 0) / $radixLog2 | 0;
    $chars = $rt_createCharArray($sz);
    $pos = $rt_imul($sz - 1 | 0, $radixLog2);
    $target = 0;
    while ($pos >= 0) {
        var$9 = $chars.data;
        $target_0 = $target + 1 | 0;
        var$9[$target] = jl_Character_forDigit_CII(($value >>> $pos | 0) & $mask, $radix);
        $pos = $pos - $radixLog2 | 0;
        $target = $target_0;
    }
    return jl_String__init__V_C$1($chars);
},
otcic_JsConsolePrintStream = $rt_classWithoutFields(ji_PrintStream),
otcic_JsConsolePrintStream__init__V = $this => {
    $rt_init_metadata();
    ji_PrintStream__init__RHOATE($this, null, 0, null);
},
otcic_JsConsolePrintStream_println_XjCHVS = ($this, $s) => {
    $this.$print_XjCHVS($s);
    $this.$print_XjCHVS($rt_s(23));
},
otcic_JsConsolePrintStream_println_VI = ($this, $i) => {
    $this.$println_XjCHVS(jl_Integer_toString_iFmOGb($i));
},
otcic_JsConsolePrintStream_println_VZ = ($this, $b) => {
    $this.$println_XjCHVS(jl_Boolean_toString_adrUOL($b));
},
otcic_JSStdoutPrintStream = $rt_classWithoutFields(otcic_JsConsolePrintStream),
otcic_JSStdoutPrintStream__init__V = $this => {
    $rt_init_metadata();
    otcic_JsConsolePrintStream__init__V($this);
},
otcic_JSStdoutPrintStream__init__V$1 = () => {
    let var_0 = new otcic_JSStdoutPrintStream();
    otcic_JSStdoutPrintStream__init__V(var_0);
    return var_0;
},
otcic_JSStdoutPrintStream_print_XjCHVS = ($this, $s) => {
    if ($s === null)
        $s = $rt_s(0);
    $rt_putStdout($rt_ustr($s));
};
function otciu_CharMapping() {
    let a = this; jl_Object.call(a);
    a.$binarySearchTable = null;
    a.$fastTable = null;
}
let otciu_CharMapping__init__V_I_I = ($this, $binarySearchTable, $fastTable) => {
    $rt_init_metadata();
    jl_Object__init__V($this);
    $this.$binarySearchTable = $binarySearchTable;
    $this.$fastTable = $fastTable;
},
otciu_CharMapping__init__V_I_I$1 = (var_0, var_1) => {
    let var_2 = new otciu_CharMapping();
    otciu_CharMapping__init__V_I_I(var_2, var_0, var_1);
    return var_2;
},
otciu_UnicodeHelper = $rt_classWithoutFields(),
otciu_UnicodeHelper_decodeCaseMapping_JHgFIf = $text => {
    let $flow, $sz, $data, $last, $i, var$7, var$8;
    $rt_init_metadata();
    $flow = otci_CharFlow__init__V_C$1($text.$toCharArray__C());
    $sz = otci_Base46_decodeUnsigned_fpZHVA($flow);
    $data = $rt_createIntArray($sz * 2 | 0);
    $last = 0;
    $i = 0;
    while ($i < $sz) {
        var$7 = $data.data;
        $last = $last + otci_Base46_decodeUnsigned_fpZHVA($flow) | 0;
        var$8 = $i * 2 | 0;
        var$7[var$8] = $last;
        var$7[var$8 + 1 | 0] = otci_Base46_decode_fpZHVA($flow);
        $i = $i + 1 | 0;
    }
    return $data;
},
otciu_UnicodeHelper_createCharMapping_uLlFHT = $data => {
    let $result, $last, $lastValue, $i, var$6, var$7, $key, $value, var$10;
    $rt_init_metadata();
    $result = $rt_createIntArray(65536);
    $last = 0;
    $lastValue = 0;
    $i = 0;
    a: {
        while (true) {
            var$6 = $data.data;
            if ($i >= var$6.length)
                break a;
            var$7 = $result.data;
            $key = var$6[$i];
            $value = var$6[$i + 1 | 0];
            var$10 = var$7.length;
            if ($key < var$10)
                var$10 = $key;
            else if ($key == $last)
                break;
            ju_Arrays_fill_yhNzHk($result, $last, var$10, $lastValue);
            $i = $i + 2 | 0;
            $last = var$10;
            $lastValue = $value;
        }
    }
    return otciu_CharMapping__init__V_I_I$1($data, $result);
},
otji_JS = $rt_classWithoutFields(),
otji_JS_function_PmAeiP = (var$1, var$2) => {
    let name = 'jso$functor$' + var$2;
    let result = var$1[name];
    if (typeof result !== 'function') {
        let fn = function() {
            return var$1[var$2].apply(var$1, arguments);
        };
        result = () => fn;
        var$1[name] = result;
    }
    return result();
};
function otji_JSWrapper() {
    jl_Object.call(this);
    this.$js = null;
}
let otji_JSWrapper_unwrap_jntYSA = var$1 => {
    $rt_init_metadata();
    if (var$1 === null)
        return null;
    return !(var$1 instanceof otji_JSWrapper) ? var$1 : var$1.$js;
},
otji_JSWrapper_javaToJs_jntYSA = $o => {
    $rt_init_metadata();
    if ($o === null)
        return null;
    return $o instanceof $rt_objcls() && $o instanceof otji_JSWrapper ? otji_JSWrapper_unwrap_jntYSA($o) : $o;
},
otp_Platform = $rt_classWithoutFields(),
otp_Platform_getArrayItem_PKtewy = $cls => {
    $rt_init_metadata();
    return $cls.$meta.item;
},
otp_Platform_getName_xWEGZR = $cls => {
    $rt_init_metadata();
    return $rt_str($cls.$meta.name);
},
otpp_ResourceAccessor = $rt_classWithoutFields();
$rt_packages([-1, "java", 0, "lang", -1, "js"
]);
$rt_metadata([jl_Object, "Object", 1, 0, [], 0, 3, 0, 0, [(o,r)=>o.$getClass_rQPqgt=r, $rt_wrapFunction0(jl_Object_getClass_rQPqgt), (o,r)=>o.$toString_VHLrpW=r, $rt_wrapFunction0(jl_Object_toString_VHLrpW), (o,r)=>o.$identity_I=r, $rt_wrapFunction0(jl_Object_identity_I)],
jl_AutoCloseable, 0, jl_Object, [], 3, 3, 0, 0, 0,
ji_Closeable, 0, jl_Object, [jl_AutoCloseable], 3, 3, 0, 0, 0,
ji_Flushable, 0, jl_Object, [], 3, 3, 0, 0, 0,
ji_OutputStream, 0, jl_Object, [ji_Closeable, ji_Flushable], 1, 3, 0, 0, [(o,r)=>o.$_init__V=r, $rt_wrapFunction0(ji_OutputStream__init__V)],
ji_FilterOutputStream, 0, ji_OutputStream, [], 0, 3, 0, 0, [(o,r)=>o.$_init__gjftmH=r, $rt_wrapFunction1(ji_FilterOutputStream__init__gjftmH)],
jl_Appendable, 0, jl_Object, [], 3, 3, 0, 0, 0,
ji_PrintStream, 0, ji_FilterOutputStream, [jl_Appendable], 0, 3, 0, 0, [(o,r)=>o.$_init__RHOATE=r, $rt_wrapFunction3(ji_PrintStream__init__RHOATE)],
ji_Serializable, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_CharSequence, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_AbstractStringBuilder, 0, jl_Object, [ji_Serializable, jl_CharSequence], 0, 0, 0, 0, [(o,r)=>o.$_init__V=r, $rt_wrapFunction0(jl_AbstractStringBuilder__init__V), (o,r)=>o.$_init__VI=r, $rt_wrapFunction1(jl_AbstractStringBuilder__init__VI), (o,r)=>o.$append_nfyWfb=r, $rt_wrapFunction1(jl_AbstractStringBuilder_append_nfyWfb), (o,r)=>o.$insert_hzKion=r, $rt_wrapFunction2(jl_AbstractStringBuilder_insert_hzKion), (o,r)=>o.$append_oqxyew=r, $rt_wrapFunction1(jl_AbstractStringBuilder_append_oqxyew), (o,r)=>o.$append_ylxaCJ=r,
$rt_wrapFunction2(jl_AbstractStringBuilder_append_ylxaCJ), (o,r)=>o.$insert_JzPOxM=r, $rt_wrapFunction3(jl_AbstractStringBuilder_insert_JzPOxM), (o,r)=>o.$append_OMqvAE=r, $rt_wrapFunction1(jl_AbstractStringBuilder_append_OMqvAE), (o,r)=>o.$insert_joXuZN=r, $rt_wrapFunction2(jl_AbstractStringBuilder_insert_joXuZN), (o,r)=>o.$insert_KMHMoz=r, $rt_wrapFunction2(jl_AbstractStringBuilder_insert_KMHMoz), (o,r)=>o.$ensureCapacity_VI=r, $rt_wrapFunction1(jl_AbstractStringBuilder_ensureCapacity_VI), (o,r)=>o.$toString_VHLrpW=r,
$rt_wrapFunction0(jl_AbstractStringBuilder_toString_VHLrpW)],
jl_Comparable, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_Boolean, 0, jl_Object, [ji_Serializable, jl_Comparable], 0, 3, 0, jl_Boolean_$callClinit, [(o,r)=>o.$_init__VZ=r, $rt_wrapFunction1(jl_Boolean__init__VZ)],
jl_Character, 0, jl_Object, [jl_Comparable], 0, 3, 0, jl_Character_$callClinit, 0,
jlr_AnnotatedElement, 0, jl_Object, [], 3, 3, 0, 0, 0,
jlr_Type, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_Class, 0, jl_Object, [jlr_AnnotatedElement, jlr_Type], 4, 3, 0, 0, [(o,r)=>o.$getPlatformClass_BSppjk=r, $rt_wrapFunction0(jl_Class_getPlatformClass_BSppjk), (o,r)=>o.$getName_VHLrpW=r, $rt_wrapFunction0(jl_Class_getName_VHLrpW), (o,r)=>o.$getComponentType_rQPqgt=r, $rt_wrapFunction0(jl_Class_getComponentType_rQPqgt)],
jl_Throwable, 0, jl_Object, [], 0, 3, 0, 0, [(o,r)=>o.$fillInStackTrace_MBBfFS=r, $rt_wrapFunction0(jl_Throwable_fillInStackTrace_MBBfFS), (o,r)=>o.$getMessage_VHLrpW=r, $rt_wrapFunction0(jl_Throwable_getMessage_VHLrpW), (o,r)=>o.$getCause_MBBfFS=r, $rt_wrapFunction0(jl_Throwable_getCause_MBBfFS)],
jl_Exception, 0, jl_Throwable, [], 0, 3, 0, 0, [(o,r)=>o.$_init__V=r, $rt_wrapFunction0(jl_Exception__init__V), (o,r)=>o.$_init__XjCHVS=r, $rt_wrapFunction1(jl_Exception__init__XjCHVS)],
jl_RuntimeException, 0, jl_Exception, [], 0, 3, 0, 0, [(o,r)=>o.$_init__V=r, $rt_wrapFunction0(jl_RuntimeException__init__V), (o,r)=>o.$_init__XjCHVS=r, $rt_wrapFunction1(jl_RuntimeException__init__XjCHVS)],
jl_ClassCastException, 0, jl_RuntimeException, [], 0, 3, 0, 0, 0,
jl_Cloneable, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_IllegalArgumentException, 0, jl_RuntimeException, [], 0, 3, 0, 0, [(o,r)=>o.$_init__V=r, $rt_wrapFunction0(jl_IllegalArgumentException__init__V)],
jl_IndexOutOfBoundsException, 0, jl_RuntimeException, [], 0, 3, 0, 0, [(o,r)=>o.$_init__V=r, $rt_wrapFunction0(jl_IndexOutOfBoundsException__init__V)],
jl_Number, 0, jl_Object, [ji_Serializable], 1, 3, 0, 0, [(o,r)=>o.$_init__V=r, $rt_wrapFunction0(jl_Number__init__V)],
jl_Integer, 0, jl_Number, [jl_Comparable], 0, 3, 0, jl_Integer_$callClinit, [(o,r)=>o.$_init__VI=r, $rt_wrapFunction1(jl_Integer__init__VI), (o,r)=>o.$toString_VHLrpW=r, $rt_wrapFunction0(jl_Integer_toString_VHLrpW)],
jl_Iterable, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_Math, 0, jl_Object, [], 4, 3, 0, 0, 0,
jl_NegativeArraySizeException, 0, jl_RuntimeException, [], 0, 3, 0, 0, [(o,r)=>o.$_init__V=r, $rt_wrapFunction0(jl_NegativeArraySizeException__init__V)],
jl_NullPointerException, 0, jl_RuntimeException, [], 0, 3, 0, 0, [(o,r)=>o.$_init__XjCHVS=r, $rt_wrapFunction1(jl_NullPointerException__init__XjCHVS), (o,r)=>o.$_init__V=r, $rt_wrapFunction0(jl_NullPointerException__init__V)],
jl_String, 0, jl_Object, [ji_Serializable, jl_Comparable, jl_CharSequence], 0, 3, 0, jl_String_$callClinit, [(o,r)=>o.$_init__V=r, $rt_wrapFunction0(jl_String__init__V), (o,r)=>o.$_init__V_C=r, $rt_wrapFunction1(jl_String__init__V_C), (o,r)=>o.$_init__HFyQDR=r, $rt_wrapFunction1(jl_String__init__HFyQDR), (o,r)=>o.$_init__V_CII=r, $rt_wrapFunction3(jl_String__init__V_CII), (o,r)=>o.$charAt_CI=r, $rt_wrapFunction1(jl_String_charAt_CI), (o,r)=>o.$length_I=r, $rt_wrapFunction0(jl_String_length_I), (o,r)=>o.$isEmpty_Z=r,
$rt_wrapFunction0(jl_String_isEmpty_Z), (o,r)=>o.$compareToIgnoreCase_nftnjR=r, $rt_wrapFunction1(jl_String_compareToIgnoreCase_nftnjR), (o,r)=>o.$toString_VHLrpW=r, $rt_wrapFunction0(jl_String_toString_VHLrpW), (o,r)=>o.$toCharArray__C=r, $rt_wrapFunction0(jl_String_toCharArray__C), (o,r)=>o.$equals_uKWEwg=r, $rt_wrapFunction1(jl_String_equals_uKWEwg), (o,r)=>o.$hashCode_I=r, $rt_wrapFunction0(jl_String_hashCode_I)],
ju_Comparator, 0, jl_Object, [], 3, 3, 0, 0, 0,
jl_String$_clinit_$lambda$_115_0, 0, jl_Object, [ju_Comparator], 0, 3, 0, 0, [(o,r)=>o.$_init__V=r, $rt_wrapFunction0(jl_String$_clinit_$lambda$_115_0__init__V), (o,r)=>o.$compare_ZygPOh=r, $rt_wrapFunction2(jl_String$_clinit_$lambda$_115_0_compare_ZygPOh), (o,r)=>o.$compare_fDwPQb=r, $rt_wrapFunction2(jl_String$_clinit_$lambda$_115_0_compare_fDwPQb)],
jl_StringBuilder, 0, jl_AbstractStringBuilder, [jl_Appendable], 0, 3, 0, 0, [(o,r)=>o.$_init__V=r, $rt_wrapFunction0(jl_StringBuilder__init__V), (o,r)=>o.$append_ZOYxhs=r, $rt_wrapFunction1(jl_StringBuilder_append_ZOYxhs), (o,r)=>o.$append_ZSDQSM=r, $rt_wrapFunction1(jl_StringBuilder_append_ZSDQSM), (o,r)=>o.$append_zwKTwE=r, $rt_wrapFunction1(jl_StringBuilder_append_zwKTwE), (o,r)=>o.$insert_JDogxs=r, $rt_wrapFunction2(jl_StringBuilder_insert_JDogxs), (o,r)=>o.$insert_CiShRV=r, $rt_wrapFunction2(jl_StringBuilder_insert_CiShRV),
(o,r)=>o.$insert_yVTRbO=r, $rt_wrapFunction2(jl_StringBuilder_insert_yVTRbO), (o,r)=>o.$toString_VHLrpW=r, $rt_wrapFunction0(jl_StringBuilder_toString_VHLrpW), (o,r)=>o.$ensureCapacity_VI=r, $rt_wrapFunction1(jl_StringBuilder_ensureCapacity_VI), (o,r)=>o.$insert_KMHMoz=r, $rt_wrapFunction2(jl_StringBuilder_insert_KMHMoz), (o,r)=>o.$insert_joXuZN=r, $rt_wrapFunction2(jl_StringBuilder_insert_joXuZN), (o,r)=>o.$insert_hzKion=r, $rt_wrapFunction2(jl_StringBuilder_insert_hzKion)],
jl_StringIndexOutOfBoundsException, 0, jl_IndexOutOfBoundsException, [], 0, 3, 0, 0, [(o,r)=>o.$_init__V=r, $rt_wrapFunction0(jl_StringIndexOutOfBoundsException__init__V)],
jl_System, 0, jl_Object, [], 4, 3, 0, 0, 0,
jlr_Array, 0, jl_Object, [], 4, 3, 0, 0, 0,
jnc_Charset, 0, jl_Object, [jl_Comparable], 1, 3, 0, 0, 0,
ju_Collection, 0, jl_Object, [jl_Iterable], 3, 3, 0, 0, 0,
ju_AbstractCollection, 0, jl_Object, [ju_Collection], 1, 3, 0, 0, [(o,r)=>o.$_init__V=r, $rt_wrapFunction0(ju_AbstractCollection__init__V)],
ju_SequencedCollection, 0, jl_Object, [ju_Collection], 3, 3, 0, 0, 0,
ju_List, 0, jl_Object, [ju_SequencedCollection], 3, 3, 0, 0, 0,
ju_AbstractList, 0, ju_AbstractCollection, [ju_List], 1, 3, 0, 0, [(o,r)=>o.$_init__V=r, $rt_wrapFunction0(ju_AbstractList__init__V)],
ju_Map, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_AbstractMap, 0, jl_Object, [ju_Map], 1, 3, 0, 0, [(o,r)=>o.$_init__V=r, $rt_wrapFunction0(ju_AbstractMap__init__V)],
ju_RandomAccess, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_ArrayList, 0, ju_AbstractList, [jl_Cloneable, ji_Serializable, ju_RandomAccess], 0, 3, 0, 0, [(o,r)=>o.$_init__V=r, $rt_wrapFunction0(ju_ArrayList__init__V), (o,r)=>o.$_init__VI=r, $rt_wrapFunction1(ju_ArrayList__init__VI), (o,r)=>o.$ensureCapacity_VI=r, $rt_wrapFunction1(ju_ArrayList_ensureCapacity_VI), (o,r)=>o.$add_uKWEwg=r, $rt_wrapFunction1(ju_ArrayList_add_uKWEwg), (o,r)=>o.$forEach_bOKmPa=r, $rt_wrapFunction1(ju_ArrayList_forEach_bOKmPa)],
ju_Arrays, 0, jl_Object, [], 0, 3, 0, 0, 0,
ju_ConcurrentModificationException, 0, jl_RuntimeException, [], 0, 3, 0, 0, [(o,r)=>o.$_init__V=r, $rt_wrapFunction0(ju_ConcurrentModificationException__init__V)],
ju_HashMap, 0, ju_AbstractMap, [jl_Cloneable, ji_Serializable], 0, 3, 0, 0, [(o,r)=>o.$newElementArray_HaDQXJ=r, $rt_wrapFunction1(ju_HashMap_newElementArray_HaDQXJ), (o,r)=>o.$_init__V=r, $rt_wrapFunction0(ju_HashMap__init__V), (o,r)=>o.$_init__VI=r, $rt_wrapFunction1(ju_HashMap__init__VI), (o,r)=>o.$_init__VIF=r, $rt_wrapFunction2(ju_HashMap__init__VIF), (o,r)=>o.$findNonNullKeyEntry_RrVLlf=r, $rt_wrapFunction3(ju_HashMap_findNonNullKeyEntry_RrVLlf), (o,r)=>o.$findNullKeyEntry_QqMKmf=r, $rt_wrapFunction0(ju_HashMap_findNullKeyEntry_QqMKmf),
(o,r)=>o.$put_tsMSwf=r, $rt_wrapFunction2(ju_HashMap_put_tsMSwf), (o,r)=>o.$rehash_VI=r, $rt_wrapFunction1(ju_HashMap_rehash_VI), (o,r)=>o.$rehash_V=r, $rt_wrapFunction0(ju_HashMap_rehash_V), (o,r)=>o.$forEach_bjTrMv=r, $rt_wrapFunction1(ju_HashMap_forEach_bjTrMv)]]);
$rt_metadata([ju_Map$Entry, 0, jl_Object, [], 3, 3, 0, 0, 0,
ju_MapEntry, 0, jl_Object, [ju_Map$Entry, jl_Cloneable], 0, 0, 0, 0, [(o,r)=>o.$_init__PLTLFS=r, $rt_wrapFunction2(ju_MapEntry__init__PLTLFS)],
ju_HashMap$HashEntry, 0, ju_MapEntry, [], 0, 0, 0, 0, [(o,r)=>o.$_init__moeQBN=r, $rt_wrapFunction2(ju_HashMap$HashEntry__init__moeQBN)],
ju_Objects, 0, jl_Object, [], 4, 3, 0, 0, 0,
juf_BiConsumer, 0, jl_Object, [], 3, 3, 0, 0, 0,
juf_Consumer, 0, jl_Object, [], 3, 3, 0, 0, 0,
j_Iface, 0, jl_Object, [], 3, 3, 0, 0, 0,
j_Bar, "Bar", 2, jl_Object, [j_Iface], 0, 3, 0, 0, [(o,r)=>o.$_init__XjCHVS=r, $rt_wrapFunction1(j_Bar__init__XjCHVS), (o,r)=>o.$foo_VHLrpW=r, $rt_wrapFunction0(j_Bar_foo_VHLrpW)],
j_Baz, "Baz", 2, j_Bar, [], 0, 3, 0, 0, [(o,r)=>o.$_init__XjCHVS=r, $rt_wrapFunction1(j_Baz__init__XjCHVS), (o,r)=>o.$foo_VHLrpW=r, $rt_wrapFunction0(j_Baz_foo_VHLrpW)],
j_JsMain, 0, jl_Object, [], 0, 3, 0, j_JsMain_$callClinit, [(o,r)=>o.$foo_VHLrpW=r, $rt_wrapFunction0(j_JsMain_foo_VHLrpW), (o,r)=>o.$_init__mmFgnD=r, $rt_wrapFunction1(j_JsMain__init__mmFgnD)],
otj_JSObject, 0, jl_Object, [], 3, 3, 0, 0, 0,
j_JsMain$JsMainCtor, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
j_JsMain$_clinit_$lambda$_7_0, 0, jl_Object, [j_JsMain$JsMainCtor], 0, 3, 0, 0, [(o,r)=>o.$_init__V=r, $rt_wrapFunction0(j_JsMain$_clinit_$lambda$_7_0__init__V), (o,r)=>o.$create_yGwQxM=r, $rt_wrapFunction1(j_JsMain$_clinit_$lambda$_7_0_create_yGwQxM)],
otjb_TimerHandler, 0, jl_Object, [otj_JSObject], 3, 3, 0, 0, 0,
j_JsMain$main$lambda$_2_0, 0, jl_Object, [otjb_TimerHandler], 0, 3, 0, 0, [(o,r)=>o.$_init__V=r, $rt_wrapFunction0(j_JsMain$main$lambda$_2_0__init__V), (o,r)=>o.$onTimer_V=r, $rt_wrapFunction0(j_JsMain$main$lambda$_2_0_onTimer_V)],
j_JsMain$main$lambda$_2_1, 0, jl_Object, [juf_Consumer], 0, 3, 0, 0, [(o,r)=>o.$_init__lLaEnR=r, $rt_wrapFunction1(j_JsMain$main$lambda$_2_1__init__lLaEnR), (o,r)=>o.$accept_HFyQDR=r, $rt_wrapFunction1(j_JsMain$main$lambda$_2_1_accept_HFyQDR), (o,r)=>o.$accept_XjCHVS=r, $rt_wrapFunction1(j_JsMain$main$lambda$_2_1_accept_XjCHVS)],
j_JsMain$main$lambda$_2_2, 0, jl_Object, [juf_BiConsumer], 0, 3, 0, 0, [(o,r)=>o.$_init__V=r, $rt_wrapFunction0(j_JsMain$main$lambda$_2_2__init__V), (o,r)=>o.$accept_PLTLFS=r, $rt_wrapFunction2(j_JsMain$main$lambda$_2_2_accept_PLTLFS), (o,r)=>o.$accept_CeLKBX=r, $rt_wrapFunction2(j_JsMain$main$lambda$_2_2_accept_CeLKBX)],
j_Service1, 0, jl_Object, [], 0, 3, 0, j_Service1_$callClinit, [(o,r)=>o.$_init__V=r, $rt_wrapFunction0(j_Service1__init__V), (o,r)=>o.$foo_VHLrpW=r, $rt_wrapFunction0(j_Service1_foo_VHLrpW)],
j_Service2, 0, jl_Object, [], 0, 3, 0, 0, [(o,r)=>o.$_init__V=r, $rt_wrapFunction0(j_Service2__init__V), (o,r)=>o.$foo_VHLrpW=r, $rt_wrapFunction0(j_Service2_foo_VHLrpW)],
j_Service3, 0, jl_Object, [], 0, 3, 0, 0, [(o,r)=>o.$_init__linHFy=r, $rt_wrapFunction2(j_Service3__init__linHFy), (o,r)=>o.$foo_VHLrpW=r, $rt_wrapFunction0(j_Service3_foo_VHLrpW)],
otci_Base46, 0, jl_Object, [], 4, 3, 0, 0, 0,
otci_CharFlow, 0, jl_Object, [], 0, 3, 0, 0, [(o,r)=>o.$_init__V_C=r, $rt_wrapFunction1(otci_CharFlow__init__V_C)],
otci_IntegerUtil, 0, jl_Object, [], 4, 3, 0, 0, 0,
otcic_JsConsolePrintStream, 0, ji_PrintStream, [], 1, 3, 0, 0, [(o,r)=>o.$_init__V=r, $rt_wrapFunction0(otcic_JsConsolePrintStream__init__V), (o,r)=>o.$println_XjCHVS=r, $rt_wrapFunction1(otcic_JsConsolePrintStream_println_XjCHVS), (o,r)=>o.$println_VI=r, $rt_wrapFunction1(otcic_JsConsolePrintStream_println_VI), (o,r)=>o.$println_VZ=r, $rt_wrapFunction1(otcic_JsConsolePrintStream_println_VZ)],
otcic_JSStdoutPrintStream, 0, otcic_JsConsolePrintStream, [], 0, 3, 0, 0, [(o,r)=>o.$_init__V=r, $rt_wrapFunction0(otcic_JSStdoutPrintStream__init__V), (o,r)=>o.$print_XjCHVS=r, $rt_wrapFunction1(otcic_JSStdoutPrintStream_print_XjCHVS)],
otciu_CharMapping, 0, jl_Object, [], 0, 3, 0, 0, [(o,r)=>o.$_init__V_I_I=r, $rt_wrapFunction2(otciu_CharMapping__init__V_I_I)],
otciu_UnicodeHelper, 0, jl_Object, [], 4, 3, 0, 0, 0,
otji_JS, 0, jl_Object, [], 4, 3, 0, 0, 0,
otji_JSWrapper, 0, jl_Object, [], 4, 3, 0, 0, 0,
otp_Platform, 0, jl_Object, [], 4, 3, 0, 0, 0,
otpp_ResourceAccessor, 0, jl_Object, [], 4, 0, 0, 0, 0]);
let $rt_charArrayCls = $rt_arraycls($rt_charcls),
$rt_intArrayCls = $rt_arraycls($rt_intcls);
$rt_stringPool(["null", "false", "true", "", "Bar", "Baz", "Main:", "item1", "item2", "item3", "HELLO", "hello", "world", "x", "y", "setTimeout handler", "Service1 constructor", "Service", "Service1 static constructor", "Service2", "Service3: ", ", ", "0", "\n"]);
jl_String.prototype.toString = function() {
    return $rt_ustr(this);
};
jl_String.prototype.valueOf = jl_String.prototype.toString;
jl_Object.prototype.toString = function() {
    return $rt_ustr(jl_Object_toString_VHLrpW(this));
};
jl_Object.prototype.__teavm_class__ = function() {
    return $dbg_class(this);
};
let $rt_export_main = $rt_mainStarter(j_JsMain_main_WiJjkv);
$rt_export_main.javaException = $rt_javaException;
let $rt_jso_marker = Symbol('jsoClass');
(() => {
    let c;
    c = j_JsMain$_clinit_$lambda$_7_0.prototype;
    c.create = $rt_callWithReceiver(j_JsMain$_clinit_$lambda$_7_0_create$exported$0_PmAeiP);
    c = j_JsMain$main$lambda$_2_0.prototype;
    c.onTimer = $rt_callWithReceiver(j_JsMain$main$lambda$_2_0_onTimer$exported$0_ompCkp);
})();
exports.jl_Boolean_TRUE$get_BuxLVW = jl_Boolean_TRUE$get_BuxLVW;
exports.jl_Boolean_TRUE$set_xmeeTf = jl_Boolean_TRUE$set_xmeeTf;
exports.jl_Boolean_FALSE$get_BuxLVW = jl_Boolean_FALSE$get_BuxLVW;
exports.jl_Boolean_FALSE$set_xmeeTf = jl_Boolean_FALSE$set_xmeeTf;
exports.jl_Boolean_TYPE$get_rQPqgt = jl_Boolean_TYPE$get_rQPqgt;
exports.jl_Boolean_TYPE$set_GfbAYs = jl_Boolean_TYPE$set_GfbAYs;
exports.jl_Character_TYPE$get_rQPqgt = jl_Character_TYPE$get_rQPqgt;
exports.jl_Character_TYPE$set_GfbAYs = jl_Character_TYPE$set_GfbAYs;
exports.jl_Character_lowerCaseMapping$get_RZKDDF = jl_Character_lowerCaseMapping$get_RZKDDF;
exports.jl_Character_lowerCaseMapping$set_ZUCuEm = jl_Character_lowerCaseMapping$set_ZUCuEm;
exports.jl_Character_characterCache$get_jBueGa = jl_Character_characterCache$get_jBueGa;
exports.jl_Character_characterCache$set_waRJaZ = jl_Character_characterCache$set_waRJaZ;
exports.jl_Character_$$metadata$$0$get_WDWuRL = jl_Character_$$metadata$$0$get_WDWuRL;
exports.jl_Character_$$metadata$$0$set_tTBCfR = jl_Character_$$metadata$$0$set_tTBCfR;
exports.jl_Integer_TYPE$get_rQPqgt = jl_Integer_TYPE$get_rQPqgt;
exports.jl_Integer_TYPE$set_GfbAYs = jl_Integer_TYPE$set_GfbAYs;
exports.jl_Integer_integerCache$get_JiUhVo = jl_Integer_integerCache$get_JiUhVo;
exports.jl_Integer_integerCache$set_KsSsFz = jl_Integer_integerCache$set_KsSsFz;
exports.jl_String_EMPTY_CHARS$get__C = jl_String_EMPTY_CHARS$get__C;
exports.jl_String_EMPTY_CHARS$set_V_C = jl_String_EMPTY_CHARS$set_V_C;
exports.jl_String_EMPTY$get_VHLrpW = jl_String_EMPTY$get_VHLrpW;
exports.jl_String_EMPTY$set_XjCHVS = jl_String_EMPTY$set_XjCHVS;
exports.jl_String_CASE_INSENSITIVE_ORDER$get_kbAFBE = jl_String_CASE_INSENSITIVE_ORDER$get_kbAFBE;
exports.jl_String_CASE_INSENSITIVE_ORDER$set_anNSmD = jl_String_CASE_INSENSITIVE_ORDER$set_anNSmD;
exports.jl_System_outCache$get_JQwxsu = jl_System_outCache$get_JQwxsu;
exports.jl_System_outCache$set_lLaEnR = jl_System_outCache$set_lLaEnR;
exports.j_Service1_staticNum$get_I = j_Service1_staticNum$get_I;
exports.j_Service1_staticNum$set_VI = j_Service1_staticNum$set_VI;
exports.main = $rt_export_main;
exports.main();