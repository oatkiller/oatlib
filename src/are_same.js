//= require <array>
//= require <every>
//= require <type_of>

o.are_same = function (first) {
	var args = o.array(arguments);
	return args.length < 2 ? true : args[o.every](function (element) {
		return first === element;
	}) || (function () {
		return args[o.every](function (element) {
			var type = o.type_of(element);
			return type === 'object' || type === 'array';
		}) && (function () {
			args.shift();
			return o.every(first,function (first,property_name) {
				return args[o.every](function (other) {
					return o.are_same(first,other[property_name]);
				});
			});
		})();
	})();
};
