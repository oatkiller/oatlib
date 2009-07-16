//= require <language/prototypes/function>
//= require <array>
//= require <slice>
$$_o$bind = $$_store($$_language_prototypes_function,$bind,function (obj) { // holds the logic for curry
	var that = this,
	oldArguments = $$_slice.call(arguments,1);
	return function () {
		return that.apply(obj,oldArguments.concat($$_array(arguments)));
	};
});
