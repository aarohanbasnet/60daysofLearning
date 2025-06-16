const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random()*maxNum - minNum)+minNum;
console.log(answer);
let attemps = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Guess the number between ${minNum} and ${maxNum} `);
    guess = Number(guess);
    
    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }
    else if(guess < minNum || guess > maxNum){
        window.prompt("Please enter the number between the range");
    }
    else{
        attemps++;
        if(guess < answer){
            window.alert("TOO LOW! TRY AGAIN");
            }
        else if(guess > answer){
            window.alert("TOO HIGH! TRY AGAIN");
        }
        else{
            window.alert(`Correct! The answer was ${answer}. It took you ${attemps} attempts` );
            running = false;

        }
        
    }
   
}
