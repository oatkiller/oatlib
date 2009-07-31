//= require <array>
//= require <concat>
o.store(Function,'rcurry',function () {
	var that = this,
	old_arguments = o.array(arguments);
	return function () {
		return that.apply(this,o.concat.call(o.array(arguments),old_arguments));
	};
});
