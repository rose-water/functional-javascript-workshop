function countWords (inputWords) {
	console.log('input words: \n', inputWords);

	// some reducing magic
	return inputWords.reduce(function (amountMap, word) {
		amount[word] = ++amount[word] || 1;
		return amount;
	}, {});
}

module.exports = countWords;
