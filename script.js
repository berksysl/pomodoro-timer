const clockTime = document.getElementById("clock-time");

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

