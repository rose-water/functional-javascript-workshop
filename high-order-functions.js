function repeat (operation, num) {
	for (var i = 0; i < num; i++) {
		operation();
	}

	// official solution: 
	// if (num <= 0) {
	// 	return;
	// }

	// operation();
	// return repeat(operation, --num);
}

module.exports = repeat;