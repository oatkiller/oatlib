o.take = function (fn) {
	return function () {
		return fn.apply(arguments[0],Array.prototype.slice.call(arguments,1));
	};
};
