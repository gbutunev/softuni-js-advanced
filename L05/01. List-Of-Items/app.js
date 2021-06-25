function addItem() {
    let txt = document.getElementById('newItemText').value;
    let list = document.getElementById('items');

    let newEl = document.createElement('li', txt);
    newEl.textContent = txt;
    list.appendChild(newEl);
}