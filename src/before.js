o.store(Function,'before',function (before) {
	var fn = this;
	return function () {
		var result = before.apply(this,arguments);
		return fn.apply(this,typeof result === 'object' && result.length !== undefined ? result : [result]);
	};
});
