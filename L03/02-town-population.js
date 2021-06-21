function solve(input) {
    let obj = new Object();

    for (const line of input) {
        let [name, pop] = line.split(' <-> ');

        if (obj[name] != undefined) {
            obj[name] += Number(pop);
        }
        else {
            obj[name] = Number(pop);
        }
    }

    for (const key in obj) {
        console.log(`${key} : ${obj[key]}`);
    }
}

solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
);

solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
);