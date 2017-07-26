//******** tools for cloze card hard-coded*********//

var fs = require("fs"); 
var inquirer = require("inquirer"); 
var score = 0; // initial score
console.log("Your initial score is " + score + "."); // display initial score

function ClozeCard(trigger, cloze, partial, fullText) {
	this.trigger = true; 
	this.cloze = cloze; 
    this.partial = partial; 
	this.fullText = fullText; //no real need 
}

var inquireThis = function() {

	inquirer.prompt([
		{
		 type: "input",
		 name: "clozeOne", //"40 bagels"
		 message: "... make a Jerome" 	
		}
	]).then(function(answer) {
		if(answer.clozeOne === "40 bagels") {
			score++
			console.log("Correct! Your score is " + score + ".");
			console.log(message.replace("...", "40 bagels"));
		} else {
			console.log("Sorry, try again.");	
		}
	});

	inquirer.prompt([
		{
		 type: "input",
		 name: "clozeTwo", //"Push all puppies"
		 message: "... to Github"
		}
	]).then(function(answer) {
		if(answer.clozeTwo === "Push all puppies") {
			score++
			console.log("Correct! Your score is " + score + ".");
			console.log(message.replace("...", "Push all puppies"));
		} else {
			console.log("Sorry, try again.");	
		}
	});

	inquirer.prompt([
		{
		 type: "input",
		 name: "clozeThree", //"a cat"
		 message: "Farley is ..."
		}
	]).then(function(answer) {
		if(answer.clozeThree === "a cat") {
			score++
			console.log("Correct! Your score is " + score + ".");
			console.log(message.replace("...", "a cat"));
		} else {
			console.log("Sorry, try again.");	
		}
	});

	inquirer.prompt([
		{
		 type: "input",
		 name: "clozeFour", //"most useful"
		 message: "Tindoor was rated ..."
		}
	]).then(function(answer) {
		if(answer.clozeFour === "most useful") {
			score++
			console.log("Correct! Your score is " + score + ".");
			console.log(message.replace("...", "most useful"));
		} else {
			console.log("Sorry, try again.");	
		}
	});

	inquirer.prompt([

		{
		 type: "input",
		 name: "clozeFive", //"a cheeky mofo"
		 message: "You are ..."
		}
	]).then(function(answer) {
		if(answer.clozeFive === "a cheeky mofo") {
			score++
			console.log("Correct! Your score is " + score + ".");
			console.log(message.replace("...", "a cheeky mofo"));
		} else {
			console.log("Sorry, try again.");	
		}
	});

}
inquireThis();

var playAgainMaybe = function() {
	console.log("Here is your final score: " + score + ".");
	
	inquirer.prompt ([	
		{
		 type: "list", // the input type will be a list of "yes" or "no"
		 name: "userDecision", // stores the user input of "yes" or "no"
		 message: "Would you like to play again?", // will display 
		 choices: ["Yes", "No"]
		}

	]).then(function(answer) {
		// if yes, reset score and play again
		if (answer.userDecision === "Yes") {
			score = 0;
			//inquireThis();
		// if no, reset score and exit completely
		} else if (answer.userDecision === "No") {
			score = 0;
			process.exit()
		}

	});

}

playAgainMaybe();



module.exports = ClozeCard;




