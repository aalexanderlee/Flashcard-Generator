//******** tools for basic card ********//
var keys = require("./keys.js"); //grabs objects from keys.js with my saved answers for comparison


var score = 0; //start scoring at zero
console.log("Your initial score is " + score + "."); //display initial score

//all this in BasicCard constructor has empty values for now, fill with "new" in qObj
function BasicCard(trigger, front, back) {
	this.trigger = true;
	this.front = front; //inquirer "message" is our question front
	this.back = back; //stores correct answers
	this.executeThis = function() {
		if (this.trigger) {
			//allQuestions(); ---> wrap this function around everything.
		}
	};
}

//qObj{} contains all of our saved data (questions & correct answers)
//trigger = true || false; allows the switching on or off of certain questions later if needed
var qObj = {};
qObj.qOne = new BasicCard (true, "How many bagels does it take to make a Jerome?", "40 bagels"); 
qObj.qTwo = new BasicCard (true, "What are pushed to project repos on Github?", "puppies"); 
qObj.qThree = new BasicCard (true, "What type of animal is Farley?", "cat"); 
qObj.qFour = new BasicCard (true, "How was Tindoor rated?", "most useful"); 
qObj.qFive = new BasicCard (true, "Are you a cheeky mofo?", "yes"); 

//this function will go through qObj and compare inputs as guess.userGuess
var allQuestions = function() {
	for (var key in qObj) {   	
		
		if (this.trigger && score < 5) {		

			inquirer.prompt([

				{
				 type: "input", //user puts in some string type
				 name: "userGuess", //guess.userGuess will be the user string input value
				 message: BasicCard.front //displays the question as we go through qObj
				}			
					
				]).then(function(guess) {
						if (guess.userGuess === BasicCard.back){
							score++ //make the score go up one if it's a match
							console.log("That is correct!"); //tell the user it's correct
							console.log("Your new score is " + score + "."); //display the score increment
						} else {
							console.log("Maybe better luck next time."); 
							//the user guess is wrong
							//continue prompting through qObj
						}

				});
					
		}
		
	}

	playAgainMaybe();
}


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