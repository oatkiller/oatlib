//= require <dom/reference>
//= require <language/prototypes/array>
//= require <array>
//= require <map>

(function () {

	var testDiv = $$document[$createElement]('div'),
	fn;
	testDiv[$innerHTML] = 'a<b>b</b>';
	fn = function () {
		try {// try to use slice to get an array from an HTML elements collection. if this works, use slice for the array fn, else use an fn that iterates over the array like object and builds a new array incrementally. IE should get the second fn, others should get the first. generally.
			$$_array(testDiv[$childNodes]);
			fn = $$_dom_array = $$_dom[$array] = $$_array;
		} catch (e) {

			var map = $$_language_prototypes_array[$$_o$map];
			fn = $$_dom_array = $$_dom[$array] = function (arrayLike) {
				return map[$call](arrayLike,$$_K);
			};
		}
		return fn[$apply]($$null,arguments);
	};

	$$_dom_array = $$_dom[$array] = function () {
		return fn[$apply]($$null,arguments);
	};

})();
