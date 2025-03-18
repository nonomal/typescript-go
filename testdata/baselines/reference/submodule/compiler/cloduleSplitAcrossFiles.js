//// [tests/cases/compiler/cloduleSplitAcrossFiles.ts] ////

//// [cloduleSplitAcrossFiles_class.ts]
class D { }

//// [cloduleSplitAcrossFiles_module.ts]
module D {
    export var y = "hi";
}
D.y;

//// [cloduleSplitAcrossFiles_class.js]
class D {
}
//// [cloduleSplitAcrossFiles_module.js]
var D;
(function (D) {
    D.y = "hi";
})(D || (D = {}));
D.y;
