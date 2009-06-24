//= require <each>
//= require <indexOf>
$$_store(function () {
	var uniques = [];
	this[o[$each]](function (raElement) {
		uniques[o[$indexOf]](raElement) === -1 && uniques[$push](raElement);
	});
	return uniques;
},$unique,emptyArray,$$_array_prototype);
