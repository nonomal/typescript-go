//// [tests/cases/compiler/unicodeEscapesInNames01.ts] ////

//// [identifierVariableWithEscape1.ts]
export let \u0078 = 10;
x++;

//// [identifierVariableWithEscape2.ts]
export let x\u0078 = 10;
xx++;

//// [identifierVariableWithExtendedEscape1.ts]
export let \u{78} = 10;
x++;

//// [identifierVariableWithExtendedEscape2.ts]
export let x\u{78} = 10;
xx++;

//// [IdentifierNameWithEscape1.ts]
export class IdentifierNameWithEscape1 {
    \u0078: number;

    constructor() {
        this.\u0078 = 0;
    }

    doThing() {
        this.x = 42;
    }
}

//// [IdentifierNameWithEscape2.ts]
export class IdentifierNameWithEscape2 {
    x\u0078: number;

    constructor() {
        this.x\u0078 = 0;
    }

    doThing() {
        this.xx = 42;
    }
}

//// [IdentifierNameWithExtendedEscape1.ts]
export class IdentifierNameWithExtendedEscape1 {
    \u{78}: number;

    constructor() {
        this.\u{78} = 0;
    }

    doThing() {
        this.x = 42;
    }
}

//// [IdentifierNameWithExtendedEscape2.ts]
export class IdentifierNameWithExtendedEscape2 {
    x\u{78}: number;

    constructor() {
        this.x\u{78} = 0;
    }

    doThing() {
        this.xx = 42;
    }
}

//// [PrivateIdentifierNameWithEscape1.ts]
export class PrivateIdentifierWithEscape1 {
    #\u0078: number;

    constructor() {
        this.#\u0078 = 0;
    }

    doThing() {
        this.#x = 42;
    }
}

//// [PrivateIdentifierNameWithEscape2.ts]
export class PrivateIdentifierWithEscape2 {
    #x\u0078: number;

    constructor() {
        this.#x\u0078 = 0;
    }

    doThing() {
        this.#xx = 42;
    }
}

//// [PrivateIdentifierNameWithExtendedEscape1.ts]
export class PrivateIdentifierWithExtendedEscape1 {
    #\u{78}: number;

    constructor() {
        this.#\u{78} = 0;
    }

    doThing() {
        this.#x = 42;
    }
}

//// [PrivateIdentifierNameWithExtendedEscape2.ts]
export class PrivateIdentifierWithExtendedEscape2 {
    #x\u{78}: number;

    constructor() {
        this.#x\u{78} = 0;
    }

    doThing() {
        this.#xx = 42;
    }
}


//// [identifierVariableWithEscape1.js]
export let \u0078 = 10;
x++;
//// [identifierVariableWithEscape2.js]
export let x\u0078 = 10;
xx++;
//// [identifierVariableWithExtendedEscape1.js]
export let \u{78} = 10;
x++;
//// [identifierVariableWithExtendedEscape2.js]
export let x\u{78} = 10;
xx++;
//// [IdentifierNameWithEscape1.js]
export class IdentifierNameWithEscape1 {
    \u0078;
    constructor() {
        this.\u0078 = 0;
    }
    doThing() {
        this.x = 42;
    }
}
//// [IdentifierNameWithEscape2.js]
export class IdentifierNameWithEscape2 {
    x\u0078;
    constructor() {
        this.x\u0078 = 0;
    }
    doThing() {
        this.xx = 42;
    }
}
//// [IdentifierNameWithExtendedEscape1.js]
export class IdentifierNameWithExtendedEscape1 {
    \u{78};
    constructor() {
        this.\u{78} = 0;
    }
    doThing() {
        this.x = 42;
    }
}
//// [IdentifierNameWithExtendedEscape2.js]
export class IdentifierNameWithExtendedEscape2 {
    x\u{78};
    constructor() {
        this.x\u{78} = 0;
    }
    doThing() {
        this.xx = 42;
    }
}
//// [PrivateIdentifierNameWithEscape1.js]
export class PrivateIdentifierWithEscape1 {
    #\u0078;
    constructor() {
        this.#\u0078 = 0;
    }
    doThing() {
        this.#x = 42;
    }
}
//// [PrivateIdentifierNameWithEscape2.js]
export class PrivateIdentifierWithEscape2 {
    #x\u0078;
    constructor() {
        this.#x\u0078 = 0;
    }
    doThing() {
        this.#xx = 42;
    }
}
//// [PrivateIdentifierNameWithExtendedEscape1.js]
export class PrivateIdentifierWithExtendedEscape1 {
    #\u{78};
    constructor() {
        this.#\u{78} = 0;
    }
    doThing() {
        this.#x = 42;
    }
}
//// [PrivateIdentifierNameWithExtendedEscape2.js]
export class PrivateIdentifierWithExtendedEscape2 {
    #x\u{78};
    constructor() {
        this.#x\u{78} = 0;
    }
    doThing() {
        this.#xx = 42;
    }
}
