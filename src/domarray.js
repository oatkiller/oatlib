//= require <rcurry>
//= require <map>
o[$domarray] = function () { // try to use slice to get an array from an HTML elements collection. if this works, use slice for the array fn, else use an fn that iterates over the array like object and builds a new array incrementally. IE should get the second fn, others should get the first. generally.
	var testDiv = $$document[$createElement]('div');
	testDiv[$innerHTML] = 'a<d></b>';
	try {
		o[$array](testDiv[$childNodes]);
		o[$domarray] = o[$array];
	} catch (e) {
		o[$domarray] = function (arrayLike) {
			return oat_array_prototype[$map][$apply](arrayLike,function (a) {return a;});
		};
	}
	return o[domarray][$apply]($$null,arguments);
};
