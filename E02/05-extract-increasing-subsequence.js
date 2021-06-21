function solve(arr) {
    let newArr = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= newArr[newArr.length - 1]) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

console.log(solve([2]));

console.log(solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
));

console.log(solve([1,
    2,
    3,
    4]
));

console.log(solve([20,
    3,
    2,
    15,
    6,
    1]
));