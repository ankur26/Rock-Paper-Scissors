// alert("Welcome to Rock Paper Scissors, please have your devtools open if you are using Chrome");

// let name = prompt("Enter your name");

// alert("Hello ! "+name);

let playerScore = 0;
let computerScore = 0;
let plays = ["ROCK","PAPER","SCISSOR"]; 
const player = document.getElementById("playerScore");
const computer = document.getElementById("computerScore");
const roundWinner = document.getElementById("roundWinner");
const winner = document.getElementById("winner");
const buttons = document.querySelectorAll('button');
const roundPlay = document.querySelector('.roundPlay');
const roundOutcome = document.querySelector('#roundOutcome');
const whoWon = document.querySelector('#whoWon');
const playerScoreDiv = document.querySelector('.playerScoreDiv');
const computerScoreDiv = document.querySelector('.computerScoreDiv');
const generatePlay = () => {
    return plays[Math.floor(Math.random()*3)];
}
const initiateRound = (player,computer) =>{
    roundPlay.style.display = "block";
    roundOutcome.textContent = `Player used ${player} Computer used ${computer}`;
    if(player === computer){
        whoWon.textContent = "This round is a draw!";
        playerScoreDiv.classList.remove('win');
        computerScoreDiv.classList.remove('win');
    }
    else{
        playerWin = 1 ? (player === "ROCK" && computer === "SCISSOR") || (player === "SCISSOR" && computer === "PAPER") || (player==="PAPER" && computer === "ROCK") : 0;
        computerWin= 1 ? !((player === "ROCK" && computer === "SCISSOR") || (player === "SCISSOR" && computer === "PAPER") || (player==="PAPER" && computer === "ROCK")) : 0;
        if(playerWin && !computerWin){
            playerScore+=1;
            whoWon.textContent = "Player wins this round!";
            playerScoreDiv.classList.add('win');
            computerScoreDiv.classList.remove('win');
        }else{
            computerScore+=1;
            whoWon.textContent = "Computer wins this round!";
            computerScoreDiv.classList.add('win');
            playerScoreDiv.classList.remove('win');
            // console.log("Computer wins this round!");
        }
        // console.log(`Current score is player :${playerScore} , Computer : ${computerScore}`);
    }
}
const checkWinner = () => {
    if (playerScore === 5 || computerScore === 5){
        let finalWinner = playerScore >  computerScore ? "Player" : "Computer";
        roundWinner.style.display = "block";
        winner.textContent = `${finalWinner} wins the game, hit restart for a new round!`;
        buttons.forEach(button => {if(button.value !== "restart") console.log(button.disabled = true)});
    }
}

const restartRound= () => {
    buttons.forEach(button=> button.disabled = false);
    playerScore = 0;
    computerScore = 0;
    player.textContent = playerScore;
    computer.textContent = computerScore;
    roundWinner.style.display = "none";
    roundPlay.style.display = "none";
    playerScoreDiv.classList.remove('win');
    computerScoreDiv.classList.remove('win');
}
// Commented out 5 round playing logic
// for(let i = 0; i<5;i++){
//     let input = parseInt(prompt("Enter 1 for Rock, 2 for paper and 3 for scissors")); 
//     if (input && input <4 && input > 0){
//         initiateRound(plays[input-1],generatePlay());
//     }else
//     {
//         console.log("Invalid input: this round will be skipped");
//     }
// }
// checkWinner();

function updateScores(){
    player.textContent = playerScore;
    computer.textContent = computerScore;
}

function play(e){
    if(this.value==="restart"){
        restartRound();
        return;
    }

    initiateRound(this.value,generatePlay());
    updateScores();
    checkWinner();
}

buttons.forEach(button => button.addEventListener('click',play))