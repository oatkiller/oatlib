//= require <empty_function>
//= require <type_of>
//= require <rcurry>
//= require <update>
//= require <each>
//= require <K>
o.rename = function (obj,key_map,dont_trash_leftovers) {
	var call = arguments.callee[o.rcurry](key_map,dont_trash_leftovers),
	handle_leftovers = dont_trash_leftovers ? function (obj,key,value) {
		obj[key] = call(value);
	} : o.empty_function,
	type_of = o.type_of(obj);
	if (type_of !== 'object' && type_of !== 'array') {
		return obj; // primitives dont get renamed
	} else {
		var new_obj, get_key;
		if (o.is_array(obj)) {
			new_obj = [];
			get_key = o.K;
		} else {
			new_obj = {};
			get_key = function (key) {
				return key_map[key] !== undefined ? key_map[key] : null;
			};
		}
		o.each(obj,function (value,key) {
			var new_key = get_key(key);
			if (new_key !== undefined) {
				new_obj[new_key] = call(value);
				return;
			}
			handle_leftovers(new_obj,key,value);
		});
		return o.update(obj,new_obj);
	}
};
