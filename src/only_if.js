o.store(Function,'only_if',function (only_if) {
	var fn = this;
	return function () {
		return only_if.apply(this,arguments) && fn.apply(this,arguments);
	};
});
