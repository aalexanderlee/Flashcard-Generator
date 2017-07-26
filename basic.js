//Use require fs package
//Export this constructor style over to main.js

var fs = require("fs");
module.exports = BasicFlashCard;

//BasicFlashCard constructor

function BasicFlashCard(front, back) {
	this.front = front;
	this.back = back;
	this.createCard = function() {

	}
}