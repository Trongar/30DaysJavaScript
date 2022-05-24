const secondsHand  = document.querySelector('.hand-seconds');
const minutesHand  = document.querySelector('.hand-minutes');
const hoursHand  = document.querySelector('.hand-hours');

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const secondsDeg = (seconds / 60) * 360 + 90;
    const minutesDeg = (minutes / 60) * 360 + 90;
    const hoursDeg = (hours / 12) * 360 + 90;
    secondsHand.style.transform = `rotate(${secondsDeg}deg)`;
    minutesHand.style.transform = `rotate(${minutesDeg}deg)`;
    hoursHand.style.transform = `rotate(${hoursDeg}deg)`;
}
setInterval(setDate, 1000);