function solve(num) {
    let sum = num;

    return function (x) {
        return sum + x;
    }
}

let add5 = solve(5);
console.log(add5(2));
console.log(add5(3));

let add7 = solve(7);
console.log(add7(2));
console.log(add7(3));
