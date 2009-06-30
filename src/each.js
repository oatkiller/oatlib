$$_each = $$_store(function (fn) {
	var that = this;
	for (var i = 0, length = that[$length]; i < length; i++) {
		fn[$call](that, that[i], i, that);
	}
	return that;
},$each,emptyArray,$$_array_prototype);
