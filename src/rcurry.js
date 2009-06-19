//= require <slice>
//= require <array>
(function () {

	$$_rcurry = oatlib[$rcurry] = function (fn) { // holds logic for curry
		var that = fn,
		oldArguments = $$_slice[$call](arguments,1);
		return function () {
			return that[$apply]($$null,$$_array(arguments)[$concat](oldArguments));
		};
	};

})();
