//const { discovery_v1 } = require("googleapis");

computerPlay = ()  => {
    const numGuess = 1+ Math.floor(Math.random()*3);
    var playGuess = '';
    switch(numGuess){
        case 1:
            playGuess="rock";
            break;
        case 2:
            playGuess="paper";
            break;
        case 3:
            playGuess="scissors";
            break;
       
    }

    return playGuess;
};

// let computerSelection = computerPlay().toLowerCase();

// if (playerSelection === "" || playerSelection === null ){
//     alert("Enter valid selection please!");
//     prompt('Enter rock, paper, or scissors', '')
// }
var playerPoints = 0;
var computerPoints=0;
playRPS =(playerSelection,computerSelection) => {
    if((playerSelection === "rock" && computerSelection === "scissors" ) || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper" )) {
        playerPoints+=1;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
        
    }

    else if ((playerSelection === "scissors" && computerSelection === "rock" ) || (playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors" )){
        computerPoints+=1;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
        
    }

    else {
        return `Draw! ${playerSelection} is the same as ${computerSelection}`;
    };

};

//const resultsDiv = document.querySelector('.display');
displayResults = ()=>{
    

    const buttons = document.querySelectorAll('button');
    
    buttons.forEach((btn)=>{
        cLogRPS =()=>{
    let results = playRPS(btn.id,computerPlay());
    console.log(results);

    let pNew = document.querySelector('.display>#current');
    let pNew2 = document.querySelector('.display>#score');
    
    pNew.textContent = results
    pNew2.textContent = `Player: ${playerPoints} | Computer: ${computerPoints}`;
    let h2reportWinner = document.querySelector('.display>#winner');
    if(playerPoints===5||computerPoints===5){
            reportWinner=()=>{
            if(playerPoints>computerPoints){
                return `You Win`;
            }
            else{
                return "Computer wins, you lose";
            }
        }
        console.log( `Game of 5 over, ${reportWinner()} `);
        h2reportWinner.textContent = `Game of 5 over, ${reportWinner()} `;
        playerPoints =0;
        computerPoints=0;
        return
    }
    

}
        btn.addEventListener('click',cLogRPS);
    });
}



displayResults();
//resultsDiv.textContent = `These are the results ` +<br></br>+ `${results}`;

// game=(playerPoints,computerPoints)=>{
    
//     for (let i=0;i<5;i++){
//         let playerSelection = prompt('Enter rock, paper, or scissors', '');
//         let computerSelection = computerPlay().toLowerCase();
//         console.log(playRPS(playerSelection, computerSelection));
        
//     }

//     reportWinner=()=>{
//         if(playerPoints>computerPoints){
//             return `You Win`;
//         }
//         else{
//             return "Computer wins, you lose";
//         }
//     }
//     console.log( `Game of 5 over, ${reportWinner()} `)
// }

// game(playerPoints,computerPoints);
