//getting the user selection whenever user clicks a button'

let userChoice, compSelection, userScore = 0, compScore = 0;
const selectedButton = document.querySelectorAll('[data-selection]');
console.log(selectedButton);

selectedButton.forEach(selectedBtn => {
    selectedBtn.addEventListener('click', e => {
        const selection = selectedBtn.dataset.selection;
        userChoice = makeSelection(selection);
    });
});

//making selection based on user and computer choices

function makeSelection(selection) {
    compSelection = getComputerChoice();
    userChoice = selection;

    console.log(userChoice);
    console.log(compSelection);

    if (userChoice == compSelection){
        console.log('Draw');
    } else if (userChoice == 'rock' || compSelection == 'paper'){
        console.log('Computer wins');
        compScore++;
    } else if (userChoice == 'rock' || compSelection == 'scissors'){
        console.log('You win');
        userScore++;
    } else if (userChoice == 'paper' || compSelection == 'rock'){
        console.log('You win');
        userScore++;
    } else if (userChoice == 'paper' || compSelection == 'scissors'){
        console.log('Computer wins');
        compScore++;
    } else if (userChoice == 'scissors' || compSelection == 'paper'){
        console.log('You win');
        userScore++;
    } else {
        console.log('Computer wins');
        compScore++;
    }

    console.log(userScore);
    console.log(compScore);
};


// COMPUTER CHOOSES RANDOMLY

const choices = {
    0: "rock",
    1: "paper",
    2: "scissor"
};

userScore = 0;
compScore = 0;

function getComputerChoice(){
    const compSelection = Math.floor(Math.random() * 3);
    return choices[compSelection];
}









//OLD CODE REDUNDANCY WERE THERE


// // HOME SCREEN
// // const vsComp = document.getElementById('#vsComp');
// // const vsPlayer = document.getElementById('#vsPlayer');

// // vsComp.addEventListener('click', showGameScreenComp);


// //GAME

// // USER CHOOSES
// //getting the user selection whenever user clicks a button'
// const selectedButton = document.querySelectorAll('[data-selection]');
// // console.log(selectedButton);

// let userChoice, compSelection;

// selectedButton.forEach(selectedBtn => {
//     selectedBtn.addEventListener('click', e => {
//         const selection = selectedBtn.dataset.selection;
//         makeSelection(selection);
//         console.log(selection);
//     })
// })


// function makeSelection(selection) {
//     compSelection = getComputerChoice();
//     userChoice = selection;
//     console.log(userChoice);
//     console.log(compSelection);
// };


// // COMPUTER CHOOSES RANDOMLY

// const rockButton = document.querySelector('#rock');
// const paperButton = document.getElementById('#paper');
// const scissorButton = document.getElementById('#scissor');

// const choices = {
//     0: "rock",
//     1: "paper",
//     2: "scissor"
// };

// userScore = 0;
// compScore = 0;

// function getComputerChoice(){
//     const compSelection = Math.floor(3 * Math.random());
//     return choices[compSelection];
// }

// // console.log(getComputerChoice().toLowerCase());

// function playRound(userChoice, compChoice){
//     if (userChoice == "rock" && compChoice == "rock"){
//         return 0;
//     } else if (userChoice == "rock" && compChoice == "paper"){
//         return 1;
//     } else if (userChoice == "rock" && compChoice == "scissor"){
//         return 2;
//     } else if (userChoice == "paper" && compChoice == "rock"){
//         return 2;
//     } else if (userChoice == "paper" && compChoice == "paper"){
//         return 0;
//     } else if (userChoice == "paper" && compChoice == "scissor"){
//         return 1;
//     } else if (userChoice == "scissor" && compChoice == "rock"){
//         return 1;
//     } else if (userChoice == "scissor" && compChoice == "paper"){
//         return 2;
//     } else {
//         return 0;
//     }
// }

// // console.log(playRound(userChoice, compChoice));
// // console.log(rockButton);

// function game(userChoice){
//     // userChoice = prompt().toLowerCase();
//     compChoice = getComputerChoice();

//     const res = playRound(userChoice, compChoice);
        
//     if (res == 0){
//         console.log("It was a draw");
//     } else if (res == 1){
//         console.log("You lose");
//         compScore++;
//     } else {
//         console.log("You win");
//         userScore++;
//     }
// }

// rockButton.addEventListener('click', game('rock'));
// paperButton.addEventListener('click', game('paper'));
// scissorButton.addEventListener('click', game('scissor'));

// if (userScore > compScore){
//     console.log("You Won the Game");
// } else if (userScore < compScore){
//     console.log("You lose the Game");
// } else {
//     console.log("Ah! It was a draw");
// }

