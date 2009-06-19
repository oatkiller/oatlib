$$_each = oatlib[$each] = function (raLike,fn) {
	for (var i = 0, that = raLike, length = that[$length]; i < length; i++) {
		fn[$call](that, that[i], i, that);
	}
};
