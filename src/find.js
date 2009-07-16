//= require <language/prototypes/array>
$$_o$find = $$_store($$_language_prototypes_array,$find,function (fn) {
	for (var i = 0, that = this, length = that.length; i < length; i++) {
		if (fn.call(that,that[i])) {
			return that[i];
		}
	}
});
