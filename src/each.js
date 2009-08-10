//= require <hasOwnProperty>
(function () {
	var my_break = {};
	o.each_break = my_break;
	o.store(Array,'each',function (fn) {
		for (var property_name in this) {
			if (o.hasOwnProperty(this,property_name)) {
				if (fn.call(this, this[property_name], property_name, this) === my_break) {
					break;
				}
			}
		}
		return this;
	});
})();
