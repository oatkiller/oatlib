//= require <remote/reference>
//= require <combine>
//= require <curry>
//= require <each>
//= require <for_each>
//= require <mask>
//= require <remote/ajax>
//= require <string>
(function () {

	var defaultOptions = {},
	handler = function (ajax,options,call) {
		if (ajax.readyState === 4) {
			var status = ajax[$status];
 			// for some status code classes
			[500,400,200][o.each](function (statusCode) {
 				// if the status code is in that class
				if (status >= statusCode) {
 					// if the options array has one for it, run it
					call(options[$$_string($on,(statusCode / 100) >>> 1,'xx')]);
				}
			});
			// if status is in the 300,400,500 class, its a failure
			if (status > 299) {
				call(options.onFailure);
			} else if (status > 199) {
			// if its in the 200-299 range, its a success!
				call(options.onSuccess);
			}
			call(options.onComplete);
		}
	},
	defaultHeaders = {'User-Agent': 'XMLHTTP/1.0'};

	defaultOptions.method = $GET;
	defaultOptions.async = true;

	$$_remote_request = $$_remote.request = function (responseOptions) {
		// merge default headers and specified headers
		var headers = $$_combine({},defaultHeaders,responseOptions.headers),
 		// create a new object with default options and specified options smushed together
		options = $$_combine({},defaultOptions,responseOptions),
		// get a new ajax from xmlhttp
		myAjax = $$_remote_ajax(),
		// define a fn to call callbacks with the ajax and options objicts
		call = function (fn) {
			fn && fn(myAjax,options);
		};
		// put the merged headers into the options object
		options.headers = headers;
		// set 1t event handler
		myAjax.onreadystatechange = handler[o.curry](myAjax,options,call);
		// 'open' initializes the ajax with the mandatory stuff
		myAjax.open(options.method,options.url,options.async);
		// for each thing in the headers object, add it
		options.headers && $$_for_each(options.headers,function (headerValue,headerLabel) {
			myAjax.setRequestHeader(headerLabel,headerValue);
		});
		// start the ajax. pass either specified post data or null
		myAjax.send(options.post || null);
		// pass back a masked version 
		return $$_mask(myAjax,{
			abort: function () {
				call(options.onAbort);
				myAjax.onreadystatechange = null;
				myAjax.abort();
			}
		});
	};

})();
