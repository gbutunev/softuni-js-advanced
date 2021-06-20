function solve(sentence) {
    let re = /\w+/g;
    let words = String(sentence).match(re);

    console.log(words.join(", ").toLocaleUpperCase());
}

solve('Hi, how are you?');
solve('hello');