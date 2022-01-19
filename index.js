let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
console.log(hour, minute, second)
let interval = setInterval(() => {
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let calc_hr = (hr * 30) + (min / 2);
    let calc_min = (min * 6) + (sec / 10);
    let calc_sec = sec * 6;

    hour.style.transform = `rotate(${calc_hr}deg)`;
    minute.style.transform = `rotate(${calc_min}deg)`;
    second.style.transform = `rotate(${calc_sec}deg)`;
}, 1000);

