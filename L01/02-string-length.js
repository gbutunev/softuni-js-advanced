function solve(...words) {
    let total = 0;

    for (let i = 0; i < words.length; i++) {
        total += words[i].length;
    }

    console.log(total);
    console.log(Math.floor(total / words.length));
}

solve('chocolate', 'ice cream', 'cake');
solve('pasta', '5', '22.3');
