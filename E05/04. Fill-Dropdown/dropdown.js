function addItem() {
    let dropdown = document.getElementById('menu');

    let txt = document.getElementById('newItemText');
    let val = document.getElementById('newItemValue');

    let option = document.createElement('option');
    option.setAttribute('value', val.value);
    option.textContent = txt.value;

    dropdown.appendChild(option);

    val.value = '';
    txt.value = '';
}