function solve(heroes) {
    let arr = [];

    for (const e of heroes) {
        let [name, level, itemString] = e.split(' / ');

        arr.push({
            name: name,
            level: Number(level),
            items: itemString ? itemString.split(', ') : []
        })
    }

    return JSON.stringify(arr);
}

console.log(solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
));

console.log(solve(['Jake / 1000 / Gauss, HolidayGrenade']));