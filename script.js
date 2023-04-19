let hr = document.querySelector(".hours");
let min = document.querySelector(".minutes");
let sec = document.querySelector(".seconds");
setInterval(() => {
  let time = new Date();
  let currentHr = time.getHours() * 30;
  let currentMin = time.getMinutes() * 6;
  let currentSec = time.getSeconds() * 6;
  sec.style.transform = `rotate(${currentSec}deg)`;
  min.style.transform = `rotate(${currentMin}deg)`;
  hr.style.transform = `rotate(${currentHr}deg)`;
}, 1000);
