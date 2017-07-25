var accessBasic = require("./BasicCard.js"); // will grab your module.export Object in BasicCard  
var accessCloze = require("./ClozeCard.js"); // will grab your module.export Object in ClozeCard
var inquirer = require('inquirer');
var fs = require('fs');


inquirer.prompt([{
	name: 'command',
	message: 'Would you like to add or show a card?',
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
    // get user input
    inquirer.prompt([{
        name: 'cardType',
        message: 'Do want to create a basic or cloze card?',
        type: 'list',
        choices: [{
            name: 'basic-card'
        }, {
            name: 'cloze-card'
        }]
    // once user input is received
    }]).then(function(answer) {
        if (answer.cardType === 'basic-card') {
            inquirer.prompt([{
                name: 'front',
                message: 'What is your question?',
                validate: function(input) {
                    if (input === '') {
                        console.log('Please provide a question');
                        return false;
                    } else {
                        return true;
                    }
                }
            }, {
                name: 'back',
                message: 'What is your answer?',
                validate: function(input) {
                    if (input === '') {
                        console.log('Please provide an answer');
                        return false;
                    } else {
                        return true;
                    }
                }
            }]).then(function(answer) {
                var newBasic = new BasicFlashcard(answer.front, answer.back);
                newBasic.create();
                next();
            });
        } else if (answer.cardType === 'cloze-card') {
            inquirer.prompt([{
                name: 'text',
                message: 'What is the full text?',
                validate: function(input) {
                    if (input === '') {
                        console.log('Please provide the full text');
                        return false;
                    } else {
                        return true;
                    }
                }
            }, {
                name: 'cloze',
                message: 'What is the cloze portion?',
                validate: function(input) {
                    if (input === '') {
                        console.log('Please provide the cloze portion');
                        return false;
                    } else {
                        return true;
                    }
                }
            }]).then(function(answer) {
                var text = answer.text;
                var cloze = answer.cloze;
                if (text.includes(cloze)) {
                    var newCloze = new ClozeFlashcard(text, cloze);
                    newCloze.create();
                    whatsNext();
                } else {
                    console.log('Your cloze guess is incorrect. Please try again.');
                    addCard();
                }
            });
        }
    });
};

var next = function() {
	inquirer.prompt([{
		name: 'nextAction',
		message: 'Do you want to make another card or show all cards?',
		type: 'list',
		choices: [{
			name: 'create-another-card'
		},	{
			name: 'show-another-card'
		},	{
			name: 'neither'
		}]
	}]).then(function(answer) {
		if (answer.nextAction === 'create-another-card') {
			addCard();
		} else if (answer.nextAction === 'show-another-card') {
			showCards();
		} else {
			return;
		}
	});
};

var showCards = function() {
	fs.readFile('./log.txt', 'utf8', function)
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