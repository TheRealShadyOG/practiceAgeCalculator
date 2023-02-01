// Calculating current date
const currentDate = new Date();

let currentDay = ('0' + currentDate.getDate()).slice(-2);
let currentMonth = ('0' + (currentDate.getMonth()+1)).slice(-2)
let currentYear = currentDate.getFullYear();

let todayDate = currentDay + "-" + currentMonth + "-" + currentYear;

document.getElementById('todaydate').innerHTML=todayDate;
