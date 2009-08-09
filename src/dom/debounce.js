//= require <dom/reference>
//= require <curry>
o.store(Function,'debounce',function (threshold) {
	var timer = false, fn = this;
	threshold = threshold || 110;
	return function () {
		timer && clearTimeout(timer);
		timer = setTimeout(fn[o.curry](arguments),threshold);
	};
});
