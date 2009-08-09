//= require <array>
(function () {
 	var FAIL = {};
	o.are_same = function () {
		if (arguments.length < 2) {
			return true;
		}
		var args = o.array(arguments);
		var result = args[o.reduce](function (previous,current) {
			if (previous === FAIL) {
				return FAIL;
			}
			if (previous === current) {
				return current;
			}
			var are_objs = previous !== null 
				&& current !== null 
				&& typeof previous === 'object'
				&& typeof current === 'object'
			if (are_objs) {
				for (var x in current) {
					if (!(x in previous)) {
						return FAIL;
					}
				}
				for (var x in previous) {
				 if (!o.are_same(current[x],previous[x])) {
						return FAIL;
					}
				}
				return current;
			}
			return FAIL;
	});
		return result !== FAIL;
	};
})();
