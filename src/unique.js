//= require <each>
//= require <indexOf>
o[$unique] = function () {
	var uniques = [],
	that = this();
	that[o][$each](function (raElement) {
		uniques[o][$indexOf](raElement) === -1 && uniques[$push](raElement);
	});
	return uniques;
};
