//= require <slice>
o.take = function (fn) {
	return function () {
		return fn.apply(arguments[0],o.slice.call(arguments,1));
	};
};
