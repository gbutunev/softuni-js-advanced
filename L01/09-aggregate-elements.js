function solve(arr) {
    let sum = 0;
    let sum2 = 0;
    let string = '';
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        sum2 += 1 / arr[i];
        string += arr[i];
    }

    console.log(sum);
    console.log(sum2);
    console.log(string);
}

solve([1, 2, 3]);
solve([2, 4, 8, 16]);