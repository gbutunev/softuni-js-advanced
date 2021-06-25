function addItem() {
    let txt = document.getElementById('newItemText').value;
    let list = document.getElementById('items');

    let newEl = document.createElement('li');
    newEl.textContent = txt;

    let delBtn = document.createElement('a');
    delBtn.textContent = '[Delete]';
    delBtn.href = '#';

    delBtn.addEventListener('click', (e) => {
        e.currentTarget.parentNode.remove();
    });

    newEl.appendChild(delBtn);
    list.appendChild(newEl);
}