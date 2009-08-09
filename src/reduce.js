//= require <first_index>
//= require <hasOwnProperty>
o.store(Array,'reduce',Array.prototype.reduce || function (fn) {
	var length = this.length, i = this[o.first_index](), memo = arguments.length > 1 ? arguments[1] : this[i];
	for (; i < length; i++) {
		if (o.hasOwnProperty(this,i)) {
			memo = fn.call(null, memo, this[i], i, this);
		}
	}
	return memo;
});
