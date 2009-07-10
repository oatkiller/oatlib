//= require <each>
//= require <take>
//= require <language/prototypes/array>

(function () {

	var fn = function (memo,iterator) {
		this[$$_o$each](function (property) {
			memo = iterator[$call](this,memo,property);
		});
		return memo;
	};

	$$_inject = o[$inject] = $$_take(fn);
	$$_o$inject = $$_store($$_language_prototypes_array,$inject,fn);
	$$_inject[$toString] = function () {return $$_o$inject;};
		
})();
