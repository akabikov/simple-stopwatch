const btn_start = document.querySelector(".start");
const btn_pause = document.querySelector(".pause");
const btn_reset = document.querySelector(".reset");
const timeDisplay = document.querySelector(".time");


import StopwatchInterface from "./stopwatchInterface.js";

const stopwatch = new StopwatchInterface();

btn_start.addEventListener("click", () => {
    stopwatch.start(updateDisplay, timeDisplay);
    showButton("pause");
});

btn_pause.addEventListener("click", () => {
    stopwatch.pause();
    showButton("start");
    showButton("reset");
});

btn_reset.addEventListener("click", () => {
    stopwatch.reset(updateDisplay, timeDisplay);
    showButton("start");
});


function showButton(btn) {
    switch (btn) {
        case "start":
            btn_start.classList.remove("invisible");
            btn_pause.classList.add("invisible");
            btn_reset.classList.add("invisible");
            break;
        case "pause":
            btn_start.classList.add("invisible");
            btn_pause.classList.remove("invisible");
            btn_reset.classList.add("invisible");
            break;
        case "reset":
            btn_reset.classList.remove("invisible");
            break;
    }
}

function updateDisplay(disp) {
    disp.textContent = stopwatch.getTimeFormatted();
}
