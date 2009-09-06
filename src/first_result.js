//= require <each>
o.store(Array,'first_result',function (fn) {
	var result = null;
	o.each(this,function () {
		var my_result = fn.apply(this,arguments);
		if (my_result) {
			result = my_result;
			return o.each_break;
		}
	});
	return result;
});
