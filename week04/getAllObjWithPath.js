
var set = new Set();
var objects = [
    Array,
    eval,
    isFinite,
    isNaN,
    parseFloat,
    parseInt,
    decodeURI,
    decodeURIComponent,
    encodeURI,
    encodeURIComponent,
    ,
    Date,
    RegExp,
    Promise,
    Proxy,
    Map,
    WeakMap,
    Set,
    WeakSet,
    Function,
    Boolean,
    String,
    Number,
    Symbol,
    Object,
    Error,
    EvalError,
    RangeError,
    ReferenceError,
    SyntaxError,
    TypeError,
    URIError,
    ArrayBuffer,
    SharedArrayBuffer,
    DataView,
    Float32Array,
    Float64Array,
    Int8Array,
    Int16Array,
    Int32Array,
    Uint8Array,
    Uint16Array,
    Uint32Array,
    Uint8ClampedArray,
    Atomics,
    JSON,
    Math,
    Reflect];
var objectPaths = [
    'Array',

    'eval',
    'isFinite',
    'isNaN',
    'parseFloat',
    'parseInt',
    'decodeURI',
    'decodeURIComponent',
    'encodeURI',
    'encodeURIComponent',
    'Date',
    'RegExp',
    'Promise',
    'Proxy',
    'Map',
    'WeakMap',
    'Set',
    'WeakSet',
    'Function',
    'Boolean',
    'String',
    'Number',
    'Symbol',
    'Object',
    'Error',
    'EvalError',
    'RangeError',
    'ReferenceError',
    'SyntaxError',
    'TypeError',
    'URIError',
    'ArrayBuffer',
    'SharedArrayBuffer',
    'DataView',
    'Float32Array',
    'Float64Array',
    'Int8Array',
    'Int16Array',
    'Int32Array',
    'Uint8Array',
    'Uint16Array',
    'Uint32Array',
    'Uint8ClampedArray',
    'Atomics',
    'JSON',
    'Math',
    'Reflect'];

let objWithPath = new WeakMap();
for(let i = 0; i < objectPaths.length;i++){
  objWithPath.set(objects[i],[objectPaths[i]])
}
// console.log( quene[1].obj)

objects.forEach(o => set.add(o));

for(var i = 0; i < objects.length; i++) {
    var o = objects[i];
    var cur_path = objWithPath.get(o);
    for(var p of Object.getOwnPropertyNames(o)) {
        var d = Object.getOwnPropertyDescriptor(o, p)
        if( (d.value !== null && typeof d.value === "object") || (typeof d.value === "function"))
            if(!set.has(d.value))
                set.add(d.value), objects.push(d.value);
                console.log(o);
                objWithPath.set(d.value,cur_path.concat([p]) )
        if( d.get )
            if(!set.has(d.get))
                set.add(d.get), objects.push(d.get);
                objWithPath.set(d.value,cur_path.concat([p]) );
        if( d.set )
            if(!set.has(d.set))
                set.add(d.set), objects.push(d.set);
                objWithPath.set(d.value,cur_path.concat([p]) );
    }
}

console.log(objWithPath[objects[1]]);