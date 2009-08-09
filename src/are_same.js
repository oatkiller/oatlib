//= require <array>
//= require <every>
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
			args.shift();
			// ... all the args properties are the same as the properties of the first arg, return true
			return o.every(first,function (first,property_name) {
				return args[o.every](function (other) {
					return o.are_same(first,other[property_name]);
				});
			});
		})();
	})();
};
