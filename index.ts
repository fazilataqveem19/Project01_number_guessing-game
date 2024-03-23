#! /usr/bin/env node

import inquirer from "inquirer";

/* These are the following steps we have to follow. */

// Step # 1: Computer will generate a random number.
// Step # 2: User input for guessing number.
// Step # 3: Compare user input with computer generated number and show result.

const randomNumber = Math.floor(Math.random() * 6 + 1);

const answere = await inquirer.prompt([
{
    name: "userGuessedNumber",
    type: "number",
    message: "Please guess a number between 1-6: ",
},

]);

if(answere.userGuessedNumber === randomNumber) {
     console.log("Congratulations! You guessed right number.");
}
else {
     console.log("You guessed wrong number.");
}