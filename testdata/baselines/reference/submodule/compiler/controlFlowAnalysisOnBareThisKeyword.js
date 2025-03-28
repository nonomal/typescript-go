//// [tests/cases/compiler/controlFlowAnalysisOnBareThisKeyword.ts] ////

//// [controlFlowAnalysisOnBareThisKeyword.ts]
declare function isBig(x: any): x is { big: true };
function bigger(this: {}) {
    if (isBig(this)) {
        this.big; // Expect property to exist
    }
}

function bar(this: string | number) {
    if (typeof this === "string") {
        const x: string = this;
    }
}

//// [controlFlowAnalysisOnBareThisKeyword.js]
function bigger() {
    if (isBig(this)) {
        this.big; // Expect property to exist
    }
}
function bar() {
    if (typeof this === "string") {
        const x = this;
    }
}
