function sumTable() {
    let data = document.querySelectorAll('table tbody tr td:nth-child(2)');
    let sum = 0
    for (const el of data) {
        sum += Number(el.textContent);
    }

    document.getElementById('sum').textContent = sum;
}