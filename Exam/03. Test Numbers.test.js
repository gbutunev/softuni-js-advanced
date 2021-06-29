const { assert } = require("chai");

const testNumbers = {
    sumNumbers: function (num1, num2) {
        let sum = 0;

        if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
            return undefined;
        } else {
            sum = (num1 + num2).toFixed(2);
            return sum
        }
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input % 2 === 0) {
            return 'The number is even!';
        } else {
            return 'The number is odd!';
        }

    },
    averageSumArray: function (arr) {

        let arraySum = 0;

        for (let i = 0; i < arr.length; i++) {
            arraySum += arr[i]
        }

        return arraySum / arr.length
    }
};

describe("Tests", function () {
    describe("sumNumber", function () {
        it("should return undefined", function () {
            assert.isUndefined(testNumbers.sumNumbers());
            assert.isUndefined(testNumbers.sumNumbers({}, {}));
            assert.isUndefined(testNumbers.sumNumbers([], []));
            assert.isUndefined(testNumbers.sumNumbers(5));
            assert.isUndefined(testNumbers.sumNumbers(5, {}));
            assert.isUndefined(testNumbers.sumNumbers({}, 5));
            assert.isUndefined(testNumbers.sumNumbers('asdf'));
            assert.isUndefined(testNumbers.sumNumbers('asdf', 'asdf'));
        });

        it("should return int", () => {
            let exp = '10.00';
            assert.equal(testNumbers.sumNumbers(5, 5), exp);
        });

        it("should return 0", () => {
            let exp = '0.00';
            assert.equal(testNumbers.sumNumbers(-5, 5), exp);
        });

        it("should return float", () => {
            let exp = '6.50';
            assert.equal(testNumbers.sumNumbers(6, 0.5), exp);
        });

        it("should return neg", () => {
            let exp = '-10.00';
            assert.equal(testNumbers.sumNumbers(-5, -5), exp);
        });
    });

    describe("numChecker", function () {
        it("should throw", function () {
            assert.throws(() => testNumbers.numberChecker(), 'The input is not a number!');
            assert.throws(() => testNumbers.numberChecker('asdf'), 'The input is not a number!');
            assert.throws(() => testNumbers.numberChecker({}), 'The input is not a number!');
            // assert.throws(() => testNumbers.numberChecker([]), 'The input is not a number!');
        });

        it('should be odd', () => {
            let exp = 'The number is odd!';
            assert.equal(testNumbers.numberChecker(5), exp);
            assert.equal(testNumbers.numberChecker(-5), exp);
        });

        it('should be even', () => {
            let exp = 'The number is even!';
            assert.equal(testNumbers.numberChecker(10), exp);
            assert.equal(testNumbers.numberChecker(0), exp);
            assert.equal(testNumbers.numberChecker(-10), exp);
        });

    });

    describe("averageSumArr", function () {
        it("should have correct avg", function () {
            let arr1 = [1, 2, 3];
            let exp1 = 2;

            let arr2 = [-1, 0, 1];
            let exp2 = 0;

            let arr3 = [2, 2, 2, 2];
            let exp3 = 2;

            let arr4 = [-1, -2, -3, -4];
            let exp4 = -2.5;

            let arr5 = [-1, -2];
            let exp5 = -1.5;

            let arr6 = [1, 2];
            let exp6 = 1.5;

            assert.equal(testNumbers.averageSumArray(arr1), exp1);
            assert.equal(testNumbers.averageSumArray(arr2), exp2);
            assert.equal(testNumbers.averageSumArray(arr3), exp3);
            assert.equal(testNumbers.averageSumArray(arr4), exp4);
            assert.equal(testNumbers.averageSumArray(arr5), exp5);
        });
    });
});
