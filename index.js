alert("Welcome to Rock Paper Scissors, please have your devtools open if you are using Chrome");

let name = prompt("Enter your name");

alert("Hello ! "+name);

let playerScore = 0;
let computerScore = 0;
let plays = ["ROCK","PAPER","SCISSOR"]; 
const generatePlay = () => {
    return plays[Math.floor(Math.random()*3)];
}
const initiateRound = (player,computer) =>{
    console.log(`Player used ${player} Computer used ${computer}`);
    if(player === computer){
        console.log("This round is a draw!")
    }
    else{
        playerWin = 1 ? (player === "ROCK" && computer === "SCISSOR") || (player === "SCISSOR" && computer === "PAPER") || (player==="PAPER" && computer === "ROCK") : 0;
        computerWin= 1 ? !((player === "ROCK" && computer === "SCISSOR") || (player === "SCISSOR" && computer === "PAPER") || (player==="PAPER" && computer === "ROCK")) : 0;
        if(playerWin && !computerWin){
            playerScore+=1;
            console.log("Player wins this round!");
        }else{
            computerScore+=1;
            console.log("Computer wins this round!");
        }
        console.log(`Current score is player :${playerScore} , Computer : ${computerScore}`);
    }
}
const checkWinner = () => {
    let winner = playerScore === computerScore ? "It's a Draw!" : playerScore > computerScore ? "Player Wins !" : "Computer Wins !";
    console.log(winner);
}
for(let i = 0; i<5;i++){
    let input = parseInt(prompt("Enter 1 for Rock, 2 for paper and 3 for scissors")); 
    if (input && input <4 && input > 0){
        initiateRound(plays[input-1],generatePlay());
    }else
    {
        console.log("Invalid input: this round will be skipped");
    }
}
checkWinner();
