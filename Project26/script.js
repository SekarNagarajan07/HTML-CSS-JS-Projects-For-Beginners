let upcomingDate = new Date("jan 01, 2024 12:00:00").getTime();

setInterval(() => {
  let currentDate = new Date();

  let diff = upcomingDate - currentDate;

  let daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24));

  let hoursLeft = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  let minutesLeft = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  let secondsLeft = Math.floor((diff % (1000 * 60)) / 1000);

  if (secondsLeft < 0) {
    stopInterval();
  }

  let day = document.getElementById("days");
  let hour = document.getElementById("hours");
  let minute = document.getElementById("minutes");
  let second = document.getElementById("seconds");

  day.innerHTML = daysLeft;
  hour.innerHTML = hoursLeft;
  minute.innerHTML = minutesLeft;
  second.innerHTML = secondsLeft;
}, 1000);
