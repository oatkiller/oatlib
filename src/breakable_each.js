//= require <each>
$$_special_error = $$_store({},$special_error),
$$_store(function (fn) {
	var that = this;
	try {
		return $$_each[apply](that,args);
	} catch (e) {
		if (e !== special_error) {
			throw e;
		}
		return that;
	}
},$breakable_each,emptyArray,$$_array_prototype);
