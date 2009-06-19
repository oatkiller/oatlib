//= require <concat>
//= require <array>
(function () {

	o[$rcurry] = function () { // holds logic for curry
		var that = this(),
		oldArguments = arguments;
		return function () {
			return that[$apply]($$null,$$_concat[$call](arguments,oldArguments));
		};
	};

})();
