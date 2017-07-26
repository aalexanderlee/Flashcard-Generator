//Use require fs package
//Export this constructor style over to main.js

var fs = require("fs");
module.exports = ClozeFlashCard;

// Structure for CloseFlashCard constructor used in main.js

function ClozeFlashCard(text, cloze) {
	this.text = text;
	this.cloze = cloze;
	this.closeDeleted = this.text.replace(this.cloze, "...");
	this.create = function() {
		//create() will return the data object for cloze card
		var data
	}

}