//******** tools for basic card ********//

//all this shit in BasicCard has empty values for now, fill with "new"
function BasicCard(trigger, front, back) {
	this.trigger = true;
	this.front = message; //my questions
	this.answer = type; //user answers; compare this shit to the stored answers in a json package 
	this.executeThis = function() {
		if (this.trigger) {
			//execute prompting functions below

		}
	};
}

var qObj = {};
qObj.qOne = new BasicCard (true, "How many bagels does it take to make a Jerome?", 40);
qObj.qTwo = new BasicCard (true, "What are pushed to project repos on Github?", "puppies");
qObj.qThree = new BasicCard (true, "What type of animal is Farley?", "cat");
qObj.qFour = new BasicCard (true, "How was Tindoor rated?", "most useful");
qObj.qFive = new BasicCard (true, "Are you a cheeky mofo?", "yes");


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