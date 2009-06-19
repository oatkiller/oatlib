oat_array_prototype[$each] = function (fn) {
	var that = this.currentObj;
	for (var i = 0, length = that[$length]; i < length; i++) {
		fn[$call](that, that[i], i, that);
	}
};
