let timerValue = 0;
let timerInterval;

const startCount = document.querySelector(".start");
const stopCount = document.querySelector(".stop");
const resetCount = document.querySelector(".reset");
const counter = document.getElementById("counter");

// start the timer
startCount.addEventListener("click", function () {
    if (!timerInterval) {
        timerInterval = setInterval(function () {
            timerValue++;
            counter.value = timerValue;
        }, 1000);
    }
});

// stop the timer
stopCount.addEventListener("click", function () {
    clearInterval(timerInterval);
    timerInterval = null;
});

// Reset the timer 
resetCount.addEventListener("click", function () {
    clearInterval(timerInterval);
    timerValue = 0;
    counter.value = timerValue;
    timerInterval = null;
});