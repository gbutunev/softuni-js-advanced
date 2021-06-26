function solve(...params) {
    let info = {};

    for (const thing of params) {
        console.log(`${typeof thing}: ${typeof thing == 'object' ? '' : thing}`);

        if (info[typeof thing] == null) {
            info[typeof thing] = 1;
        }
        else {
            info[typeof thing]++;
        }
    }

    Object.keys(info).sort((a, b) => info[b] - info[a]).forEach(e => {
        console.log(`${e} = ${info[e]}`);
    });
}

solve('cat', 42, function () { console.log('Hello world!'); });
solve({ name: 'bob' }, 3.333, 9.999);