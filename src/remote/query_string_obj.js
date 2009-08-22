//= require <remote/reference>
//= require <each>
o.remote.query_string_obj = function (hash) {
	var result_array = [];
	o.each(hash,function (value,key) {
		result_array.push({key: key, value: value});
	});
	return result_array;
};
