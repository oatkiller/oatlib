//= require <language/prototypes/array>
$$_o$every = $$_store($$_language_prototypes_array,$every,function (fn) {
	var length = this[$length], i = 0;
	for (; i < length; i++) {
		if (!fn[$call](this,this[i],this)) {
			return $$false;
		}
	}
	return $$true;
});
