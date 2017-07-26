//Use require fs package
//Export this constructor style over to main.js

var fs = require("fs");
module.exports = BasicFlashCard;

//BasicFlashCard constructor

function BasicFlashCard(front, back) {
	this.front = front;
	this.back = back;
	this.createCard = function() {
		var data = {
			front: this.front,
			back: this.back,
			type: "basic",
		};

		fs.appendFile("log.txt", JSON.stringify(data) + ";", "utf8", function(error) {
			if (error) throw error;
		});
	};
}