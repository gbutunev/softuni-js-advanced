function solve() {
    let str = '';

    return {
        append: function (text) {
            str += text;
        },
        removeStart: function (n) {
            str = str.slice(n);
        },
        removeEnd: function (n) {
            str = str.slice(0, -n);
        },
        print() {
            console.log(str);
        }
    }
}

let firstZeroTest = solve();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

let secondZeroTest = solve();
secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();
