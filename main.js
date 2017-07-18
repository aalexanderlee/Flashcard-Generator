var accessBasic = require("./BasicCard.js"); // will grab your module.export Object in BasicCard  
var accessCloze = require("./ClozeCard.js"); // will grab your module.export Object in ClozeCard


// node main.js "<basic-card>" ---> activates BasicCard.js (initialize score to 0, run prompts)
// encapsulate all of BasicCard.js into one outer main function you can call on from here
if (process.argv[2] === "basic-card") {
	// go to function in BasicCard.js to prompt user
}


// node main.js "<cloze-card>" ---> activiates ClozeCard.js (initialize score to 0, run prompts)
// encapsulate all of ClozeCard.js into one outer main function you can call on from here
if (process.argv[2] === "cloze-card") {
	// go to function in ClozeCard.js to prompt user
}