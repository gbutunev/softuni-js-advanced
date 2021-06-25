function attachGradientEvents() {
    function changePosition(e) {
        let perc = Math.trunc((e.offsetX / (e.target.clientWidth - 1)) * 100);
        document.getElementById('result').textContent = perc + '%';
    }

    function removePosition() {
        document.getElementById('result').textContent = '';
    }

    let grad = document.getElementById('gradient');
    grad.addEventListener('mousemove', changePosition);
    grad.addEventListener('mouseout', removePosition);
}