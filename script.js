/*DOM ELEMENTS*/
const clockTime = document.getElementById("clock-time");
const startButton = document.getElementById("strtbtn");
const stopButton = document.getElementById("stpbtn");
const resetButton = document.getElementById("resetbtn");
const curProgress = document.getElementById("current-progress");
const appleContainer = document.getElementById("apple-container");
const progBar = document.getElementById("progress-bar")
const remainedMinutes = document.getElementById("minutes");
const remainedSeconds = document.getElementById("seconds");

var myInterval;
/* Getting Current Time and showing in the DOM */
function ShowTime(){
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    if(hours < 10)
        hours = "0" + hours;
    if(minutes < 10)
        minutes = "0" + minutes;

    clockTime.textContent = hours + ":" + minutes;
}

setInterval(ShowTime, 1000);

function start(){
    stopButton.disabled = false;
    resetButton.disabled = false;
    startButton.disabled = true;
    startTimer();
    myInterval = setInterval(startTimer, 1000);
}

function stop(){
    resetButton.disabled = false;
    stopButton.disabled = true;
    startButton.disabled = false;
    clearInterval(myInterval);
}

function reset() {
    clearInterval(myInterval);
    resetButton.disabled = true;
    stopButton.disabled = true;
    startButton.disabled = false;
    remainedMinutes.textContent = "25";
    remainedSeconds.textContent = "00";
    curProgress.style.width = "0%";
}


/* Timer */
function startTimer(){
        //Converting current text to int
        var min = parseInt(remainedMinutes.textContent, 10);
        var sec = parseInt(remainedSeconds.textContent, 10);
        if(sec === 0){
            min--;
            sec = 59
        }
        else{
            sec--;
        }
        updateTime(min, sec);
        updateProgress();
}

function newPomodoro() {
        let newApple = document.createElement("img");
        newApple.src = "./tomatovector.svg";
        appleContainer.append(newApple);
}

function updateTime(min, sec){
    if(min == 0 && sec == 0)
    {
        min = 25;
        sec = 0;
        clearInterval(myInterval);
        reset();
        newPomodoro();
    }
    if(min < 10){
        min = "0" + min;
    }
    if(sec < 10){
        sec = "0" + sec;
    }
    remainedMinutes.textContent = min;
    remainedSeconds.textContent = sec;
}

var sec1 = 15;
var x = 1;
function updateProgress() {
    if(sec1 === 15){
        curProgress.style.width = x + "%";
        x++;
        sec1 = 1;
    }
    else{
        sec1++
    }
}