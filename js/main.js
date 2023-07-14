"use strict"

//imposto il giorno cui si deve arrivare in ms
const countdownDate = new Date(2023, 6, 14, 9, 30).getTime();

const visibleTimer = document.getElementById("timer");
console.log(countdownDate);



let mainTimer = setInterval(function(){    
    const nowDate = new Date().getTime();
    const millDiff = countdownDate - nowDate;
    //conversione di ms in hr, min, sec
    let hours = Math.floor((millDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((millDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((millDiff % (1000 * 60)) / 1000);
    visibleTimer.innerHTML = `${hours}:${minutes}:${seconds}`;
    // condizione che blocca il timer una volta raggiunto lo 0
    if (millDiff < 0 ){
        clearInterval(mainTimer);
        visibleTimer.innerHTML = "LET'S START";
    }
} , 100);















