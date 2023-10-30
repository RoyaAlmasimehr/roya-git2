let now = new Date();
let h3 = document.querySelector("h3");

let hours = now.getHours();
let minutes = now.getMinutes();
let dateToday = now.getDate();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let months = [
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
let month = months[now.getMonth()];

dates.innerHTML = ` ${day} ${dateToday} ${month}
${hours}: ${minutes} `;
