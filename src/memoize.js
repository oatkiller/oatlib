//= require <join>
//= require <hasOwnProperty>
o.store(Function,'memoize',function (memo) {
	memo = memo || {};
	var that = this;
	return function () {
		var key = o.join(arguments);
		return o.hasOwnProperty(memo,key) ? memo[key] : (memo[key] = that.apply(this,arguments));
	};
});
