/*
Rock paper scissors
receive rsp INPUT from the player *
//create 3x buttons *
STORE the input in a VARIABLE *
DISPLAY user input in a paragraph *
//buttons generate a string  *
generate RANDOM rsp from computer
//create an array with rock paper scissors
//create random function with values 0-2
//create function which ties the random output to array index to select
//rock paper scissors
STORE the input in a VARIABLE
//stores computer value in a string
COMPARE the two values to determine winner of each round
//not sure
OUTPUT a string which announces the winner of each round
//paragraph text content
STORE player score in a VARIABLE
//int playerscore variable
UPDATE player score
// player score ++ or stay the same
STORE computer score in a VARIABLE

UPDATE computer score
continue the game WHILE neither party has 5 points
//entire game in a loop which continues until someone has 5
determine and OUTPUT winner after the winner has 5 points
//output different strings bbased on who ends up with 5 points
*/






let playerInput = "default";

let rockBtn = document.getElementById("playerRock");
let paperBtn = document.getElementById("playerPaper");
let scissorsBtn = document.getElementById("playerScissors");
let playerSelection = document.getElementById("playerSelection");
let btnPushed = document.getElementById('buttonWrapper');
let winner = document.getElementById('winner');

let playerBtn = document.querySelectorAll('button');



let compArray = ["Rock", "Paper", "Scissors"];
let compOutput = "default";
let compSelection = document.getElementById("computerSelection");




let playerScore = 0;
let computerScore = 0;
let playerScoreDisplay = document.getElementById("playerScore");
let computerScoreDisplay = document.getElementById("computerScore");


playerBtn.forEach((button) => {

    button.addEventListener('click', () => {
        playerInput = button.id;
        playRound();
    }
     )
    
});


function displayPlayerSelection(){
    playerSelection.textContent = `Player Selects ${playerInput}`;
}

function seedIndex(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function computerSelection(){
    let compIndex = seedIndex(0,3);
    compOutput = compArray[compIndex];
}
function displayComp(){
    compSelection.textContent = `Computer Selects ${compOutput}`;
}

function compareOutput(playerSelection, computerSelection){
    if ((playerSelection == "Rock" && computerSelection == "Scissors") ||
        (playerSelection == "Scissors" && computerSelection == "Paper") ||
        (playerSelection == "Paper" && computerSelection == "Rock")) {

            playerScore += 1;
            playerScoreDisplay.textContent = `Player: ${playerScore}`
    }

    else if((computerSelection == "Rock" && playerSelection == "Scissors") ||
    (computerSelection == "Scissors" && playerSelection == "Paper") ||
    (computerSelection == "Paper" && playerSelection == "Rock")){

        computerScore += 1;
        computerScoreDisplay.textContent = `Computer: ${computerScore}`
    }
}

function playRound(){

    if(playerScore < 5 && computerScore < 5) {
        computerSelection();
    displayPlayerSelection();
    displayComp();
    compareOutput(playerInput, compOutput);

    }

    else{
        btnPushed.disabeled = true;
        declareWinner();
    }
    
}

function declareWinner(){
    if (playerScore == 5){
        winner.textContent= "You win!";
    }

    else if (computerScore == 5){
        winner.textContent="Computer wins!";
    }
}










