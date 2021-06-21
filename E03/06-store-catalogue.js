function solve(arr) {
    let cat = new Object();

    for (const e of arr) {
        let [name, price] = e.split(' : ');
        if (cat[name[0]] == undefined) {
            cat[name[0]] = [];
        }
        cat[name[0]].push({
            name: name,
            price: Number(price)
        });
    }

    for (const key of Object.keys(cat).sort((a, b) => a.localeCompare(b))) {
        console.log(key);
        cat[key].sort((a, b) => a.name.localeCompare(b.name)).forEach(el => console.log(` ${el.name}: ${el.price}`));
    }
}

solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);

solve(['Banana : 2',
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']
);