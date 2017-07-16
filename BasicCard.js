//******** tools for basic card ********//

function BasicCard(front, back) {

	this.front //my questions
	this.back //user answers; compare this shit to the stored answers in a json package 
}

inquirer.prompt([
	
	{
	 type: "input";
	 name: "questionOne";
	 message: "How many bagels does it take to make a Jerome?"; //this.back = 40 
	},

	{
     type: "input";
     name: "questionTwo";
     message: "What are pushed to project repos on Github?"; //this.back = "puppies"
	},

	{
	 type: "input";
	 name: "questionThree";
	 message: "What type of animal is Farley?"; //this.back = "cat"
	},

	{
	 type: "input";
	 name: "questionFour";
	 message: "How was Tindoor rated?" //this.back = "Most Useful"
	},

	{
	 type: "input";
	 name: "questionFive";
	 message: "Will this assignment end up an epic failure?" //this.back = "Maybe"
	},

	{
	 type: "input";
	 name: "questionSix";
	 message: "What"
	}



	]).then(function(){

	});




module.exports = BasicCard;