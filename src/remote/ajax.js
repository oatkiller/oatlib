//= require <remote/reference>
//= require <curry>
//= require <error>

(function () {

	var fn = function () {
		// try a few ways to create a xmlhttp ajax object. when one works return the object it produced. also redefine this fn to the lucky fn that worked
		// if this fn returns false. then i dunno how to ajax on this browser.
		var ajaxObject = false,
		// ms uses this differently in different version of ie
		activeXFn = function (versionString) {
			return new ActiveXObject(versionString);
		},
		fns = [
			// ms style one
			activeXFn[o.curry]('Msxml2.XMLHTTP'),
			// ms style two
			activeXFn[o.curry]('Microsoft.XMLHTTP'),
			// netscrapters style
			function () {
				return new XMLHttpRequest();
			}
		];
		while (fns.length !== 0) {
			try {
				// tear an fn right out from under that array
				var anFn = fns.shift();
				// try and work it
				ajaxObject = anFn();

				// redefine ajax as this fn for future uses. this way we dont go through all this crazy stuff each time we run a piece of ajax
				fn = anFn;
				// quit trying cause this one rox
				return ajaxObject;
			} catch (e) {
				// you failed, throw away any ajax object we almost got.
				ajaxObject = false;
			}
		}
		$$_error('ajax not supported');
	};

	$$_remote_ajax = $$_remote.ajax = function () {
		return fn.apply(this,arguments);
	};

})();
