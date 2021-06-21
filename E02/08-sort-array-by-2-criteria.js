function solve(arr) {
    arr.sort((a, b) => {
        if (a.length != b.length) {
            return a.length - b.length;
        }
        else {
            return a.localeCompare(b);
        }
    });

    arr.forEach(e => {
        console.log(e);
    });
}

solve(['alpha',
    'beta',
    'gamma']
);

solve(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']
);

solve(['test',
    'Deny',
    'omen',
    'Default']
);