// Calculating current date
const currentDate = new Date();

let currentDay = ('0' + currentDate.getDate()).slice(-2);
let currentMonth = ('0' + (currentDate.getMonth()+1)).slice(-2)
let currentYear = currentDate.getFullYear();

let todayDate = currentDay + "-" + currentMonth + "-" + currentYear;

document.getElementById('todaydate').innerHTML=todayDate;

// Asking for birthdate
const birthDate = prompt("What is your Birthdate? DD-MM-YYYY");

document.getElementById("yourbirthdate").innerHTML=birthDate;

// Creating variables for birthdate
let birthYear = Number(birthDate.slice(-4))
let birthMonth = Number(birthDate.slice(3,5))
let birthDay = Number(birthDate.slice(0,2))

