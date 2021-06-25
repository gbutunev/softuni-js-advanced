function encodeAndDecodeMessages() {
    let encodeBtn = document.querySelector('#main div:nth-child(1) button');
    let decodeBtn = document.querySelector('#main div:nth-child(2) button');

    encodeBtn.addEventListener('click', encode);
    decodeBtn.addEventListener('click', decode);

    function encode() {
        let txt1 = document.querySelector('#main div:nth-child(1) textarea');
        let txt2 = document.querySelector('#main div:nth-child(2) textarea');

        let msg = '';
        for (let i = 0; i < txt1.value.length; i++) {
            msg += String.fromCharCode(txt1.value.charCodeAt(i) + 1);
        }

        txt1.value = '';
        txt2.value = msg;
    }

    function decode() {
        let txt = document.querySelector('#main div:nth-child(2) textarea');

        let msg = '';
        for (let i = 0; i < txt.value.length; i++) {
            msg += String.fromCharCode(txt.value.charCodeAt(i) - 1);
        }

        txt.value = msg;
    }
}