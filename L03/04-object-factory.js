function solve(funcs, orders) {
    let newArr = [];

    for (const order of orders) {
        let currOrder = new Object();
        for (const key in order['template']) {
            currOrder[key] = order['template'][key];
        }

        for (const funcString of order['parts']) {
            currOrder[funcString] = funcs[funcString];
        }

        newArr.push(currOrder);
    }

    return newArr;
}