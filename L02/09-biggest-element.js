function solve(matrix) {
    let max = matrix[0][0];
    for (let i = 0; i < matrix.length; i++) {
        let current = Math.max(...matrix[i]);
        if (current > max) {
            max = current;
        }
    }
    return max;
}

console.log(solve([[20, 50, 10], [8, 33, 145]]));
console.log(solve([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]));