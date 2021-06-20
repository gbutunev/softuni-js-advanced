function solve(number) {
    let n = String(number);
    let flag = true;
    let sum = 0;

    if(n.length == 1){
        console.log(true);
        console.log(n);
        return;
    }

    for (let i = 0; i < n.length-1; i++) {
        if (n[i] != n[i+1]) flag = false;
        sum += Number(n[i]);
    }
    sum+=Number(n[n.length-1]);

    console.log(flag);
    console.log(sum);
    return
}

solve(2222222);
solve(1234);
