function solve() {
    let a = 0;
    let b = 0;

    return function () {
        if (b == 0) {
            b = 1;
            return b;
        }
        let temp = a;
        a = b;
        b = a + temp;
        return b;
    }
}

let fib = solve();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
