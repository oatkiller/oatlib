//= require <dom/reference>
//= require <array>
//= require <map>

$$_store($$_dom,$array,function () { // try to use slice to get an array from an HTML elements collection. if this works, use slice for the array fn, else use an fn that iterates over the array like object and builds a new array incrementally. IE should get the second fn, others should get the first. generally.
	var testDiv = $$document[$createElement]('div');
	testDiv[$innerHTML] = 'a<d></b>';
	try {
		var $$_array = o[$array];
		$$_array(testDiv[$childNodes]);
		$$_store($$_dom,$array,$$_array);
	} catch (e) {
		$$_store($$_dom,$array,function (arrayLike) {
			return $$_array_prototype[o[$map]][$apply](arrayLike,function (a) {return a;});
		});
	}
	return o[$dom][$array][$apply]($$null,arguments);
});
