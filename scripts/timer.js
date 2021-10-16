/**
 * not strict on time
 * time can be pass over and keep down
 * manual change multi different time section
 * can set multiplied time
 */

let timer = document.getElementById("timer");
let switchButton = document.getElementById("switchButton");
let ifTiming = false;
switchButton.addEventListener("click", switchState);

function switchState() {
  ifTiming = !ifTiming;
  switchButton.textContent = "Timer ON: " + String(ifTiming);
  const setTime = Date.now();
  startUpdateTime(setTime);
}

function startUpdateTime(setTime) {
  for (let ifloop = 1; (ifloop = setTimeout(updateTime(setTime))), 500; );
}

function updateTime(setTime) {
  let keeploop = 1;
  let seconds = (Date.now() - setTime) / 1000;
  let minutes = 0;
  let hours = 0;

  if (seconds > 3600) {
    hours = (seconds - (seconds % 3600)) / 3600;
    seconds %= 3600;
  }
  if (seconds > 60) {
    minutes = (seconds - (seconds % 60)) / 60;
    seconds %= 60;
  }
  let currentTime = hours + ":" + minutes + ":" + seconds;
  timer.textContent = currentTime;

  if (seconds === 5) {
    keeploop = 0;
  }
  return keeploop;
}
