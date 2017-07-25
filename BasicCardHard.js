var inquirer = require("inquirer");

function BasicCardHard(front, back) {
  this.front = front;
  this.back = back;
}

var count = 0;
var basicArray = [];

var askQuestion = function() {
  if (count < 5) {
    inquirer.prompt([
      {
        name: "name",
        message: "What is your name?"
      }, {
        name: "position",
        message: "What is your current position?"
      }, {
        name: "age",
        message: "How old are you?"
      }, {
        name: "language",
        message: "What is your favorite programming language?"
      }
    ]).then(function(answers) {
      // initializes the variable newguy to be a programmer object which will
      // take in all of the user's answers to the questions above
      var newGuy = new Programmer(
        answers.name,
        answers.position,
        answers.age,
        answers.language);
      // pushes newguy object into our array
      programmerArray.push(newGuy);
      // add one to count to increment our recursive loop by one
      count++;
      // run the askquestion function again so as to either end the loop or ask the questions again
      askQuestion();
    });
    // else statement which runs a for loop that will execute .printInfo() for each object inside of our array
  }
  else {
    for (var x = 0; x < programmerArray.length; x++) {
      programmerArray[x].printInfo();
    }
  }
};

// call askQuestion to run our code
askQuestion();
