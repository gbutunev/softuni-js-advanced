// 50/100 !!!

function solve(input) {
    let object = JSON.parse(input);

    let outputLines = ["<table>"];

    //table header
    let topLine = '';
    for (const key in object[0]) {
        topLine += makeTh(key);
    }
    topLine = makeTr(topLine);
    outputLines.push(topLine);

    for (const e of object) {
        let currLine = '';
        for (const key in e) {
            currLine += makeTd(e[key]);
        }
        currLine = makeTr(currLine);
        outputLines.push(currLine);
    }
    outputLines.push("</table>");

    outputLines.forEach(x => console.log(x));

    function makeTr(string) {
        return `    <tr>${string}</tr>`;
    }
    function makeTh(string) {
        return `<th>${string}</th>`;
    }
    function makeTd(string) {
        return `<td>${string}</td>`;
    }

}

solve('[{"Name":"Stamat","Score": 5.5},    {"Name": "Rumen", "Score": 6}]');
solve('[{"Name":"Pesho","Score":4,"Grade":8},{"Name":"Gosho","Score":5,"Grade":8},{"Name":"Angel","Score":5.50," Grade":10}]');