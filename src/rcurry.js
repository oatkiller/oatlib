//= require <array>
//= require <concat>
(function () {

	$$_store(function () {
		var that = this,
		oldArguments = o[$array](arguments);
		return function () {
			return that[$apply](this,$$_concat[$call](o[$array](arguments),oldArguments));
		};
	},$rcurry,$$_function_prototype);

})();
