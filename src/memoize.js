//= require <join>
//= require <hasOwnProperty>
(function () {
 	var property = (o.properties.memo = o.qname('memo'));
	o.store(Function,'memoize',function (memo) {
		memo = memo || {};
		var that = this,
		fn = function () {
			var key = o.join(arguments);
			return o.hasOwnProperty(memo,key) ? memo[key] : (memo[key] = that.apply(this,arguments));
		};
		fn[property] = memo;
		return fn;
	});
})();
