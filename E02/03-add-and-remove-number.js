function solve(cmds) {
    let arr = [];
    let counter = 0;

    for (const cmd of cmds) {
        counter++;

        switch (cmd) {
            case 'add':
                arr.push(counter);
                break;
            case 'remove':
                arr.pop();
                break;
        }
    }

    if (arr.length == 0) {
        console.log('Empty');
    }
    else {
        arr.forEach(x => console.log(x));
    }
}

solve(['add',
    'add',
    'add',
    'add']
);

solve(['add',
    'add',
    'remove',
    'add',
    'add']
);

solve(['remove',
    'remove',
    'remove']
);