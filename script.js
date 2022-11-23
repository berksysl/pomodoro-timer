/*DOM ELEMENTS*/
const clockTime = document.getElementById("clock-time");

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
    
    if(sec === 0){
        min--;
        sec = 59
    }
    else{
        sec--;
    }
    updateTime(remainedMinutes, remainedSeconds, min, sec);
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

function start(){
    const startButton = document.getElementById("strtbtn");
    startButton.disabled = true;
    startTimer();
    setInterval(startTimer, 1000);
}

function stop(){
    
}
