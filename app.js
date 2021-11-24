const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDay();

// let futureDate = new Date(2022, 4, 21, 11, 30, 0);
const futureDate = new Date(tempYear, tempMonth, tempDay + 30, 11, 30, 0);
const year = futureDate.getFullYear();
const month = futureDate.getMonth();
const hours = futureDate.getHours();
let minutes = futureDate.getMinutes();
const days = futureDate.getDay();
const date = futureDate.getDate();
giveaway.innerHTML = `giveway ends on ${weekdays[days]} ${date}  ${months[month]} ${year} ${hours}:${minutes}am`;

//  future time in ms
let futureTime = futureDate.getTime();
console.log(futureTime);

function getRemianingTime() {
  const today = new Date().getTime();
  // console.log(today);
  let t = futureTime - today;
  // console.log(t);
  // 1s = 1000ms
  // 1min = 60s
  // 1hr = 60min
  // 1d = 24hr

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // calculate all values
  let days = t / oneDay;
  days = Math.floor(days);
  // console.log(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  // console.log(hours);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);
  // console.log(minutes);
  // set value array
  const values = [days, hours, minutes, seconds];
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }
  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countDown);
    deadline.innerHTML = `<h4 class="expired">Sorry this giveaway has expired</h4>`;
  }
}
// countdown
let countDown = setInterval(getRemianingTime, 1000);

getRemianingTime();
