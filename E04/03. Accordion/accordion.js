function toggle() {
    let button = document.getElementsByClassName('button')[0];
    let box = document.getElementById('extra');

    if (box.style.display == 'none') {
        button.textContent = 'Less';
        box.style.display = 'block';
    }
    else {
        button.textContent = 'More';
        box.style.display = 'none';
    }
}