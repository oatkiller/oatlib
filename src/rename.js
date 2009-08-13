//= require <empty_function>
//= require <type_of>
//= require <rcurry>
//= require <update>
//= require <each>
o.rename = function (obj,key_map,dont_trash_leftovers) {
	var call = arguments.callee[o.rcurry](key_map,dont_trash_leftovers);
	handle_leftovers = dont_trash_leftovers ? function (obj,key,value) {
		obj[key] = call(value);
	} : o.empty_function;
	if (o.type_of(obj) !== 'object') {
		return obj; // primitives dont get renamed
	} else {
		var new_obj = {};
		o.each(obj,function (value,key) {
			var new_key;
			if (new_key = key_map[key]) {
				new_obj[new_key] = call(value);
				return;
			}
			handle_leftovers(new_obj,key,value);
		});
		return o.update(obj,new_obj);
	}
};
