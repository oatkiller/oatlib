//= require <each>
//= require <indexOf>
$$_unique = oatlib[$unique] = function (ra) {
	var uniques = [],
	that = ra;
	that.each(function (raElement) {
		uniques.indexOf(raElement) === -1 && uniques.push(raElement);
	});
	return uniques;
};
