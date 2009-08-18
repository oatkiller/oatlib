o.store(Function,'call_once',function () {
	var that = this,
	fn = function () {
		var result = that.apply(this,arguments);
		return (fn = function () {return result;}).apply(this,arguments);
	};
	return function () {
		return fn.apply(this,arguments);
	};
});
