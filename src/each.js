o.store(Array,'each',function (fn) {
	var that = this, i = 0, length = that.length;
	for (; i < length; i++) {
		fn.call(that, that[i], i, that);
	}
});
