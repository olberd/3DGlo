
const dayTime = document.getElementById('day-time');
const dayWeek = document.getElementById('day-week');
const timeNow = document.getElementById('time-now');
const toNewYear= document.getElementById('to-new-year');

let date = new Date();
let day = date.getDay();
let hour = date.getHours();

let newYear; 
let oneDay; 
let daysLeft;

let greeting;

let days = [
    'воскресенье',
    'понедельник',
    'вторник',
    'среда',
    'четверг',
    'пятница',
    'суббота'
]

if (hour >= 6 && hour < 12) {
    greeting = 'утро!';
} else if (hour >= 12 && hour < 18){
    greeting = 'день!';
} else if (hour >= 18 && hour < 23){
    greeting = 'утро!';
} else {
    greeting = 'ночи!';
}


dayWeek.innerText = days[day];
dayTime.innerText = greeting;
timeNow.innerText = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
});

newYear = new Date(date.getFullYear() + 1, 0, 1);
oneDay = 24 * 60 * 60 * 1000;
daysLeft = Math.round((newYear.getTime() - date.getTime()) / oneDay);

toNewYear.innerText = `${daysLeft} дней`;