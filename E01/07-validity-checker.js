function solve(x1, y1, x2, y2) {
    let d1 = distance(x1, y1, 0, 0);
    let d2 = distance(x2, y2, 0, 0);
    let d3 = distance(x1, y1, x2, y2);

    console.log(`{${x1}, ${y1}} to {0, 0} is ${Number.isInteger(d1) ? 'valid' : 'invalid'}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${Number.isInteger(d2) ? 'valid' : 'invalid'}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${Number.isInteger(d3) ? 'valid' : 'invalid'}`);

    function distance(x1, y1, x2, y2) {
        return Math.sqrt(Math.abs(x1 - x2) ** 2 + Math.abs(y1 - y2) ** 2);
    }
}

solve(3, 0, 0, 4);
solve(2, 1, 1, 1);