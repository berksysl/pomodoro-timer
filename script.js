/*DOM ELEMENTS*/
const clockTime = document.getElementById("clock-time");
const startButton = document.getElementById("strtbtn");
const stopButton = document.getElementById("stpbtn");
const resetButton = document.getElementById("resetbtn");
const curProgress = document.getElementById("current-progress");
const appleContainer = document.getElementById("apple-container");

var pomodoroCount = 0;
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

/* Timer */
function startTimer(){

        const remainedMinutes = document.getElementById("minutes");
        const remainedSeconds = document.getElementById("seconds");

        //Converting current text to int
        let min = parseInt(remainedMinutes.textContent, 10);
        let sec = parseInt(remainedSeconds.textContent, 10);
        if(sec == 0 && min == 0){
            pomodoroCount += 1;
            newPomodoro(pomodoroCount);
            reset();
        }
        else if(sec === 0){
            min--;
            sec = 59
        }
        else{
            sec--;
        }
        updateTime(remainedMinutes, remainedSeconds, min, sec);
        updateProgress(min, sec);
}

function newPomodoro(pomodoroCount) {
    for(var i = 0; i < pomodoroCount; i++){
        let newApple = document.createElement("img");
        newApple.src = "./tomatovector.svg";
        appleContainer.append(newApple);
    }
}

function updateTime(remainedMinutes, remainedSeconds, min, sec){
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
function updateProgress(min, sec) {
    if(sec1 === 15){
        var widthEl = parseFloat(curProgress.offsetWidth);
        widthEl+=3;
        curProgress.style.width = widthEl + "px";
        sec1 = 1;
    }
    else{
        sec1++;
    }
    console.log(sec1);
}

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
    resetButton.disabled = true;
    stopButton.disabled = true;
    startButton.disabled = false;
    clearInterval(myInterval);
    const remainedMinutes = document.getElementById("minutes");
    const remainedSeconds = document.getElementById("seconds");
    remainedMinutes.textContent = "25"
    remainedSeconds.textContent = "00";
    curProgress.style.width = "0%";
}
