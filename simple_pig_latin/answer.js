function pigIt(str) {
	return str.split(" ").map((word,index,arr) => {
		return ('.!?,'.includes(word) ? word :
			(newWord = word.split(""),
			newWord.push(newWord[0]+'ay'),
			newWord.splice(0,1),
			newWord.join(""))
		)}).join(" ")

}




