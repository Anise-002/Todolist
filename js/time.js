const timeSection = document.getElementById('date-section');
const month = timeSection.querySelector('.month');
const days = timeSection.querySelector('.days');
const fullDate = timeSection.querySelector('.date');
const time = timeSection.querySelector('.time');
const monthWord = ["JAN", "FEB", "MAR", "APR", "MAY", "JUNE", "JUL", "AUG" , "SEP", "OCT", "NOV", "DEC"];

function timeDate(){
    const date = new Date();
    fullDate.innerHTML =`${date.getFullYear()} - ${date.getDate()} - ${monthWord[date.getMonth()]}`
    month.innerHTML = String(date.getMonth()).padStart(2,"0");
    days.innerHTML = String(date.getDate()).padStart(2,"0");
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    time.innerHTML = `${hours} : ${minutes} : ${seconds}`
}

timeDate();
setInterval(timeDate,1000);