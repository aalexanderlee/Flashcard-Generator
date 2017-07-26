var accessBasic = require("./basic.js"); // will grab your module.export Object in BasicCard  
var accessCloze = require("./cloze.js"); // will grab your module.export Object in ClozeCard
var inquirer = require('inquirer'); // uses the package for inquirer to prompt user
var fs = require('fs'); // uses the built in fs package to read or append to outer files


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
                var newBasic = new BasicFlashCard(answer.front, answer.back);
                newBasic.createCard();
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
                    var newCloze = new ClozeFlashCard(text, cloze);
                    newCloze.createCard();
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
	fs.readFile('./log.txt', 'utf8', function(error, data) {
		if (error) {
			console.log('Error occurred: ' + error);
		}
		var questions = data.split(';');
		var notBlank = function(value) {
			return value;
		}
		questions = questions.filter(notBlank);
		var count = 0;
		displayQuestions(questions, count);
	});
};


var displayQuestions = function(array, index) {
	question = array[index];
	var parsedQuestion = JSON.parse(question);
	var questionText; //these will change if question type is basic or cloze
	var correctResponse; //these will change if question type is basic or cloze

	//grabs from basic-card.js
	if (parsedQuestion.type === 'basic') {
		questionText = parsedQuestion.front; //basic question
		correctResponse = parsedQuestion.back; //basic answer
	//grabs from cloze-card.js
	} else if (parseQuestion.type === 'cloze') {
		questionText = parsedQuestion.clozeDeleted; //the partial sentence of the full text
		correctResponse = parsedQuestion.cloze; //the miss phrase from full text
	}
	inquirer.prompt([{
		name: 'response',
		message: questionText
	}]).then(function(answer) {
		if (answer.response === correctResponse) {
			console.log("This is right!");
			if (index < array.length - 1) {
				displayQuestions(array, index+1);
			}
		} else {
			console.log("This is incorrect. Please try again.");
			if (index < array.length - 1) {
				displayQuestions(array, index + 1);
			}
		}
	});
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