//= require <language/prototypes/array>
$$_store($$_language_prototypes_array,$map,function (fn) {
	var that = this,
	length = that[$length],
	response = new $$Array(length), i = 0;

	for (; i < length; i++) {
		response[i] = fn[$call](that,that[i],i,that);
	}
	return response;

},$$true);
