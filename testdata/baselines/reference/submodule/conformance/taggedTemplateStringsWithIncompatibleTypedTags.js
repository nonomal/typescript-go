//// [tests/cases/conformance/es6/templates/taggedTemplateStringsWithIncompatibleTypedTags.ts] ////

//// [taggedTemplateStringsWithIncompatibleTypedTags.ts]
interface I {
    (stringParts: TemplateStringsArray, ...rest: boolean[]): I;
    g: I;
    h: I;
    member: I;
    thisIsNotATag(x: string): void
    [x: number]: I;
}

var f: I;

f `abc`

f `abc${1}def${2}ghi`;

f `abc`.member

f `abc${1}def${2}ghi`.member;

f `abc`["member"];

f `abc${1}def${2}ghi`["member"];

f `abc`[0].member `abc${1}def${2}ghi`;

f `abc${1}def${2}ghi`["member"].member `abc${1}def${2}ghi`;

f `abc${ true }def${ true }ghi`["member"].member `abc${ 1 }def${ 2 }ghi`;

f.thisIsNotATag(`abc`);

f.thisIsNotATag(`abc${1}def${2}ghi`);


//// [taggedTemplateStringsWithIncompatibleTypedTags.js]
var f;
f `abc`;
f `abc${1}def${2}ghi`;
f `abc`.member;
f `abc${1}def${2}ghi`.member;
f `abc`["member"];
f `abc${1}def${2}ghi`["member"];
f `abc`[0].member `abc${1}def${2}ghi`;
f `abc${1}def${2}ghi`["member"].member `abc${1}def${2}ghi`;
f `abc${true}def${true}ghi`["member"].member `abc${1}def${2}ghi`;
f.thisIsNotATag(`abc`);
f.thisIsNotATag(`abc${1}def${2}ghi`);
