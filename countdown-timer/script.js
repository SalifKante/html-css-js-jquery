"use strict";
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const newYears = "1 Jan 2025";

function countdown() {
  //   console.log("Helo");
  const newYearsDate = new Date(newYears);
  //   console.log(newYearsDate);
  const currentDate = new Date();
  //   console.log(currentDate);

  //When you substract dates you get the result in milliseconds
  //So to convert to seconds you have to divide the result per /1000
  const totalSeconds = (newYearsDate - currentDate) / 1000;
  //   console.log(totalSeconds);

  const days = Math.floor(totalSeconds / 3600 / 24);
  //   console.log(days);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  //   console.log(hours);
  const minutes = Math.floor(totalSeconds / 3600) % 60;
  //   console.log(minutes);

  const seconds = Math.floor(totalSeconds) % 60;
  //   console.log(seconds);

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minutesEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

//initial call
countdown();

setInterval(countdown, 1000);
