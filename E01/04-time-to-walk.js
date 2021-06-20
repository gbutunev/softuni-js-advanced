function solve(steps, length, speed) {

    const zeroPad = (num, places) => String(num).padStart(places, '0')

    let total = 0;
    let ms = speed / 3.6;
    let distance = steps * length;

    total = distance / ms;
    total += Math.floor(distance / 500) * 60;

    let hours = Math.floor(total / 3600);
    total %= 3600;
    let minutes = Math.floor(total / 60);
    total %= 60;
    let seconds = Math.round(total);

    console.log(`${zeroPad(hours, 2)}:${zeroPad(minutes, 2)}:${zeroPad(seconds, 2)}`);
}

solve(4000, 0.6, 5);
solve(2564, 0.7, 5.5);