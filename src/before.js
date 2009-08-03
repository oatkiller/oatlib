o.store(Function,'before',function (before) {
	var fn = this;
	return function () {
		return before.apply(this,arguments) && fn.apply(this,arguments);
	};
});
