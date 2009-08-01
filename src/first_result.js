o.store(Array,'first_result',function (fn) {
	for (var i = 0, that = this, length = that.length, result; i < length; i++) {
		if (result = fn.call(that,that[i])) {
			return result;
		}
	}
});

