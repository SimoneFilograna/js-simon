
//imposto il giorno cui si deve arrivare in ms
const countdownDate = new Date(2023, 7, 14, 9, 30).getTime();
const visibleTimer = document.getElementById("timer")
console.log(countdownDate)



setInterval(function(){    
    const nowDate = new Date().getTime();
    const millDiff = countdownDate - nowDate;
    var hours = Math.floor((millDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((millDiff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((millDiff % (1000 * 60)) / 1000);
    visibleTimer.innerHTML = `${hours}:${minutes}:${seconds} `
} , 100);











