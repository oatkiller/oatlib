//= require <dom/reference>
//= require <each>
o.store(Function,'capacitate',function (threshold) {
	var timer = false, fn = this, arg_sets = [];
	threshold = threshold || 110;
	return function () {
		timer && clearTimeout(timer);
		arg_sets.push(arguments);
		timer = setTimeout(function () {
			arg_sets[o.each](function (args) {
				fn.apply(null,args);
			});
		},threshold);
	};
});
