function countWords (inputWords) {
	console.log('input words: \n', inputWords);

	// some reducing magic
	return inputWords.reduce(function (accumulator, currentWord) {

		// is there another way to write this?
		// from the official solution: 
		accumulator[currentWord] = ++accumulator[currentWord] || 1;

		return accumulator;
	}, {});
}

module.exports = countWords;