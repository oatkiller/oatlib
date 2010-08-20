//= require <remote/reference>
//= require <remote/query_string_obj>
//= require <remote/query_string_from_obj>
o.remote.query_string = function (hash) {
	return o.remote.query_string_from_obj(o.remote.query_string_obj(hash));
};
