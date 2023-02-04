// Calculating current date
const currentDate = new Date();

let currentDay = Number(("0" + currentDate.getDate()).slice(-2));
let currentMonth = Number(("0" + (currentDate.getMonth()+1)).slice(-2));
let currentYear = Number(currentDate.getFullYear());

let todayDate = ('0' + currentDate.getDate()).slice(-2) + "-" + ('0' + (currentDate.getMonth()+1)).slice(-2) + "-" + currentDate.getFullYear();

document.getElementById("todaydate").innerHTML=todayDate;

// Asking for birthdate
const birthDate = prompt("What is your Birthdate? DD-MM-YYYY");

document.getElementById("yourbirthdate").innerHTML=birthDate;

// Creating variables for birthdate
let birthYear = Number(birthDate.slice(-4));
let birthMonth = Number(birthDate.slice(3,5));
let birthDay = Number(birthDate.slice(0,2));

// Calculating years of age
if (currentMonth > birthMonth) {
    currentYearsOld = currentYear - birthYear;
} else {
    currentYearsOld = currentYear - birthYear - 1;
}