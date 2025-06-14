/*let username = window.prompt("What are you learning today?");
console.log(`Hello ${username}`);*/

let username = document.getElementById("input").value;
document.getElementById("mySubmit").onclick = function(){
    document.getElementById("myH1").textContent = `Hello ${username}`;
}



const increaseBtn = document.getElementById("increment");
const decreaseBtn = document.getElementById("decrement");
const ResetBtn = document.getElementById("reset");
let count = 0;

increaseBtn.onclick = function(){
    count ++;
    document.getElementById("count-label").textContent = count;
}

decreaseBtn.onclick = function(){
    count --;
    document.getElementById("count-label").textContent = count;
}

ResetBtn.onclick = function(){
    count = 0;
    document.getElementById("count-label").textContent = count;
}