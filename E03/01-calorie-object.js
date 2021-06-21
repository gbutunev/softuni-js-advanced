function solve(arr) {
    let foods = new Object();

    for (let i = 0; i < arr.length; i += 2) {
        foods[arr[i]] = Number(arr[i + 1]);
    }

    return foods;
}

console.log(solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));
console.log(solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']));