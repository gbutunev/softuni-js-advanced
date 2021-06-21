function generateReport() {

    let mainOutput = [];

    let columnList = document.querySelectorAll('tr th input');
    let activeColumns = [];
    for (let i = 0; i < columnList.length; i++) {
        activeColumns[i] = columnList[i].checked;
    }

    let rows = document.querySelectorAll('tbody tr');

    for (const row of rows) {
        let children = row.querySelectorAll('td');
        let obj = new Object();
        for (let col = 0; col < columnList.length; col++) {
            if (activeColumns[col]) {
                obj[columnList[col].name] = children[col].textContent;
            }
        }
        mainOutput.push(obj);
    }

    document.getElementById('output').textContent = JSON.stringify(mainOutput, null, '\t');
}