const chai = require('chai');

const expect = chai.expect;

function checkValue(fn, value, expected) {
    expect(fn(value)).to.be.eq(expected, `${fn.name}(${value}) != ${expected}`)
}

describe("It's True", () => {
    describe("itsTrue function", () => {
        const itsTrue = require('../index');
        it("should work with booleans.", () => {
            checkValue(itsTrue, true, true);
            checkValue(itsTrue, false, false);
        });
        it("should work with Booleans()", () => {
            checkValue(itsTrue, new Boolean(true), true);
            checkValue(itsTrue, new Boolean(false), false);
        });
        it("should work with numbers (1 -> true, All else -> false)", () => {
            checkValue(itsTrue, 1, true);
            checkValue(itsTrue, 1.0, true);
            checkValue(itsTrue, 0, false);
            checkValue(itsTrue, 2, false);
            checkValue(itsTrue, Infinity, false);
            checkValue(itsTrue, -1, false);
        });
        it("should work with arrays, objects, functions. All -> false", () => {
            checkValue(itsTrue, [], false);
            checkValue(itsTrue, [1], false);
            checkValue(itsTrue, {}, false);
            checkValue(itsTrue, {value: true}, false);
        });
        it("should work with strings. 'true' (different cases) -> true, '1' -> true", () => {
            checkValue(itsTrue, "true", true);
            checkValue(itsTrue, "True", true);
            checkValue(itsTrue, "TRUE", true);
            checkValue(itsTrue, "truE", true);

            checkValue(itsTrue, "1", true);

            checkValue(itsTrue, "false", false);
            checkValue(itsTrue, "", false);
            checkValue(itsTrue, "yes", false);
        });
        it("should work with Strings. new String('true') (different cases) -> true, new String('1') -> true", () => {
            checkValue(itsTrue, new String("true"), true);
            checkValue(itsTrue, new String("True"), true);
            checkValue(itsTrue, new String("TRUE"), true);
            checkValue(itsTrue, new String("truE"), true);

            checkValue(itsTrue, new String("1"), true);

            checkValue(itsTrue, new String("false"), false);
            checkValue(itsTrue, new String(""), false);
            checkValue(itsTrue, new String("yes"), false);
        });
        it("should work with undefined, null, NaN. All -> false", () => {
            checkValue(itsTrue, undefined, false);
            checkValue(itsTrue, null, false);
            checkValue(itsTrue, NaN, false);
        });
    });
});