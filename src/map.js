//= require <hasOwnProperty>
//= require <take>
//= require <is_array>

(function () {
 	var generic_version = function (fn) {
		var response = o.is_array(this) ? [] : {}, property_name;

		o.each(this,function (element,property_name) {
			return (response[property_name] = fn.call(this,this[property_name],property_name,this));
		});

		return response;

	},
	array_version = Array.prototype.map || generic_version;

	// i want the native map implementation if that avail, but only for the version that sits on array prototype. for the take version i always want my own implementation because it needs to work for objects that dont have length or nueric properties etc
	o.store(Array,'map',array_version);
	o.map = o.take(generic_version);
	var qname = o.qname('map');
	o.map.toString = function () {
		return qname;
	};

})();
