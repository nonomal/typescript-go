//// [tests/cases/compiler/illegalSuperCallsInConstructor.ts] ////

//// [illegalSuperCallsInConstructor.ts]
class Base {
    x: string;
}
 
class Derived extends Base {
    constructor() {
        var r2 = () => super();
        var r3 = () => { super(); }
        var r4 = function () { super(); }
        var r5 = {
            get foo() {
                super();
                return 1;
            },
            set foo(v: number) {
                super();
            }
        }
    }
}

//// [illegalSuperCallsInConstructor.js]
class Base {
    x;
}
class Derived extends Base {
    constructor() {
        var r2 = () => super();
        var r3 = () => { super(); };
        var r4 = function () { super(); };
        var r5 = {
            get foo() {
                super();
                return 1;
            },
            set foo(v) {
                super();
            }
        };
    }
}
