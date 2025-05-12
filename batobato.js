
const RockMove = document.getElementById("Rock");
const PaperMove = document.getElementById("Paper");
const ScissorsMove = document.getElementById("Scissors");
const Move = document.getElementById("move");
const Winner = document.getElementById("result.g");

let playerMove;
let computerMove;
let number;
let result; 
let PWin = 0;
let Cwin = 0;
let Game = false;


RockMove.onclick = function(){
    
    number = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    number = Number(number);
    playerMove = "Rock";

    if(number === 1){
        computerMove = "Rock";
        result = 'Tie';
    }
    else if(number === 2){
        computerMove = "Paper";
        result = 'Computer Won';
    }
    else if(number === 3){
        computerMove = "Scissors";
        result = 'Player Won';
    }

    Move.textContent = `Player's Move: ${playerMove} | Computer's Move: ${computerMove}`
    Winner.textContent = `Result: ${result}`;
}

PaperMove.onclick = function(){
    
    number = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    number = Number(number);
    playerMove = "Paper";

    if(number === 1){
        computerMove = "Rock";
        result = 'Player Won';
    }
    else if(number === 2){
        computerMove = "Paper";
        result = 'Tie';
    }
    else if(number === 3){
        computerMove = "Scissors";
        result = 'Computer Won';
    }

    Move.textContent = `Player's Move: ${playerMove} | Computer's Move: ${computerMove}`
    Winner.textContent = `Result: ${result}`;
}

ScissorsMove.onclick = function(){
    
    number = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    number = Number(number);
    playerMove = "Scissors";

    if(number === 1){
        computerMove = "Rock";
        result = 'Computer Won';
    }
    else if(number === 2){
        computerMove = "Paper";
        result = 'Player Won';
    }
    else if(number === 3){
        computerMove = "Scissors";
        result = 'Tie';
    }

    Move.textContent = `Player's Move: ${playerMove} | Computer's Move: ${computerMove}`
    Winner.textContent = `Result: ${result}`;
}