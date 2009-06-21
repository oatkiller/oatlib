//= require <array>
//= require <map>

$$_store(function () { // try to use slice to get an array from an HTML elements collection. if this works, use slice for the array fn, else use an fn that iterates over the array like object and builds a new array incrementally. IE should get the second fn, others should get the first. generally.
	var testDiv = $$document[$createElement]('div');
	testDiv[$innerHTML] = 'a<d></b>';
	try {
		var $$_array = o[$array];
		$$_array(testDiv[$childNodes]);
		$$_store($$_array,$domarray);
	} catch (e) {
		$$_store(function (arrayLike) {
			return $$_array_prototype[o[$map]][$apply](arrayLike,function (a) {return a;});
		},$domarray);
	}
	return o[$domarray][$apply]($$null,arguments);
},$domarray);
