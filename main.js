var accessBasic = require("./BasicCard.js"); // will grab your module.export Object in BasicCard  
var accessCloze = require("./ClozeCard.js"); // will grab your module.export Object in ClozeCard
var inquirer = require('inquirer');
var fs = require('fs');


inquirer.prompt([{
	name: 'command',
	message: 'What would you like to do?',
	type: 'list',
	choices:[{
		name:'add-a-flashcard'
	}, {
		name:'show-all-cards'
	}]
}]).then(function(answer) {
	if(answer.command === 'add-a-flashcard') {
		addCard();
	} else if (answer.command === 'show-all-cards') {
		showCards();
	}
});

var addCard = function() {
	inquirer.prompt([{
		name: 'cardType',
		message: 'Do you want to create a basic or cloze card question?',
		type: 'list',
		choice: [{
			name: 'basic-card'
		},	{
			name: 'cloze-card'
		}]
	}]).then(function(answer) {
		if (answer.cardType === 'basic-card') {
			inquirer.prompt([{
				name: 'front',
				message: 'What is your question?',
				validate: function(input) {
					if(input==='') {
						console.log('Error. Add a question.');
						return false;
					} else {
						return true;
					}
				}
			}])
		}
	})
}



// node main.js "<basic-card>" ---> activates BasicCard.js (initialize score to 0, run prompts)
// encapsulate all of BasicCard.js into one outer main function you can call on from here
// if (process.argv[2] === "basic-card") {
// 	allQuestions();
// }


// node main.js "<cloze-card>" ---> activiates ClozeCard.js (initialize score to 0, run prompts)
// encapsulate all of ClozeCard.js into one outer main function you can call on from here
// if (process.argv[2] === "cloze-card") {
 	// go to function in ClozeCard.js to prompt user
// }