o[$object_memo] = function (propertyName,calculate) {
	return function () {
		return this[$hasOwnProperty](propertyName) ? this[propertyName] : (this[propertyName] = calculate[$apply](this,arguments));
	};
};
