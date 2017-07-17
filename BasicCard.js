//******** tools for basic card ********//
var keys = require("./keys.js"); //grabs objects from keys.js with my saved answers for comparison
var basicKeyList = keys.basicKeys; //grabs values from basicKeys object

//note that to get 100% correct, user has to satisfy these conditions as it iterates through qObj:
//guess.userGuess = basicKeyList.aOne;
//guess.userGuess = basicKeyList.aTwo;
//guess.userGuess = basicKeyList.aThree;
//guess.userGuess = basicKeyList.aFour;
//guess.userGuess = basicKeyList.aFive;

var score = 0; //start scoring at zero
console.log("Your starting score is " + score + "."); //display this score

//all this shit in BasicCard has empty values for now, fill with "new" in qObj
function BasicCard(trigger, front, back) {
	this.trigger = true;
	this.front = front; //my questions via prompt "message"
	this.back = back; //user answer input
	this.executeThis = function() {
		if (this.trigger) {
			//allQuestions(); ---> this can change, but for now this makes sense
			//execute prompting functions below
			//this function should be able to gather their input from inquirer
			//this function should compare user input with correct response.answers we have stored in a json package
			//the json package should probably be in an adjacent file
		}
	};
}

//qObj contains arguments we will insert to BasicCard for each question instance
//prompt user with your message aka question
//compare the input value to my actual answer keys in keys.js in keys.basicKeys object list 
var qObj = {};
qObj.qOne = new BasicCard (true, "How many bagels does it take to make a Jerome?", guess.userGuess); //trigger, this.front, this.back
qObj.qTwo = new BasicCard (true, "What are pushed to project repos on Github?", guess.userGuess); //trigger, this.front, this.back
qObj.qThree = new BasicCard (true, "What type of animal is Farley?", guess.userGuess); //trigger, this.front, this.back
qObj.qFour = new BasicCard (true, "How was Tindoor rated?", guess.userGuess); //trigger, this.front, this.back
qObj.qFive = new BasicCard (true, "Are you a cheeky mofo?", guess.userGuess); //trigger, this.front, this.back

var allQuestions = function() {
	for (var key in qObj) {

		if (this.trigger) {			
			inquirer.prompt([

				{
				 type: "input"; //this.back will be collected as an arbitrary string value the user types
				 name: "userGuess"; //guess.userGuess will store this.back string values
				 message: BasicCard.front; //this will be the question user sees from this.front string value
				}			
					
				]).then(function(guess) {

					basicKeyList.forEach(function(basic) {
						if (guess.userGuess === keys.basicKeys){
							score++
							console.log("That is correct!");
							console.log("Your new score is " + score + ".");
						} else {
							console.log("Maybe better luck next time.");
						}

					});
					
				});
		
		}
	}

}; 

if (score === 5) {
	console.log("Here is your final score: " + score + ".");
	inquirer.prompt ([
				
		{
		 type: confirm; //yes and no question classification
		 name: userDecision; //stores the yes or no value after input
		 message: "Would you like to play again?" //will display question to user for input confirmation
		}

		]).then(function(answer) {
			//if yes, reset score and play again
			if (answer.userDecision === "y" || "Y" || "Yes" || "yes") {
				score = 0;
				allQuestions();
			} else if (answer.userDecision === "n" || "N" || "No" || "no") {
				score = 0;
				process.exit()
			}

		});

}

module.exports = BasicCard;



//Pseudo-coding #1:
//Attempt dynaminally adding inquirer prompts before last-resorting to hardcoding prompts
// inquirer.prompt([
	
// 	{
// 	 type: "input";
// 	 name: "questionOne";
// 	 message: "How many bagels does it take to make a Jerome?"; //this.back = 40 
// 	},

// 	{
//      type: "input";
//      name: "questionTwo";
//      message: "What are pushed to project repos on Github?"; //this.back = "puppies"
// 	},

// 	{
// 	 type: "input";
// 	 name: "questionThree";
// 	 message: "What type of animal is Farley?"; //this.back = "cat"
// 	},

// 	{
// 	 type: "input";
// 	 name: "questionFour";
// 	 message: "How was Tindoor rated?" //this.back = "Most Useful"
// 	},

// 	{
// 	 type: "input";
// 	 name: "questionFive";
// 	 message: "Will this assignment end up an epic failure?" //this.back = "Maybe"
// 	},


// 	]).then(function(){

// 	});