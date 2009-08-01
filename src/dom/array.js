//= require <dom/reference>
//= require <array>
//= require <map>
//= require <K>

(function () {

	var fn = function () {
		var test_div = document.createElement('div');
		test_div.innerHTML = 'a';
		try {// try to use slice to get an array from an HTML elements collection. if this works, use slice for the array fn, else use an fn that iterates over the array like object and builds a new array incrementally. IE should get the second fn, others should get the first. generally.
			o.array(test_div.childNodes);
			fn = o.dom.array = o.array;
		} catch (e) {
			fn = o.dom.array = function (array_like) {
				return o.map(array_like,o.K);
			};
		}
		return fn.apply(null,arguments);
	};

	o.dom.array = function () {
		return fn.apply(null,arguments);
	};

})();
