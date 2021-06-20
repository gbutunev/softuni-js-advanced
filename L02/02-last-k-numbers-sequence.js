function solve(total, num) {
    let arr = [1];

    for (let i = 0; i < total; i++) {
        let currSum = 0;
        for (let j = 0; j <= num; j++) {
            currSum += (arr[i - j] ? arr[i - j] : 0);
        }
        arr[i] = currSum;
    }

    return arr;
}

console.log(solve(6, 3));
console.log(solve(8, 2));