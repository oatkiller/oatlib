//= require <language/prototypes/array>
//= require <K>
//= require <curry>
//= require <take>
(function () {
	var fn = function (array_payload) {
		this.splice(0,this.length);
		this.concat(payload);
	};

	$$_o$update = $$_store($$_language_prototypes_array,$update,fn);
	$$_update = o.update = $$_take(fn);
	$$_update.toString = $$_K[o.curry]($$_o$update);
		
})();

