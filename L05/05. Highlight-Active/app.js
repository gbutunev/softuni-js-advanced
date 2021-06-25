function focused() {
    let inputs = document.querySelectorAll('div input');

    function highlight(e) {
        let el = e.target.parentNode;
        el.classList.add("focused");
    }

    function dehighlight(e) {
        let el = e.target.parentNode;
        el.classList.remove("focused");
    }

    for (const inp of inputs) {
        inp.addEventListener('focus', highlight);
        inp.addEventListener('blur', dehighlight);
    }
}