function solve(x, y) {
    let a = Number(x);
    let b = Number(y);

    let sum = 0;
    for (let i = a; i <= b; i++) {
        sum += i;
    }

    return sum;
}

console.log(solve('1', '5'));
console.log(solve('-8', '20'));