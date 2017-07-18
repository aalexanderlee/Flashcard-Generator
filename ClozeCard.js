//******** tools for cloze card *********//
var keys = require("./keys.js"); //grabs objects from keys.js with my saved answers for comparison
var clozeKeyList = keys.clozeKeys; //grabs values from clozeKeys object

var score = 0; //start scoring at zero
console.log("Your starting score is " + score + "."); //display this score

function ClozeCard(trigger, cloze, partial, fullText) {
	//Options for doing this:
	//1) fullText exist first and we split(), then put into "message aka this.partial" and "cloze" if "cloze" is correct
	//2) provide "partial" as "message", grab "input", compare to "cloze" then join() and console.log if "cloze" matches our key
	//concatinate or split()/join()?

	this.trigger = true; //switches our program on

	this.cloze = cloze; //this is the answer you want to fill in as "name" 

    this.partial = partial; //this is displayed as a "...sentence" in "message" 
	
	this.fullText = fullText; //this will exist after you join() 

	this.executeThese = function(){
		if (this.trigger) {
			//reference function here to start
		}
	}

}

var clozeObj = {};
closeObj.one = new Clozecard (true, "40 bagels", "...make a Jerome", "40 bagels make a Jerome");
closeObj.two = new Clozecard (true, "Push all puppies", "...to Github", "Push all puppies to Github");
closeObj.three = new Clozecard (true, "a cat", "Farley is ...", "Farley is a cat");
closeObj.four = new Clozecard (true, "most useful", "Tindoor was rated...", "Tindoor was rated most useful");
closeObj.five = new Clozecard (true, "a cheeky mofo", "You are...", "You are a cheeky mofo");

inquirer.prompt([
	
	{
	 type: "input",
	 name: "clozeGuess",
	 message: 
	},


	])
}




module.exports = ClozeCard;




