function solve(a, b, op) {
    switch (op) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        case '%':
            return a % b;
        case '**':
            return a ** b;
    }
}

console.log(solve(5, 6, '+'));
console.log(solve(3, 5.5, '*'));
