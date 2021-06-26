function solve(cmds) {
    let arr = [];

    let f = {
        add: function (w) {
            arr.push(w);
        },
        remove: function (w) {
            arr = arr.filter(e => e !== w);
        },
        print: function () {
            console.log(arr.join(','));
        }
    }

    for (const cmd of cmds) {
        let [c, val] = cmd.split(' ');
        f[c](val);
    }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
solve(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);