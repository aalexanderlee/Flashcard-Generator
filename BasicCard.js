//******** tools for basic card ********//
var keys = require("./keys.js"); //grabs objects from keys.js with my saved answers for comparison
var basicKeyList = keys.basicKeys; //grabs values from twitterKeys object

//all this shit in BasicCard has empty values for now, fill with "new" in qObj
function BasicCard(trigger, front, back) {
	this.trigger = true;
	this.front = front; //my questions via prompt "message"
	this.answer = back; //user answer input
	this.executeThis = function() {
		if (this.trigger) {
			//execute prompting functions below
			//this function should be able to gather their input from inquirer
			//this function should compare user input with correct response.answers we have stored in a json package
			//the json package should probably be in an adjacent file
		}
	};
}

//qObj contains arguments we will insert to BasicCard for each question instance
var qObj = {};
qObj.qOne = new BasicCard (true, "How many bagels does it take to make a Jerome?", inquirer); //trigger, this.front, this.back
qObj.qTwo = new BasicCard (true, "What are pushed to project repos on Github?", "puppies"); //trigger, this.front, this.back
qObj.qThree = new BasicCard (true, "What type of animal is Farley?", "cat"); //trigger, this.front, this.back
qObj.qFour = new BasicCard (true, "How was Tindoor rated?", "most useful"); //trigger, this.front, this.back
qObj.qFive = new BasicCard (true, "Are you a cheeky mofo?", "yes"); //trigger, this.front, this.back

for (var key in qObj) {
	var allQuestions = function(qOne, qTwo, qThree, qFour, qFive) {
		if (this.trigger) {
			inquirer.prompt([
				{
				 type: "input";
				 name: "question";
				 message: BasicCard.front; //this.back = 40 
				},

				])
		}
	}
}

//Attempt dynaminally adding inquirer prompts before resorting to hardcoding prompts
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




module.exports = BasicCard;