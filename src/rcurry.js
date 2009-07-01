//= require <array>
//= require <concat>
//= require <language/prototypes/function>
(function () {

	$$_store($$_language_prototypes_function,$rcurry,function () {
		var that = this,
		oldArguments = o[$array](arguments);
		return function () {
			return that[$apply](this,$$_concat[$call](o[$array](arguments),oldArguments));
		};
	},$$true);

})();
