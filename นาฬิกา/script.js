let timer;
let isRunning = false;
let time = 0;

function startClock() {
    if (!isRunning) {
        timer = setInterval(updateClock, 1000);
        isRunning = true;
    }
}

function stopClock() {
    clearInterval(timer);
    isRunning = false;
}

function resetClock() {
    clearInterval(timer);
    isRunning = false;
    time = 0;
    document.getElementById('time').innerHTML = '00:00:00';
}

function updateClock() {
    time++;
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById('time').innerHTML = timeString;
}
