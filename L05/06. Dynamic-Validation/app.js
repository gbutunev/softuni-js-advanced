function validate() {
    let pattern = /[a-z]+@[a-z]+.[a-z]+/;
    let box = document.getElementById('email');

    function chng(e) {
        let mail = e.target;
        if (!mail.value.match(pattern)) {
            mail.classList.add('error');
        }
        else {
            mail.classList.remove('error');
        }
    }

    box.addEventListener('change', chng);
}