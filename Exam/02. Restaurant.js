class Restaurant {
    constructor(budget) {
        this.budgetMoney = budget;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(strArr) {
        //let localHistory???

        for (const line of strArr) {
            let [productName, productQty, price] = line.split(' ');
            let productQuantity = Number(productQty);
            let productTotalPrice = Number(price);

            let currentMessage = '';

            if (price <= this.budgetMoney) {
                this.budgetMoney -= productTotalPrice;

                if (!this.stockProducts[productName]) {
                    this.stockProducts[productName] = 0;
                }

                this.stockProducts[productName] += productQuantity;

                currentMessage = `Successfully loaded ${productQuantity} ${productName}`;
            } else {
                currentMessage = `There was not enough money to load ${productQuantity} ${productName}`;
            }
            this.history.push(currentMessage);
        }

        return this.history.join('\n');
    }

    addToMenu(meal, products, price) {
        if (!this.menu[meal]) {
            this.menu[meal] = {};
            this.menu[meal]['price'] = price;
            this.menu[meal]['products'] = {};

            for (const line of products) {
                let [name, qty] = line.split(' ');
                let quantity = Number(qty);

                this.menu[meal]['products'][name] = quantity;
            }

            let num = Object.keys(this.menu).length;
            if (num == 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
            }
            return `Great idea! Now with the ${meal} we have ${num} meals in the menu, other ideas?`;

        }

        return `The ${meal} is already in the our menu, try something different.`;
    }

    showTheMenu() {
        let num = Object.keys(this.menu).length;
        if (num == 0) {
            return "Our menu is not ready yet, please come later...";
        }

        let output = '';

        for (const key in this.menu) {
            output += `${key} - $ ${this.menu[key]['price']}\n`
        }

        return output.trim();
    }

    makeTheOrder(meal) {
        if (!this.menu[meal]) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }

        let requiredProdsObj = this.menu[meal]['products'];
        let availableProdsObj = this.stockProducts;

        let flag = true;
        for (const key in requiredProdsObj) {
            if (!availableProdsObj[key] || availableProdsObj[key] < requiredProdsObj[key]) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
            }
        }
        //reduce prods
        for (const key in requiredProdsObj) {
            availableProdsObj[key] -= requiredProdsObj[key];
        }
        //add price
        this.budgetMoney += this.menu[meal]['price'];

        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal]['price']}.`;

    }
}

// let kitchen = new Restaurant(1000);
// console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

// let kitchen = new Restaurant(1000);
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

// console.log(kitchen.showTheMenu());

let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));
