const value = document.getElementById('value');
const hour = document.getElementById('hour');
const minut = document.getElementById('minut');
const sec = document.getElementById('sec');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');

const clock = setInterval(function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();
    let dayT = dateToday.getDate();
    let monthT = dateToday.getMonth() + 1;
    let yearT = dateToday.getFullYear();

    
    if(hr < 10) hr = '0' + hr;
    if(min < 10) min = '0' + min;
    if(s < 10) s = '0' + s;

    if(dayT < 10) dayT = '0' + dayT;
    if(monthT < 10){
        monthT = '0' + monthT;
    } if(monthT === 12){
        monthT = dateToday.getMonth();
    }
    
    hour.innerText = hr;
    minut.innerText = min;
    sec.innerText = s;
    day.innerText = dayT;
    month.innerText = monthT;
    year.innerText = yearT;
})

