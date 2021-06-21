function solve(name, pop, treasury) {
    let obj = {
        name: name,
        population: pop,
        treasury: treasury,
        taxRate: 10,
        collectTaxes: function () {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth: function (percent) {
            this.population += this.population * percent / 100;
        },
        applyRecession: function (percent) {
            this.treasury -= this.treasury * percent / 100;
        }
    }

    return obj;
}

const city =
    solve('Tortuga',
        7000,
        15000);
console.log(city);

const city2 =
    solve('Tortuga',
        7000,
        15000);
city2.collectTaxes();
console.log(city2.treasury);
city2.applyGrowth(5);
console.log(city2.population);

