//// [tests/cases/compiler/internalAliasFunctionInsideLocalModuleWithoutExportAccessError.ts] ////

//// [internalAliasFunctionInsideLocalModuleWithoutExportAccessError.ts]
export module a {
    export function foo(x: number) {
        return x;
    }
}

export module c {
    import b = a.foo;
    var bVal = b(10);
    export var bVal2 = b;
}
var d = c.b(11);

//// [internalAliasFunctionInsideLocalModuleWithoutExportAccessError.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.c = exports.a = void 0;
var a;
(function (a) {
    function foo(x) {
        return x;
    }
    a.foo = foo;
})(a || (exports.a = a = {}));
var c;
(function (c) {
    var b = a.foo;
    var bVal = b(10);
    c.bVal2 = b;
})(c || (exports.c = c = {}));
var d = c.b(11);
