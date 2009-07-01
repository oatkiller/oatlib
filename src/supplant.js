//= require <language/prototypes/string>
$$_store($$_language_prototypes_string,$supplant,function (o) {
	return this[$replace](/{([^{}]*)}/g,
		function (a,b) {
			var r = o[b];
			return typeof r === $string || typeof r === $number ? r : a;
		}
	);
},$$true);
