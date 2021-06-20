function solve(number, ...operations) {
    let n = Number(number);

    operations.forEach(op => {
        switch (op) {
            case 'chop':
                n /= 2;
                break;
            case 'dice':
                n = Math.sqrt(n);
                break;
            case 'spice':
                n += 1;
                break;
            case 'bake':
                n *= 3;
                break;
            case 'fillet':
                n -= n * 0.2;
                break;
        }
        console.log(n);
    });
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')