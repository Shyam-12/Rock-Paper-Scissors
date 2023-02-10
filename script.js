const choices = {
    0: "rock",
    1: "paper",
    2: "scissors"
};

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

compChoice = getComputerChoice(getRandomValue());
// console.log(compChoice);

userChoice = "rock";

if (userChoice == "rock" && getComputerChoice(getRandomValue()) == "rock"){
    console.log("Draw");
} else if (userChoice == "rock" && getComputerChoice(getRandomValue()) == "paper"){
    console.log("You lose! Paper beats rock");
} else if (userChoice == "rock" && getComputerChoice(getRandomValue()) == "scissors"){
    console.log("You win! Rock beats Scissors");
} else if (userChoice == "paper" && getComputerChoice(getRandomValue()) == "rock"){
    console.log("You win!");
} else if (userChoice == "paper" && getComputerChoice(getRandomValue()) == "paper"){
    console.log("Draw");
} else if (userChoice == "paper" && getComputerChoice(getRandomValue()) == "scissors"){
    console.log("You lose! Scissors beats paper");
} else if (userChoice == "scissors" && getComputerChoice(getRandomValue()) == "rock"){
    console.log("You lose! Rock beats scissors");
} else if (userChoice == "scissors" && getComputerChoice(getRandomValue()) == "paper"){
    console.log("You win");
} else (userChoice == "scissors" && getComputerChoice(getRandomValue()) == "scissors")
    console.log("Draw");
