//= require <language/prototypes/array>
//= require <K>
//= require <curry>
//= require <take>
(function () {
	var fn = function (fn) {
		var that = this, i = 0, length = that.length;
		for (; i < length; i++) {
			fn.call(that, that[i], i, that);
		}
	};

	$$_o$each = $$_store($$_language_prototypes_array,$each,fn);
	$$_each = o.each = $$_take(fn);
	$$_each.toString = $$_K[o.curry]($$_o$each);
		
})();
