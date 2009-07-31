//= require <array>
//= require <slice>
o.store(Function,'bind',function (obj) { // holds the logic for curry
	var that = this,
	old_arguments = o.slice(arguments,1);
	return function () {
		return that.apply(obj,old_arguments.concat(o.array(arguments)));
	};
});
