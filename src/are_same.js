//= require <array>
//= require <reduce>
//= require <contains>
//= require <map>
//= require <type_of>
(function () {
 	var fail = {},
	are_objects_or_arrays = function (ra) {
		return o.contains.apply(null,[['object','array']].concat(ra[o.map](o.type_of)))
	};
	o.are_same = function () {
		var callee = arguments.callee;
		return arguments.length < 2 ? true : o.array(arguments)[o.reduce](function (previous,current) {
			if (previous === fail) {
				return fail;
			}
			if (previous === current) {
				return current;
			}

			if (are_objects_or_arrays([previous,current])) {
				for (var x in current) {
					if (!(x in previous)) {
						return fail;
					}
				}
				for (var x in previous) {
				 if (!callee(current[x],previous[x])) {
						return fail;
					}
				}
				return current;
			}
			return fail;
		}) !== fail;
	};
})();
