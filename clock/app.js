let seconds = document.querySelector('.seconds');
let mins = document.querySelector('.minutes');
let hours = document.querySelector('.hours');
function setDate() {
    let currDate = new Date();
    let second = currDate.getSeconds();

    const secondDegrees = (360 / 60) * second;
    seconds.style.transform = `rotate(${secondDegrees}deg)`;

    let min = currDate.getMinutes();
    const minDegrees = (360 / 60) * min;
    mins.style.transform = `rotate(${minDegrees}deg)`;

    let hour = currDate.getHours();
    const hourDegrees = (360 / 12) * hour + ((360/12) / 60 * min) + ((360/12) / 60 / 60 * second);
    hours.style.transform = `rotate(${hourDegrees}deg)`;

}

setInterval(setDate, 1000);