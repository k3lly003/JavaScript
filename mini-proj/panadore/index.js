const timerEl = document.getElementById("timer");
const startButtonEl = document.getElementById("start");
const stopButtonEl = document.getElementById("stop");
const resetButtonEl = document.getElementById("reset");

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function startTimer() {
  startTime = Math.floor(Date.now() / 1000) - elapsedTime;

  timerInterval = setInterval(() => {
    elapsedTime = Math.floor(Date.now() / 1000) - startTime;
    console.log(elapsedTime);
  }, 1000);
}

startTimer();

function formatTime(elapsedTime) {
  const milliseconds = Math.floor((elapsedTime % 1000) / 10);
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  return (
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" +
    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
    "." +
    (milliseconds > 9 ? milliseconds : "0" + milliseconds)
  );
}
function stopTimer() {
  clearInterval(timerInterval);
  startButtonEl.disabled = false;
  stopButtonEl.disabled = true;
}
function resetTimer() {
  clearInterval(timerInterval);

  elapsedTime = 0;
  timerEl.textContent = "00:00:00";

  startButtonEl.disabled = false;
  stopButtonEl.disabled = true;
}

startButtonEl.addEventListener("click", startTimer);
stopButtonEl.addEventListener("click", stopTimer);
resetButtonEl.addEventListener("click", resetTimer);
