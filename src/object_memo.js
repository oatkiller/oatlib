o[$object_memo] = function (propertyName,calculate) {
	return function () {
		var that = this;
		return that[$hasOwnProperty](propertyName) ? that[propertyName] : (that[propertyName] = calculate[$apply](that,arguments));
	};
};
