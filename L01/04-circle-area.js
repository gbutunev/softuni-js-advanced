function solve(radius) {
    if (typeof radius !== 'number') {
        return `We can not calculate the circle area, because we receive a ${typeof radius}.`;
    }

    return (Math.PI * radius * radius).toFixed(2);
}

console.log(solve(5));
console.log(solve('asdr'));
