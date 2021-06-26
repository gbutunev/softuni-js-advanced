function calculator() {

    let box1;
    let box2;
    let box3;

    return {
        init: function (selector1, selector2, resultSelector) {
            box1 = document.querySelector(selector1);
            box2 = document.querySelector(selector2);
            box3 = document.querySelector(resultSelector);
        },
        add: function () {
            box3.value = Number(box1.value) + Number(box2.value);
        },
        subtract: function () {
            box3.value = Number(box1.value) - Number(box2.value);
        }
    }
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');




