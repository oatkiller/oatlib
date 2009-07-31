//= require <each>
//= require <indexOf>
o.store(Array,'unique',function () {
	var uniques = [];
	this[o.each](function (ra_element) {
		uniques[o.indexOf](ra_element) === -1 && uniques.push(ra_element);
	});
	return uniques;
});
