//******** tools for basic card ********//

var fs = require("fs"); // only if we want to log/append our questions and results later to a text file

var score = 0; // start scoring at zero
console.log("Your initial score is " + score + "."); // display initial score


// all this in BasicCard constructor has empty values for now, fill with "new" in qObj
function BasicCard(trigger, front, back) {
	this.trigger = true; // trigger = true || false; allows the switching on or off of questions
	this.front = front; // inquirer "message" is our question front
	this.back = back; // stores correct answers
	this.executeThis = function() {
		if (this.trigger) {
			// allQuestions(); ---> wrap this function around everything. Where should this wrap?
		}
	};
}


// qObj{} contains all of our saved data (questions & correct answers)
var qObj = {};
qObj.qOne = new BasicCard (true, "How many bagels does it take to make a Jerome?", "40 bagels"); 
qObj.qTwo = new BasicCard (true, "What are pushed to project repos on Github?", "puppies"); 
qObj.qThree = new BasicCard (true, "What type of animal is Farley?", "cat"); 
qObj.qFour = new BasicCard (true, "How was Tindoor rated?", "most useful"); 
qObj.qFive = new BasicCard (true, "Are you a cheeky mofo?", "yes"); 


// this function will go through qObj and compare inputs as guess.userGuess
var allQuestions = function() {
	for (var key in qObj) {   	
		
		if (this.trigger && score < 5) {		

			inquirer.prompt([

				{
				 type: "input", // user puts in some string type
				 name: "userGuess", // guess.userGuess will be the user string input value
				 message: BasicCard.front // displays the question as we go through qObj
				}			
					
			]).then(function(guess) {
					if (guess.userGuess === BasicCard.back){
						score++ // make the score go up one if it's a match
						console.log("That is correct!"); // tell the user it's correct
						console.log("Your new score is " + score + "."); // display the score increment
					} else {
						console.log("Maybe better luck next time."); 
						// the user guess is wrong
						// continue prompting through qObj
					}

			});
					
		}
		
	}

	playAgainMaybe();
}


var playAgainMaybe = function() {
	console.log("Here is your final score: " + score + ".");
	inquirer.prompt ([
				
		{
		 type: "list", // the input type will be a list of "yes" or "no"
		 name: userDecision, // stores the user input of "yes" or "no"
		 message: "Would you like to play again?", // will display 
		 choices: ["Yes", "No"]
		}

	]).then(function(answer) {
		// if yes, reset score and play again
		if (answer.userDecision === "Yes") {
			score = 0;
			allQuestions();
		// if no, reset score and exit completely
		} else if (answer.userDecision === "No") {
			score = 0;
			process.exit()
		}

	});

}



module.exports = BasicCard;




