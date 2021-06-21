function solve(info) {
    function getEngine(hp) {
        if (hp <= 90) {
            return {
                power: 90,
                volume: 1800
            }
        }
        else if (hp <= 120) {
            return {
                power: 120,
                volume: 2400
            }
        }
        else {
            return {
                power: 200,
                volume: 3500
            }
        }
    }

    function getCarriage(type, color) {
        return {
            type: type,
            color: color
        }
    }

    function getWheels(size) {
        let arr = new Array(4);
        if (size % 2 == 0) {
            size--;
        }
        arr.fill(size);
        return arr;
    }

    return {
        model: info.model,
        engine: getEngine(info.power),
        carriage: getCarriage(info.carriage, info.color),
        wheels: getWheels(info.wheelsize)
    }
}

console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
));
console.log(solve({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
));