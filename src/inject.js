//= require <each>
//= require <K>
//= require <curry>
//= require <take>
//= require <language/prototypes/array>

(function () {

	var fn = function (memo,iterator) {
		this[o.each](function (property) {
			memo = iterator.call(this,memo,property);
		});
		return memo;
	};

	$$_o$inject = $$_store($$_language_prototypes_array,$inject,fn);
	$$_inject = o.inject = $$_take(fn);
	$$_inject.toString = $$_K[o.curry]($$_o$inject);
		
})();
