//// [tests/cases/conformance/types/contextualTypes/partiallyAnnotatedFunction/partiallyAnnotatedFunctionWitoutTypeParameter.ts] ////

//// [partiallyAnnotatedFunctionWitoutTypeParameter.ts]
// simple case
declare function simple(f: (a: number, b: number) => void): {}

simple((a: number, b) => {})
simple((a, b: number) => {})


//// [partiallyAnnotatedFunctionWitoutTypeParameter.js]
simple((a, b) => { });
simple((a, b) => { });
