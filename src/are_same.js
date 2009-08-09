//= require <array>
//= require <every>
//= require <each>
//= require <type_of>

o.are_same = function (first) {
	// convert arguments to an array
	var args = o.array(arguments);
	// if the there are less than 2 args, return true
	return args.length < 2 ? true : args[o.every](function (element) {
		// otherwise, if every element is the same as the first, return true
		return first === element;
	}) || (function () {
		// otherwise if every arg is an object and ...
		return args[o.every](function (element) {
			var type = o.type_of(element);
			return type === 'object' || type === 'array';
		}) && (function () {
			var number_of_properties = null;
			// every arg has the same number of properties
			return o.every(args,function (arg) {
				var my_number_of_properties = 0;
				o.each(arg,function () {
					my_number_of_properties++;
				});
				if (number_of_properties === null) {
					number_of_properties = my_number_of_properties;
					return true;
				} else {
					return number_of_properties === my_number_of_properties;
				}
			}) && o.every(first,function (first,property_name) {
			// ... all the args properties are the same as the properties of the first arg, return true
				return args[o.every](function (other) {
					return o.are_same(first,other[property_name]);
				});
			});
		})();
	})();
};
