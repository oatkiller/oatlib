//= require <each>
oat_array_prototype[$inject] = function (memo,iterator) {
	var that = this.currentObj;
	that[o]()[$each](function (property) {
		memo = iterator[$call](that,memo,property);
	});
	return memo;
};
