//= require <hasOwnProperty>
//= require <is_array>

(function () {
	var qname = o.qname('filter');
	Array.prototype[qname] = function (fn) {
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
	};

	o.filter = function (obj,fn) {
		if (o.is_array(obj)) {
			return obj[o.filter](fn);
		}
		var property_name, element, results = {};
		for (property_name in obj) {
			if (o.hasOwnProperty(obj,property_name)) {
				element = obj[property_name];
				if (fn.call(obj,element,property_name,obj)) {
					results[property_name] = element;
				}
			}
		}
		return results;
	};

	o.filter.toString = function () {
		return qname;
	};
})();
