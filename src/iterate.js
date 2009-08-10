(function () {
 	var my_break = {};
	o.iterate_break = my_break;
	o.store(Array,'iterate',function (fn) {
		for (var i = 0; i < this.length; i++) {
			if (fn.call(this, this[i], i, this) === my_break) {
				break;
			}
		}
		return this;
	});
})();
