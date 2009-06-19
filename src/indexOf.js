$$_indexOf = oatlib[$indexOf] = function (raLike,element) {
	var that = raLike,
	length = that[$length],

	from = arguments[2] || 0;

	if (from < 0) {
		from += length;
	}

	for (; from < length; from++) {
		if (that[$hasOwnProperty](from) && that[from] === element) {
			return from;
		}
	}
	return -1;
};
