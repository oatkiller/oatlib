//= require <take>
//= require <K>
//= require <curry>
//= require <language/prototypes/array>
(function () {
	var fn = function () {
		return this[this.length - 1];
	};
	$$_o$last = $$_store($$_language_prototypes_array,$last,fn);
	$$_last = o.last = $$_take(fn);
	$$_last.toString = $$_K[o.curry]($$_o$last);
})();
