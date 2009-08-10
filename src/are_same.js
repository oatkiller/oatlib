//= require <array>
//= require <reduce>
//= require <contains>
//= require <map>
//= require <type_of>
(function () {
 	var fail = {},
	are_objects_or_arrays = function (ra) {
		return o.contains.apply(null,[['object','array']].concat(ra[o.map](o.type_of)));
	};
	o.are_same = function () {
		var callee = arguments.callee, property_name;
		return arguments.length < 2 ? true : o.array(arguments)[o.reduce](function (previous,current) {
			if (previous === fail) {
				return fail;
			}
			if (previous === current) {
				return current;
			}

			if (are_objects_or_arrays([previous,current])) {
				for (property_name in current) {
					if (!(property_name in previous)) {
						return fail;
					}
				}
				for (property_name in previous) {
					var these_are_same = callee(current[property_name],previous[property_name]);
				 	if (!these_are_same) {
						return fail;
					}
				}
				return current;
			}
			return fail;
		}) !== fail;
	};
})();
