//= require <language/prototypes/array>
//= require <K>
//= require <curry>
//= require <inject>

(function () {

	var fn = function (memo,iterator) {
		return this[o.inject]([],function (a,b) {
			return a.concat(b);
		});
	};

	$$_o$get_flattened = $$_store($$_language_prototypes_array,$get_flattened,fn);
	$$_get_flattened = o.get_flattened = $$_take(fn);
	$$_get_flattened.toString = $$_K[o.curry]($$_o$get_flattened);
		
})();
