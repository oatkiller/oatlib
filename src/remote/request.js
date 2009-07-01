//= require <remote/reference>
//= require <curry>
//= require <error>
$$_store($$_remote,$request,function () {
	// try a few ways to create a xmlhttp request object. when one works return the object it produced. also redefine this fn to the lucky fn that worked
	// if this fn returns false. then i dunno how to ajax on this browser.
	var requestObject = $$false,
	// ms uses this differently in different version of ie
	activeXFn = function (versionString) {
		return new ActiveXObject(versionString);
	},
	fns = [
		// ms style one
		activeXFn[o[$curry]]('Msxml2.XMLHTTP'),
		// ms style two
		activeXFn[o[$curry]]('Microsoft.XMLHTTP'),
		// netscrapters style
		function () {
			return new XMLHttpRequest();
		}
	];
	while (fns[$length] !== 0) {
		try {
			// tear an fn right out from under that array
			var fn = fns[$shift]();
			// try and work it
			requestObject = fn();

			// redefine request as this fn for future uses. this way we dont go through all this crazy stuff each time we run a piece of ajax
			$$_store(fn,$request);
			// quit trying cause this one rox
			return requestObject;
		} catch (e) {
			// you failed, throw away any request object we almost got.
			requestObject = $$false;
		}
	}
	o[$error]('ajax not supported');
	return $$false;
});
