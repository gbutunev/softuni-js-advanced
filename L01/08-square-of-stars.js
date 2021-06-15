function solve(size) {
    if (typeof size !== 'number') {
        return printSquare(5);
    } else {
        return printSquare(size);
    }

    function printSquare(size) {
        let sq = '';
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                sq += '* ';
            }
            sq += '\n';
        }
        return sq;
    }
}

console.log(solve(1));