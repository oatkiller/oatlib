//= require <call_once>
//= require <get_property_name>

o.get_once = function (method) {

	var my_get_property_name = o.call_once(o.get_property_name);

	var fn = function () {
		var value = method.apply(this,arguments);

		this[my_get_property_name(this,fn)] = function () {
			return value;
		};

		return value;

	};
	return fn;
};
