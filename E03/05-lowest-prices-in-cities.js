function solve(input) {
    let allProducts = [];
    let allProductNames = new Set();
    for (const e of input) {
        let [town, product, price] = e.split(' | ');

        allProductNames.add(product);

        if (allProducts.some(x => x.town == town && x.prod == product)) {
            allProducts.find(x => x.town == town && x.prod == product).price = Number(price);
        } else {
            allProducts.push({
                town: town,
                prod: product,
                price: Number(price)
            });
        }
    }

    for (const p of allProductNames) {
        let x = allProducts.filter(x => x.prod == p).sort((a, b) => a.price - b.price)[0];
        console.log(`${x.prod} -> ${x.price} (${x.town})`);
    }
}

solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);