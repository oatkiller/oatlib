//= require <remote/reference>
//= require <remote/query_string_obj_from_hash>
//= require <remote/query_string_from_obj>
o.remote.query_string = function (hash) {
	return o.remote.query_string_from_obj(o.remote.query_string_obj_from_hash(hash));
};
