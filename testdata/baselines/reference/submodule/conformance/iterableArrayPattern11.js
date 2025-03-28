//// [tests/cases/conformance/es6/destructuring/iterableArrayPattern11.ts] ////

//// [iterableArrayPattern11.ts]
class Bar { x }
class Foo extends Bar { y }
class FooIterator {
    next() {
        return {
            value: new Foo,
            done: false
        };
    }

    [Symbol.iterator]() {
        return this;
    }
}

function fun([a, b] = new FooIterator) { }
fun(new FooIterator);


//// [iterableArrayPattern11.js]
class Bar {
    x;
}
class Foo extends Bar {
    y;
}
class FooIterator {
    next() {
        return {
            value: new Foo,
            done: false
        };
    }
    [Symbol.iterator]() {
        return this;
    }
}
function fun([a, b] = new FooIterator) { }
fun(new FooIterator);
