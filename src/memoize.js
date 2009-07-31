//= require <join>
o.store(Function,'memoize',function (memo) {
	memo = memo || {};
	var that = this;
	return function () {
		var key = o.join(arguments);
		return memo.hasOwnProperty(key) ? memo[key] : (memo[key] = that.apply(this,arguments));
	};
});
