o.store(Array,'find',function (fn) {
	for (var i = 0, that = this, length = that.length; i < length; i++) {
		if (fn.call(that,that[i])) {
			return that[i];
		}
	}
});
