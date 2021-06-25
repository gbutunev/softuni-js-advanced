function attachEventsListeners() {

    let daysInput = document.getElementById('days');
    let hoursInput = document.getElementById('hours');
    let minsInput = document.getElementById('minutes');
    let secsInput = document.getElementById('seconds');

    function days() {
        let days = Number(daysInput.value);
        hoursInput.value = days * 24;
        minsInput.value = days * 24 * 60;
        secsInput.value = days * 24 * 60 * 60;
    }
    function hours() {
        let hours = Number(hoursInput.value);
        daysInput.value = hours / 24;
        minsInput.value = hours * 60;
        secsInput.value = hours * 60 * 60;
    }
    function mins() {
        let mins = Number(minsInput.value);
        daysInput.value = mins / 60 / 24;
        hoursInput.value = mins / 60;
        secsInput.value = mins * 60;
    }
    function secs() {
        let secs = Number(secsInput.value);
        daysInput.value = secs / 60 / 60 / 24;
        hoursInput.value = secs / 60 / 60;
        minsInput.value = secs / 60;
    }

    document.getElementById('daysBtn').addEventListener('click', days);
    document.getElementById('hoursBtn').addEventListener('click', hours);
    document.getElementById('minutesBtn').addEventListener('click', mins);
    document.getElementById('secondsBtn').addEventListener('click', secs);

}