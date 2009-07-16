//= require <language/prototypes/array>
//= require <take>
//= require <K>
//= require <curry>
(function () {
	var fn = function (fn) {
		var length = this.length, i = 0, results = [], an;
		for (; i < length; i++) {
			an = this[i];
			if (fn.call(this,an,this)) {
				results.push(an);
			}
		}
		return results;
	};

	$$_o$filter = $$_store($$_language_prototypes_array,$filter,fn);
	$$_filter = o.filter = $$_take(fn);
	$$_filter.toString = $$_K[$$_o$curry]($$_o$filter);

})();
