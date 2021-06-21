function solve(arr) {
    let towns = [];

    let [c1name, c2name, c3name] = arr.shift().split('|').filter(item => item);
    c1name = c1name.trim();
    c2name = c2name.trim();
    c3name = c3name.trim();

    for (const el of arr) {
        let [townStr, latStr, lonStr] = el.split('|').filter(item => item);
        let obj = new Object();
        obj[c1name] = townStr.trim();
        obj[c2name] = Number(Number(latStr).toFixed(2)); //eww
        obj[c3name] = Number(Number(lonStr).toFixed(2)); //eww

        towns.push(obj);
    }

    return JSON.stringify(towns);
}

console.log(solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
));

console.log(solve(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']
));