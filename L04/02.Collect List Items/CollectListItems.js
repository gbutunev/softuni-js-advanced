function extractText() {
    let list = document.querySelectorAll('ul#items li');
    let txt = document.querySelector('#result');

    for (const el of list) {
        txt.value += el.textContent + '\n';
    }
}