// the mini calender is made for this task specifically i.e. it is most useful to show countdown within a month's duration or countdowns in the same month

const countdownDisplay = document.getElementById('countdown-display');

function renderCountdown() {
  // const christmas = 25
  // Task:
  // - Get today's date (you only need the day).
  // - Calculate remaining days.
  // - Display remaining days in countdownDisplay.

  // todays date
  const today = new Date();

  const todayDate = today.getDate();

  const todayTime = today.getTime();

  // christmas date
  const christmas = new Date('2023-12-25');

  const christmasDate = christmas.getDate();

  const christmasTime = christmas.getTime();

  // Find the difference between now and the target date
  const difference = christmasTime - todayTime;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  const daysLeftDiv = document.getElementById('countdown-display');
  daysLeftDiv.textContent = days;

  const daysLeftDivExtra = document.getElementById('countdown-display-extra');
  daysLeftDivExtra.textContent = `${hours} hours, ${minutes} minutes, ${seconds} seconds`;

  if (difference === 0) {
    const contText = document.getElementById('countdown-text');
    contText.textContent = "Yay! It's Christmas!! 🎉🥳";
  }

  const pdiv = document.querySelector('.progress-bar');

  pdiv.innerHTML = '';

  for (let index = 1; index <= christmasDate; index++) {
    // make a new div with class "progress-day" and insert it into the pdiv
    const newDiv = document.createElement('div');
    newDiv.classList.add('progress-day');

    if (index <= todayDate) {
      newDiv.classList.add('day-passed');
    }

    if (index === todayDate) {
      newDiv.classList.toggle('day-passed');
      newDiv.classList.add('day-today');
    }

    newDiv.textContent = index;
    pdiv.appendChild(newDiv);
  }
}

renderCountdown();

// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.

const countdownHoliDisplay = document.getElementById('countdown-display-holi');

function renderHoliCountdown() {
  // todays date
  const today = new Date();

  const todayDate = today.getDate();

  const todayTime = today.getTime();

  // holi 2024 date
  const givenDay = new Date('2024-03-26');

  const givenDayDate = givenDay.getDate();

  const givenDayTime = givenDay.getTime();

  // Find the difference between now and the target date
  const difference = givenDayTime - todayTime;

  // Calculate days, hours, minutes, and seconds
  // number of milliseconds in a day (1000 milliseconds * 60 seconds * 60 minutes * 24 hours).
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  const daysLeftDiv = document.getElementById('countdown-display-holi');
  daysLeftDiv.textContent = days;

  const daysLeftDivExtra = document.getElementById(
    'countdown-display-extra-holi'
  );
  daysLeftDivExtra.textContent = `${hours} hours, ${minutes} minutes, ${seconds} seconds`;

  if (difference === 0) {
    const contText = document.getElementById('countdown-text-holi');
    contText.textContent = "Yay! It's Holi!! 🎉🥳";
  }
}

renderHoliCountdown();

setInterval(() => {
  renderCountdown();
  renderHoliCountdown();
}, 1000);
