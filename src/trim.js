//= require <language/prototypes/string>
$$_store($$_language_prototypes_string,$trim,function () {
	return this[$replace](/^\s+|\s+$/g,emptyString);
});
$$_o$trim = o[$trim];
