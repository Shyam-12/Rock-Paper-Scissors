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
console.log(compChoice)