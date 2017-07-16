//******** tools for cloze card *********//

function ClozeCard(cloze, partial, fullText) {

	this.cloze = cloze; //the missing part of that partial sentence displayed; + to this.partial to #answer

    this.partial = partial; //the initial part of the sentence that is a semi-question; #question
	
	//this needs to be saved then iterated through and compared
	this.fullText = fullText; //displays the whole sentence; partial + cloze; #answer

}


module.exports = ClozeCard;