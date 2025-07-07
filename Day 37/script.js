
    let isPlaying = "";
    
    let score = JSON.parse(localStorage.getItem('score'))||{
        wins : 0,
        losses : 0,
        tie : 0, }
//initially it was here when brave threw error but works for chrome. Despite functionality error
       updateScore();
      
       
    function playGame(playerMove){
        const computerMove =  pickComputerMove();
        let result = '';
        if(playerMove === 'rock'){
            if(computerMove === 'rock'){
                 result = 'Tie.';
            }else if(computerMove === 'paper'){
                result = 'You Lose.'; 
        }else if(computerMove === 'scissors'){
            result = 'You win.';}
    }

    if(playerMove === 'paper'){
            if(computerMove === 'paper'){
                 result = 'Tie.';
            }else if(computerMove === 'scissors'){
                result = 'You Lose.'; 
        }else if(computerMove === 'rock'){
            result = 'You win.';}
    }

    if(playerMove === 'scissors'){
            if(computerMove === 'scissors'){
                 result = 'Tie.';
            }else if(computerMove === 'paper'){
                result = 'You win.'; 
        }else if(computerMove === 'rock'){
            result = 'You Lose.';}
    }
    if(result === 'You win.'){
        score.wins += 1;
    }else if(result === 'You Lose.'){  
        score.losses += 1;
    }else if(result === 'Tie.'){
        score.tie += 1;}

    document.querySelector('.JS-result')
    .innerHTML = result;
    
    document.querySelector('.JS-move')
    .innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-icon"><img src="images/${computerMove}-emoji.png" class="move-icon" >Computer`
   
updateScore();

localStorage.setItem('score', JSON.stringify(score));

}
    function pickComputerMove(){
        const randomNumber = Math.random();
        let computerMove = '';
        if(randomNumber >= 0 && randomNumber < 1/3){
            computerMove='rock';
        }else if(randomNumber >= 1/3 && randomNumber < 2/3){
            computerMove='paper';
        }else if(randomNumber >= 2/3 && randomNumber < 1){
            computerMove='scissors';
        }
        return computerMove;
    }
    console.log(pickComputerMove());

    function updateScore(){
        document.querySelector('.JS-score')
        .innerHTML = `Wins : ${score.wins} Losses : ${score.losses} Ties : ${score.tie}`
    }
    let isAutoPlaying = "";
    let intervalID = "";
    function autoPlay(){
        if(!isAutoPlaying){
        intervalID = setInterval(function(){
         const playerMove = pickComputerMove();
         playGame(playerMove);
         isAutoPlaying = true;
        },1000);}
        else{
            clearInterval(intervalID);
            isAutoPlaying = false;
        }

        

    }
    
    
