//= require <language/prototypes/array>
$$_o$indexOf = $$_store($$_language_prototypes_array,$indexOf,$$_language_prototypes_array[$indexOf] || function (element) {

	var that = this,
	length = that[$length],
	from = arguments[1] || 0;

	if (from < 0) {
		from += length;
	}

	for (; from < length; from++) {
		if (that[$hasOwnProperty](from) && that[from] === element) {
			return from;
		}
	}

	return -1;

});
