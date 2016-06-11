function getShortMessages (objects) {
	return test = objects.filter(function (object) {
		return object.message.length < 50;
	}).map(function (object) {
		return object.message;
	});
}

module.exports = getShortMessages;