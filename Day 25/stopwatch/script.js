const display = document.getElementById("display");
let timer = null; //timer holds id of setInterval so we can keep track of it and have control
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start(){

    if(!isRunning){
        startTime = Date.now()-elapsedTime; //Start time is in milliseconds since epic, epic is when computer thinks time began
        timer = setInterval(update, 10); //timer stores unique id to work with this func if we ever need to stop it
        isRunning = true;
    }

}

function stop(){
    
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }

}

function reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00"

}

function update(){

    const currentTime = Date.now();
    elapsedTime = currentTime - startTime; //inmilliseconds

    //converting into readable format

    let hours = Math.floor(elapsedTime /(1000 * 60 * 60)); //convert ms into h
    let minutes = Math.floor(elapsedTime / (1000*60) % 60); //to restrict min to go above 60 we use mod
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000/10 ) //just 2 digits

    hours = String(hours).padStart(2,"0");
    minutes = String(minutes).padStart(2,"0");
    seconds = String(seconds).padStart(2,"0");
    milliseconds = String(milliseconds).padStart(2,"0");

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
} 