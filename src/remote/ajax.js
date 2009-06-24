//= require <combine>
//= require <curry>
//= require <each>
//= require <for_each>
//= require <mask>
//= require <remote/request>
//= require <string>
(function () {

	var defaultOptions = {},
	handler = function (request,options,call) {
		if (request[$readyState] === 4) {
			var status = request[$status];
 			// for some status code classes
			[500,400,200][o[$each]](function (statusCode) {
 				// if the status code is in that class
				if (status >= statusCode) {
 					// if the options array has one for it, run it
					call(options[o[$string]('on',(statusCode / 100) >>> 1,'xx')]);
				}
			});
			// if status is in the 300,400,500 class, its a failure
			if (status > 299) {
				call(options[$onFailure]);
			} else if (status > 199) {
			// if its in the 200-299 range, its a success!
				call(options[$onSuccess]);
			}
			call(options[$onComplete]);
		}
	},
	defaultHeaders = {'User-Agent': 'XMLHTTP/1.0'};

	defaultOptions[$method] = $GET;
	defaultOptions[$async] = $$true;

	$$_store(function (responseOptions) {
		// merge default headers and specified headers
		var headers = o[$combine]({},defaultHeaders,responseOptions[$headers]),
 		// create a new object with default options and specified options smushed together
		options = o[$combine]({},defaultOptions,responseOptions),
		// get a new request from xmlhttp
		myRequest = o[$remote][$request](),
		// define a fn to call callbacks with the request and options objicts
		call = function (fn) {
			fn && fn(myRequest,options);
		};
		// put the merged headers into the options object
		options[$headers] = headers;
		// set 1t event handler
		myRequest[$onreadystatechange] = handler[o[$curry]](myRequest,options,call);
		// 'open' initializes the request with the mandatory stuff
		myRequest[$open](options[$method],options[$url],options[$async]);
		// for each thing in the headers object, add it
		options[$headers] && o[$for_each](options[$headers],function (headerValue,headerLabel) {
			myRequest[$setRequestHeader](headerLabel,headerValue);
		});
		// start the request. pass either specified post data or null
		myRequest[$send](options[$post] || $$null);
		// pass back a masked version 
		return o[$mask](myRequest,{
			abort: function () {
				call(options[$onAbort]);
				myRequest[$onreadystatechange] = $$null;
				myRequest[$abort]();
			}
		});
	},$ajax,[$remote]);

})();

