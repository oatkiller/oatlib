//= require <array>
//= require <bind>
//= require <language/prototypes/function>
$$_o$curry = $$_store($$_language_prototypes_function,$curry,function () {
	return this[$$_o$bind][$apply](this,[$$null][$concat]($$_array(arguments)));
});
