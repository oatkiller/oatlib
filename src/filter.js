//= require <hasOwnProperty>
//= require <is_array>

(function () {
 	o.store(Array,'filter',function (fn) {
		var property_name, element, results = [];
		for (property_name in this) {
			if (o.hasOwnProperty(this,property_name)) {
				element = this[property_name];
				if (fn.call(this,element,property_name,this)) {
					results.push(element);
				}
			}
		}
		return results;
	});

})();
