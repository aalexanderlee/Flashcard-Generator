//******** tools for cloze card *********//
var keys = require("./keys.js"); //grabs objects from keys.js with my saved answers for comparison


var score = 0; //initial score
console.log("Your initial score is " + score + "."); //display initial score


function ClozeCard(trigger, cloze, partial, fullText) {
	//Options for doing this:
	//1) fullText exist first and we split(), then put into "message aka this.partial" and "cloze" if "cloze" is correct
	//2) provide "partial" as "message", grab "input", compare to "cloze" then join() and console.log if "cloze" matches our key
	//concatinate or split()/join()?

	this.trigger = true; //switches the program on
	this.cloze = cloze; //this is the missing answer
    this.partial = partial; //this is the shown part with "..." in cloze position or index
	this.fullText = fullText; //this will exist after you stick cloze and partial together
	this.executeThese = function(){
		if (this.trigger) {
			//allClozeQuestions(); ---> wrap this function around everything. Where should this wrap?
		}
	}

}

var clozeObj = {};
//note: clozeObj.number = new ClozeCard (trigger, this.cloze, this.partial, this.fullText)
clozeObj.one = new ClozeCard (true, "40 bagels", "...make a Jerome", "40 bagels make a Jerome");
clozeObj.two = new ClozeCard (true, "Push all puppies", "...to Github", "Push all puppies to Github");
clozeObj.three = new ClozeCard (true, "a cat", "Farley is ...", "Farley is a cat");
clozeObj.four = new ClozeCard (true, "most useful", "Tindoor was rated...", "Tindoor was rated most useful");
clozeObj.five = new ClozeCard (true, "a cheeky mofo", "You are...", "You are a cheeky mofo");


var allClozeQuestions = function() {
	for (var key in clozeObj) {   	
		
		if (this.trigger && score < 5) {		

			inquirer.prompt([

				{
				 type: "input", //user puts in some string type
				 name: "userCloze", //guess.userCloze will be compared to this.cloze
				 message: ClozeCard.partial //displays "...blah blah blah"
				}			
					
			]).then(function(guess) {
					if (guess.userCloze === ClozeCard.partial) {
						score++ //make the score go up one if it's a match
						console.log("That is correct!"); //tell the user it's correct

						//put cloze and partial into an array and join at the CORRECT indices

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

var playAgainMaybe = function() {
	console.log("Here is your final score: " + score + ".");
	inquirer.prompt ([
				
		{
		 type: "list", //the input type will be a list of "yes" or "no"
		 name: userDecision, //stores the user input of "yes" or "no"
		 message: "Would you like to play again?", //will display 
		 choices: ["Yes", "No"]
		}

	]).then(function(answer) {
		//if yes, reset score and play again
		if (answer.userDecision === "Yes") {
			score = 0;
			allQuestions();
		//if no, reset score and exit completely
		} else if (answer.userDecision === "No") {
			score = 0;
			process.exit()
		}

	});

}



module.exports = ClozeCard;




