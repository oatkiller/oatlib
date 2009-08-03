//= require <hasOwnProperty>

(function () {

	var fn = function (fn) {
		var response = this.splice !== undefined ? [] : {},
		property_name;

		for (property_name in this) {
			if (o.hasOwnProperty(this,property_name)) {
				response[property_name] = fn.call(this,this[property_name],property_name,this);
			}
		}
		return response;

	});

	// i want the native map implementation if that avail, but only for the version that sits on array prototype. for the take version i always want my own implementation because it needs to work for objects that dont have length or nueric properties etc
	o.store(Array,'map',Array.prototype.map || fn);
	o.map = fn;

})();
