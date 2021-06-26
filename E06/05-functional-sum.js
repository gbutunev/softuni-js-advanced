function solve(n) {
    let sum = n;

    function calc(num) {
        sum += num;
        return calc;
    }

    calc.toString = function () { return sum };
    return calc;
}

console.log(solve(5)(15));