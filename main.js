const hourHand = document.querySelector("[data-hours-hand]");
const minuteHand = document.querySelector("[data-minutes-hand]");
const secondHand = document.querySelector("[data-seconds-hand]");

function myClock() {
  const currentData = new Date();
  const seconds = currentData.getSeconds() / 60;
  const minutes = (seconds + currentData.getMinutes()) / 60;
  const hours = (minutes + currentData.getHours()) / 12;
  Rotation(secondHand, seconds);
  Rotation(minuteHand, minutes);
  Rotation(hourHand, hours);
}

function Rotation(element, rotationRatio) {
  element.style.setProperty("--rotate", rotationRatio * 360);
}
myClock();
setInterval(myClock, 1000);
