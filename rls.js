

const readline = require('readline-sync');
//Ask for name and print
let name = readline.question("What is your name? ");
console.log("Welcome, " + name + ", to my training");

//5 questions
let question1 = readline.question("You can convert a value to a number by using ________ function?");
let question2 = readline.question("Use the _______ function to convert a value into a boolean?");
let question3 = readline.question("Is Equality Comparison a Implicit type or Explict Type?");
let question4 = readline.question("What is one way to convert a value to a string?");
let question5 = readline.question("How many types of conversion are there?"); //Interger question

//convert question into interger
let questionInt = Number(question5);

//Return answers
console.log("You answered question 1 with, " + question1);
console.log("You answered question 2 with, " +question2);
console.log("You answered question 3 with, " +question3);
console.log("You answered question 4 with, " +question4);
console.log("You answered question 5 with, " +questionInt);

console.log("Goodbye");