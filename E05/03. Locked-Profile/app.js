function lockedProfile() {
    let showBtns = Array.from(document.querySelectorAll('.profile button'));

    for (const btn of showBtns) {
        btn.addEventListener('click', changeState);
    }

    function changeState(e) {
        let profile = e.target.parentNode;
        let locked = profile.querySelector('input[type="radio"]:checked').value;
        let div = profile.querySelector('div');
        let btn = e.target;

        if (locked === 'unlock') {
            if (btn.textContent == 'Show more') {
                div.style.display = 'inline-block';
                btn.textContent = 'Hide it';
            }
            else {
                div.style.display = 'none';
                btn.textContent = 'Show more';
            }
        }
    }

}