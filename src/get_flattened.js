//= require <language/prototypes/array>
//= require <inject>

(function () {

	var fn = function (memo,iterator) {
		return this[$$_o$inject]([],function (a,b) {
			return a[$concat](b);
		});
	};

	$$_get_flattened = o[$get_flattened] = $$_take(fn);
	$$_o$get_flattened = $$_store($$_language_prototypes_array,$get_flattened,fn);
	$$_get_flattened[$toString] = function () {return $$_o$get_flattened;};
		
})();
