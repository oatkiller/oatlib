//= require <language/prototypes/string>
$$_o$trim = $$_store($$_language_prototypes_string,$trim,function () {
	return this[$replace](/^\s+|\s+$/g,emptyString);
});
