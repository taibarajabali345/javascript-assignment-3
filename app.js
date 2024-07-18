
// TASK 1
function subnum(c, d) {
    const sub = c - d
    return sub
}
console.log(subnum(24, 2))
console.log(subnum(8, 4))
subnum()

// TASK 2
let arrey = ["Hello!", "HY!", "Good day!",]

function askname() {
    let name = prompt("Enter your name")


    const randomIndex = Math.floor(Math.random() * arrey.length)
    const randomWord = arrey[randomIndex]
    console.log(` ${randomWord}  ${name} `)
}

askname()

// TASK 3
function calculator(){
    const num1 = parseInt(prompt("Enter Number 1"));
    const num2 = parseInt(prompt("Enter Number 2"));
    const Opreater = prompt("Enter the operation (-, *, /, %,+):")

    if(Opreater === "+"){
        const add = num1 + num2
        return add
    }

    else if(Opreater === "-"){
        const sub = num1 - num2
        return sub
    }

    if(Opreater === "/"){
        const div = num1 / num2
        return div
    }

    if(Opreater === "*"){
        const mul = num1 * num2
        return mul
    }
}
console.log(calculator())
// TASK 4
let prize = prompt("Select a number between 0 to 10:")
switch (prize) {
    case "0":
        console.log("You Won a Chocolate bar!")
        break;

    case "1":
        console.log("You Won a free hug!")
        break;

    case "2":
        console.log("You Won a Movie ticket!")
        break;

    case "3":
        console.log("You Won a book!")
        break;

    case "4":
        console.log("You Won a gift card!")
        break;

    case "5":
        console.log("You Won a Trophy!")
        break;

    case "6":
        console.log("You Won a Pizza party!")
        break;

    case "7":
        console.log("You Won a game console!")
        break;

    case "8":
        console.log("You Won a bike!")
        break;

    case "9":
        console.log("You Won a tablet!")
        break;

    case "10":
        console.log("You Won a car!")
        break;

    default:
        console.log("Invalid selection. Please try again .")


}

// TASK 5
function guessMyNumber() {

    let secretNumber = 60;
    let userGuess = prompt("Guess a number between 1 to 100:")

    if (userGuess == secretNumber) {
        console.log("Congratulations! You guessed the number!")
    }
    else if (userGuess < secretNumber) {
        console.log("Too low! Try again.");
    }
    else {
        console.log("Too high! Try again.")
    }
}

guessMyNumber()

// TASK 6
let friend = prompt("Enter a name");
let message;
switch (friend) {
case "Ayesha" :
case "Maheen" :
case "Mahnoor" :
case "Anila" :
message = friend + " is my friend";
break;
default :
message = "I don't know " + friend;
}
console.log(message);

// TASK 7
function playgame() {
    let userChoice = prompt("Rock , Paper or scissors");
    let computerChoice = Math.random()< 0.5 ? 'Rock' : 'Paper';

    if(userChoice === computerChoice){
    console.log("Sorry its a Tie")
    }

    else if(userChoice === "Rock" && computerChoice === "Paper"){
        console.log("Computer wins!")
    }

    else if(userChoice === "Paper" && computerChoice === "Rock"){
        console.log("You win!")
    }

    else if(userChoice === "Scissors" && computerChoice === "Rock"){
        console.log("Computer wins!")
    }

    else if(userChoice === "Rock" && computerChoice === "Scissors"){
        console.log("you win!")
    }

    else if(userChoice === "Paper" && computerChoice === "Scissors"){
        console.log("Computer wins!")
    }

    else if(userChoice === "Scissors" && computerChoice === "Paper"){
        console.log("you win!")
    }

}
playgame();

function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    document.getElementById('clock').innerHTML
=
    (hours < 10 ? '0' + hours : hours  ) +
    ':' + (minutes < 10 ? '0' + minutes : minutes)+
    ':' + (seconds < 10 ? '0' + seconds : seconds)
}
setInterval(updateClock,1000);