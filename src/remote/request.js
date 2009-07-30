//= require <remote/reference>
//= require <combine>
//= require <curry>
//= require <each>
//= require <for_each>
//= require <mask>
//= require <remote/ajax>
//= require <string>
(function () {

	var default_options = {
		method: 'GET',
		async: true
	},
	handler = function (ajax,options,call) {
		if (ajax.readyState === 4) {
			var status = ajax.status;
 			// for some status code classes
			[500,400,200][o.each](function (status_code) {
 				// if the status code is in that class
				if (status >= status_code) {
 					// if the options array has one for it, run it
					call(options[$$_string('on_',(status_code / 100) >>> 1,'xx')]);
				}
			});
			// if status is in the 300,400,500 class, its a failure
			if (status > 299) {
				call(options.on_failure);
			} else if (status > 199) {
			// if its in the 200-299 range, its a success!
				call(options.on_success);
			}
			call(options.on_complete);
		}
	},
	default_headers = {
		'Content-Type': 'application/x-www-form-urlencoded',
		'X-Requested-With': 'XMLHttpRequest',
		'Accept': 'application/json, text/javascript, */*' 
	};

	$$_remote_request = $$_remote.request = function (response_options) {
		// merge default headers and specified headers
		var headers = $$_combine({},default_headers,response_options.headers),
 		// create a new object with default options and specified options smushed together
		options = $$_combine({},default_options,response_options),
		// get a new ajax from xmlhttp
		my_ajax = $$_remote_ajax(),
		// define a fn to call callbacks with the ajax and options objicts
		call = function (fn) {
			fn && fn(my_ajax,options);
		};
		// put the merged headers into the options object
		options.headers = headers;
		// set 1t event handler
		my_ajax.onreadystatechange = function () {
			return handler[o.curry](my_ajax,options,call).apply(this,arguments);
		};
		// 'open' initializes the ajax with the mandatory stuff
		my_ajax.open(options.method,options.url,options.async);
		// for each thing in the headers object, add it
		options.headers && $$_for_each(options.headers,function (header_value,header_label) {
			my_ajax.setRequestHeader(header_label,header_value);
		});
		// start the ajax. pass either specified post data or null
		my_ajax.send(options.body || null);
		// pass back a masked version 
		return $$_mask(my_ajax,{
			abort: function () {
				call(options.on_abort);
				my_ajax.onreadystatechange = null;
				my_ajax.abort();
			}
		});
	};

})();
