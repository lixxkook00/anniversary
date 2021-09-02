const hours = document.querySelector('.times__item--hours')
const minutes = document.querySelector('.times__item--minutes')
const seconds = document.querySelector('.times__item--seconds')



const countDownDate = new Date("Sep 3, 2021 00:00:00").getTime();

formatTime = (number) => {
    return number < 10 ? `0${number}` : number;
}

const x = setInterval(function() {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var second = Math.floor((distance % (1000 * 60)) / 1000);

    hours.innerText = formatTime(hour);
    minutes.innerText = formatTime(minute);
    seconds.innerText = formatTime(second);

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);