//= require <take>
//= require <language/prototypes/array>
(function () {
	var fn = function () {
		return this[this[$length] - 1];
	};
	$$_o$last = $$_store($$_language_prototypes_array,$last,fn);
	$$_last = $$_take(fn);
})();
