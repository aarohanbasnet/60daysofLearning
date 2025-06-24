//Shuffle an array

//common practice is to use Math.random() but it is
//not recommended to use it for large arrays as it is
//inefficient and not uniform so we use Fisher-Yales algorithm

const cards = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];

function shuffleCards(){
    for(let i = cards.length -1; i > 0; i--){
        const random = Math.floor(Math.random()*(i+1));
        [cards[i],cards[random]]= [cards[random], cards[i]];
    }
}

shuffleCards(cards);
console.log(cards);







//CLOSURES
function createCounter(){
let count = 0;
function increment(){
    count ++;
    console.log(`Count increased to ${count}`);
}

function getCount(){
    return count;
}
return {increment, getCount} //{increment : increment}
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(`The current count is ${counter.getCount()}`);

//Closure for a game to keep track of points

function createGame(){
let score = 0;

function increaseScore(points){
    score += points;
    console.log(`+${points}pts`);

}

function decreaseScore(points){
    score -= points;
    console.log(`-${points}pts`);

}


function getScore(){
   return score;
}
 return{increaseScore, decreaseScore, getScore};
}

const game = createGame();

game.increaseScore(5);
game.decreaseScore(3);
console.log(`The final score is ${game.getScore()}pts`);

//setTimeout()

function sayHello(){
    console.log("Hello");
};

const timeoutID = setTimeout(sayHello, 3000);
clearTimeout(timeoutID);

let timeoutID1;

function startTimer(){
    timeoutID1 = setTimeout(()=> window.alert("Hello"),3000);
    console.log("STARTED");
}

function clearTimer(){
   clearTimeout(timeoutID1);
    console.log("CLEARED");
}
