const now = new Date();
console.log('🚀 ~ now:', now);

const nowFixed = new Date('2023-12-01');
console.log('🚀 ~ nowFixed:', nowFixed);

const givenD = new Date('2023-12-25');
console.log('🚀 ~ givenD:', givenD);

// number of milliseconds in a day (1000 milliseconds * 60 seconds * 60 minutes * 24 hours).
const differenceInDays = Math.floor((givenD - now) / (1000 * 60 * 60 * 24));
console.log(differenceInDays);

const differenceInDaysForFixedDates = Math.floor(
  (givenD - nowFixed) / (1000 * 60 * 60 * 24)
);
console.log(differenceInDaysForFixedDates);

// todays date
const today = new Date().getDate();
console.log('🚀 ~ today:', today);

// christmas date
const christmas = new Date('2023-12-25').getDate();
console.log('🚀 ~ christmas:', christmas);

// days remaining
const daysRemaining = christmas - today;
console.log('🚀 ~ daysRemaining:', daysRemaining);

const daysLeftDiv = document.getElementById('days-left');
daysLeftDiv.textContent = daysRemaining;

// const pdiv = document.getElementById("progress-days-container");
const pdiv = document.querySelector('.progress-bar');

for (let index = today; index <= daysRemaining + 1; index++) {
  // make a new div with class "progress-day" and insert it into the pdiv
  const newDiv = document.createElement('div');
  newDiv.classList.add('progress-day');
  if (index != today && index != daysRemaining + 1) {
    // newDiv.style.backgroundColor = "green";
    newDiv.classList.add('day-in-between');
  }
  newDiv.textContent = index;
  pdiv.appendChild(newDiv);
  console.log('🚀 ~ newDiv:', newDiv);
}

// setInterval(() => {
//   console.log('🚀 ~ setInterval ~ now:', new Date());
// }, 1000);
