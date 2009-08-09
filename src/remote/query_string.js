//= require <remote/reference>
//= require <remote/query_string_obj_from_hash>
//= require <remote/query_string_from_obj>
o.remote.query_string_from_hash = function (hash) {
	return o.remote.query_string(o.remote.query_string_obj_from_hash(hash));
};
