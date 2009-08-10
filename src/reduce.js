//= require <hasOwnProperty>
o.store(Array,'reduce',function (fn) {
	var length = this.length, i = 0, memo;
	if (arguments.length > 1) {
		memo = arguments[1];
	} else {
		memo = this[i];
		i++;
	}
	for (; i < length; i++) {
		memo = fn.call(null, memo, this[i], i, this);
	}
	return memo;
});
