//.gitignore probably not needed, nothing confidential here 
//export keys, similar to LIRI keys and values

exports.basicKeys = {
	aOne: "40", //compare this key to this.back for qOne
	aTwo: "puppies", //this.back for qTwo
	aThree: "cat", //this.back for qThree
	aFour: "most useful", //this.back for qFour
	aFive: "yes" //this.back for qFive
}

exports.clozeKeys = {
	clozeOne: "40 bagels", //this.partial = "... make a Jerome" (replace "..." with cloze)
	clozeTwo: "Push all puppies", //this.partial = "... to Github" (replace "..." with cloze)
	clozeThree: "a cat", //this.partial = "Farley is ..." (replace "..." with cloze)
	clozeFour: "most useful", //this.partial = "Tindoor is rated ..." (replace "..." with cloze)
	clozeFive: "a cheeky mofo" //this.partial = "You are ..." (replace "..." with cloze)
}
