let timer;
let timerDisplay = document.getElementById('timer-display');
let startButton = document.getElementById('start-btn');
let stopButton = document.getElementById('stop-btn');
let resetButton = document.getElementById('reset-btn');
let hoursInput = document.getElementById('hours-input');
let minutesInput = document.getElementById('minutes-input');
let secondsInput = document.getElementById('seconds-input');

let totalTimeInSeconds = 0;
let initialTimeInSeconds = 0;

function updateDisplay() {
    let hours = Math.floor(totalTimeInSeconds / 3600);
    let minutes = Math.floor((totalTimeInSeconds % 3600) / 60);
    let seconds = totalTimeInSeconds % 60;
    timerDisplay.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
    clearInterval(timer);
    let hours = parseInt(hoursInput.value) || 0;
    let minutes = parseInt(minutesInput.value) || 0;
    let seconds = parseInt(secondsInput.value) || 0;
    totalTimeInSeconds = hours * 3600 + minutes * 60 + seconds;
    initialTimeInSeconds = totalTimeInSeconds;
    updateDisplay();

    timer = setInterval(() => {
        if (totalTimeInSeconds <= 0) {
            clearInterval(timer);
            timerDisplay.classList.add('shake', 'pulse');
            setTimeout(() => {
                timerDisplay.classList.remove('shake', 'pulse');
                timerDisplay.classList.add('fade-out');
                setTimeout(() => {
                    timerDisplay.classList.remove('fade-out');
                }, 1000);
            }, 500);
            alert("Time's up!");
            return;
        }
        totalTimeInSeconds--;
        updateDisplay();
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
    if (totalTimeInSeconds > 0) {
        timerDisplay.classList.add('shake');
        setTimeout(() => {
            timerDisplay.classList.remove('shake');
        }, 500);
    }
}

function resetTimer() {
    clearInterval(timer);
    totalTimeInSeconds = initialTimeInSeconds;
    updateDisplay();
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
