function solve(matrix) {
    const summator = (acc, val) => acc + val;
    let sum = matrix[0].reduce(summator);

    for (let i = 1; i < matrix.length; i++) {
        if (sum != matrix[i].reduce(summator)) {
            return false;
        }
    }

    for (let i = 0; i < matrix[0].length; i++) {
        let currSum = 0;
        for (let k = 0; k < matrix.length; k++) {
            currSum += matrix[k][i];
        }
        if (currSum != sum) {
            return false;
        }
    }

    return true;
}

console.log(solve([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
));
console.log(solve([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]
));
console.log(solve([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]
));