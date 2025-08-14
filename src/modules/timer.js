const timer = (deadline) => {
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');
    let idInterval;

const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let hours = Math.floor(timeRemaining / 60 / 60);
    let minutes = Math.floor(timeRemaining / 60) % 60;
    let seconds = Math.floor(timeRemaining % 60);

    return {timeRemaining, hours, minutes, seconds}
}

    const updateClock = () => {
        let getTime = getTimeRemaining();

        timerHours.textContent = (getTime.hours > 9 ? getTime.hours : '0' + getTime.hours);
        timerMinutes.textContent = (getTime.minutes > 9 ? getTime.minutes : '0' + getTime.minutes);
        timerSeconds.textContent = (getTime.seconds > 9) ? getTime.seconds : '0' + getTime.seconds;

        if (getTime.timeRemaining <= 0) {
            clearInterval(idInterval);
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
        }
    };

    idInterval = setInterval(updateClock, 1000);

};

export default timer
