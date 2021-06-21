function solve(arr) {
    arr.sort((a, b) => a - b);
    let newArr = [];

    let switcher = true;
    while (arr.length != 0) {
        if (switcher) {
            newArr.push(arr.shift());
            switcher = false;
        }
        else {
            newArr.push(arr.pop());
            switcher = true;
        }
    }

    return newArr;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));