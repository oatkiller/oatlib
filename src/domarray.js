//= require <rcurry>
//= require <map>
$$_domarray = oatlib[$domarray] = function () { // try to use slice to get an array from an HTML elements collection. if this works, use slice for the array fn, else use an fn that iterates over the array like object and builds a new array incrementally. IE should get the second fn, others should get the first. generally.
	var testDiv = $$document[$createElement]('div');
	testDiv[$innerHTML] = 'asdf<div></div>asdf';
	try {
		$$_array(testDiv[$childNodes]);
		$$_domarray = oatlib[$domarray] = $$_array;
	} catch (e) {
		$$_domarray = oatlib[$domarray] = $$_rcurry($$_map,function (a) {return a;});
	}
	return $$_domarray[$apply]($$null,arguments);
};
