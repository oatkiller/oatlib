//= require <each>
//= require <indexOf>
//= require <language/prototypes/array>
$$_o$unique = $$_store($$_language_prototypes_array,$unique,function () {
	var uniques = [];
	this[$$_o$each](function (raElement) {
		uniques[$$_o$indexOf](raElement) === -1 && uniques.push(raElement);
	});
	return uniques;
});
