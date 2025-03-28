//// [tests/cases/conformance/types/typeRelationships/typeInference/keyofInferenceIntersectsResults.ts] ////

//// [keyofInferenceIntersectsResults.ts]
interface X {
    a: string;
    b: string;
}

declare function foo<T = X>(x: keyof T, y: keyof T): T;
declare function bar<T>(x: keyof T, y: keyof T): T;

const a = foo<X>('a', 'b'); // compiles cleanly
const b = foo('a', 'b');    // also clean
const c = bar('a', 'b');    // still clean

//// [keyofInferenceIntersectsResults.js]
const a = foo('a', 'b'); // compiles cleanly
const b = foo('a', 'b'); // also clean
const c = bar('a', 'b'); // still clean
