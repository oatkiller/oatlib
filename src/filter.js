//= require <each>
$$_store(function (fn) {
	var ra = [],
	that = this;
	this[o[$each]](function (element) {
		fn[$call](that,element) && ra[push](element);
	});
	return ra;
},$filter,emptyArray,$$_array_prototype);
