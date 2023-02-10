const choices = {
    0: "rock",
    1: "paper",
    2: "scissors"
};

userScore = 0;
compScore = 0;

function getRandomValue(){
    random = Math.floor(3 * Math.random());
    return random;
}

function getComputerChoice(value){
    // console.log(value);
    if (value == 0){
        return choices[0];
    } else if (value == 1){
        return choices[1];
    } else {
        return choices[2];
    }
}

// console.log(compChoice.toLowerCase());

function playRound(userChoice, compChoice){
    if (userChoice == "rock" && compChoice == "rock"){
        return 0;
    } else if (userChoice == "rock" && compChoice == "paper"){
        return 1;
    } else if (userChoice == "rock" && compChoice == "scissors"){
        return 2;
    } else if (userChoice == "paper" && compChoice == "rock"){
        return 2;
    } else if (userChoice == "paper" && compChoice == "paper"){
        return 0;
    } else if (userChoice == "paper" && compChoice == "scissors"){
        return 1;
    } else if (userChoice == "scissors" && compChoice == "rock"){
        return 1;
    } else if (userChoice == "scissors" && compChoice == "paper"){
        return 2;
    } else {
        return 0;
    }
}

// console.log(playRound(userChoice, compChoice));

function game(){
    userChoice = prompt().toLowerCase();
    compChoice = getComputerChoice(getRandomValue());

        const res = playRound(userChoice, compChoice);
        
        if (res == 0){
            console.log("It was a draw");
        } else if (res == 1){
            console.log("You lose");
            compScore++;
        } else {
            console.log("You win");
            userScore++;
        }
}

for(i = 0; i < 5; i++){
    game();
}

if (userScore > compScore){
    console.log("You Won the Game");
} else if (userScore < compScore){
    console.log("You lose the Game");
} else {
    console.log("Ah! It was a draw");
}