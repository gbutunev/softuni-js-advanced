function deleteByEmail() {
    let email = document.getElementsByName("email")[0].value;
    let secondColumn = document.querySelectorAll("#customers tr td:nth-child(2)");
    let output = document.getElementById('result');

    for (let td of secondColumn)
        if (td.textContent == email) {
            let row = td.parentNode;
            row.parentNode.removeChild(row);
            output.textContent = "Deleted.";
            return;
        }
    output.textContent = "Not found.";
}