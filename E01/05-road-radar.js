function solve(speed, area) {
    let limit = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    }[area];

    if (speed <= limit) {
        return `Driving ${speed} km/h in a ${limit} zone`;
    }

    let diff = speed - limit;
    let status;

    if (diff <= 20) {
        status = 'speeding';
    }
    else if (diff <= 40) {
        status = 'excessive speeding';
    }
    else {
        status = 'reckless driving';
    }

    return `The speed is ${diff} km/h faster than the allowed speed of ${limit} - ${status}`;
}

console.log(solve(40, 'city'));
console.log(solve(21, 'residential'));
console.log(solve(120, 'interstate'));
console.log(solve(200, 'motorway'));