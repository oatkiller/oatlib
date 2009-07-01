//= require <language/prototypes/array>
$$_store($$_language_prototypes_array,$each,function (fn) {
		var that = this;
	for (var i = 0, length = that[$length]; i < length; i++) {
		fn[$call](that, that[i], i, that);
	}
},$$true);
