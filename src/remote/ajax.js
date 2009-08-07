//= require <remote/reference>
//= require <curry>
//= require <error>

(function () {

	var fn = function () {
		// try a few ways to create a xmlhttp ajax object. when one works return the object it produced. also redefine this fn to the lucky fn that worked
		// if this fn returns false. then i dunno how to ajax on this browser.
		var ajax_object = false,
		// ms uses this differently in different version of ie
		active_x_fn = function (version_string) {
			return new ActiveXObject(version_string);
		},
		fns = [
			// ms style one
			active_x_fn[o.curry]('Msxml3.XMLHTTP'),
			active_x_fn[o.curry]('Msxml2.XMLHTTP'),
			// ms style two
			active_x_fn[o.curry]('Microsoft.XMLHTTP'),
			// netscrapters style
			function () {
				return new XMLHttpRequest();
			}
		];
		while (fns.length !== 0) {
			try {
				// tear an fn right out from under that array
				var an_fn = fns.shift();
				// try and work it
				ajax_object = an_fn();

				// redefine ajax as this fn for future uses. this way we dont go through all this crazy stuff each time we run a piece of ajax
				o.remote.ajax = fn = an_fn;
				// quit trying cause this one rox
				return ajax_object;
			} catch (e) {
				// you failed, throw away any ajax object we almost got.
				ajax_object = false;
			}
		}
		o.error('ajax not supported');
	};

	o.remote.ajax = function () {
		return fn.apply(this,arguments);
	};

})();
