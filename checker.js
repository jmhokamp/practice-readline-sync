const readline = require('readline-sync');

//Ask questions
let charQuestion = readline.question("What is your favorite color? ");
let indNum = readline.questionInt("What Index Number would you like? ");

//Find the Index
const character = charQuestion[indNum];

//Print the line
console.log("Character printed is " + character + ".");

