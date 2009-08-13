//= require <find>
//= require <every>
//= require <array>
o.store(Array,'contains',function () {
	var that = this;
	return o.array(arguments)[o.every](function (value) {
		return that[o.find](function (element) {
			return element === value;
		}) !== false;
	});
});
