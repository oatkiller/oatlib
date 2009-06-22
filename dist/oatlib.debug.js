(function () {
var $$_function_prototype, $$Function = Function, $prototype = 'prototype', $$_array_prototype, $$Array = Array, $$_bindings, $$_store, $toString = 'toString', $length = 'length', $call = 'call', $each = 'each', $inject = 'inject', $$_slice, $slice = 'slice', $apply = 'apply', $array = 'array', $concat = 'concat', $bind = 'bind', $$null = null, $curry = 'curry', $hasOwnProperty = 'hasOwnProperty', $combine = 'combine', $$true = true, $super_combine = 'super_combine', $for_each = 'for_each', $mask = 'mask', $$_join, $join = 'join', $string = 'string', $$Error = Error, $error = 'error', $$false = false, $shift = 'shift', $request = 'request', $readyState = 'readyState', $status = 'status', $onFailure = 'onFailure', $onSuccess = 'onSuccess', $onComplete = 'onComplete', $method = 'method', $GET = 'GET', $async = 'async', $headers = 'headers', $onreadystatechange = 'onreadystatechange', $open = 'open', $url = 'url', $setRequestHeader = 'setRequestHeader', $send = 'send', $post = 'post', $onAbort = 'onAbort', $abort = 'abort', $ajax = 'ajax', emptyString = '';
var namespace = 'http://oatlab.com/oatlib/v2',
o;
$$_function_prototype = $$Function[$prototype];
$$_array_prototype = $$Array[$prototype];
$$_bindings = [];
$$_store = function (fn,name,namespace) {
	if (namespace) {
		var qn = o(name);
		namespace[qn] = fn;
		o[name] = qn;
	} else {
		o[name] = fn;
	}
	return fn;
};

(function () {
 	var prefix = namespace + ':::';
	window[namespace] = o = function (name) {
		return prefix + name;
	};
})();

o[$toString] = function () {
	return namespace;
};
$$_store(function (fn) {
		var that = this;
	for (var i = 0, length = that[$length]; i < length; i++) {
		fn[$call](that, that[i], i, that);
	}
},$each,$$_array_prototype);
$$_store(function (memo,iterator) {
	this[o[$each]](function (property) {
		memo = iterator[$call](this,memo,property);
	});
	return memo;
},$inject,$$_array_prototype);
$$_slice = $$_array_prototype[$slice];
$$_store(function (arrayLike) {
	return $$_slice[$apply](arrayLike);
},$array);
$$_store(function (obj) { // holds the logic for curry
	var that = this,
	oldArguments = $$_slice[$call](arguments,1);
	return function () {
		return that[$apply](obj,oldArguments[$concat](o[$array](arguments)));
	};
},$bind,$$_function_prototype);
$$_store(function () {
	return this[o[$bind]][$apply](this,[$$null][$concat](o[$array](arguments)));
},$curry,$$_function_prototype);
(function () {

	var iterator = function (test,resultObj,anObj) { // combines two objects
		for (var propertyName in anObj) {
			if (test(anObj,propertyName)) {
				resultObj[propertyName] = anObj[propertyName];
			}
		}
		return resultObj;
	},
	combinator = function (anIterator,resultObj) { // combines any number of objects
		return $$_slice[$call](arguments,2)[o[$inject]](resultObj,anIterator);
	};

	$$_store(combinator[o[$curry]](iterator[o[$curry]](function (anObj,propertyName) { // curries combinator with a test to make sure the properties are on the subject argument directly, as opposed to being on its prototype
		return anObj[$hasOwnProperty](propertyName);
	})),$combine);

	$$_store(combinator[o[$curry]](iterator[o[$curry]](function () {return $$true;})),
	$super_combine); // curries combinator with a test that takes every property, including ones on the subject arguments __proto__

})();
$$_store(function (obj,fn) {
	for (var propertyName in obj) {
		fn(obj[obj[propertyName]],propertyName,obj);
	}
},$for_each);
$$_store(function (obj) {
	var C = function () {};
	C[$prototype] = obj;
	return new C();
},$mask);
$$_join = $$_array_prototype[$join];
$$_store(function () {
	return $$_join[$call](arguments,emptyString);
},$string);
$$_store(function () {
	throw new $$Error(o[$string][$apply]($$null,o[$array](arguments)));
},$error);
$$_store(function () {
	var requestObject = $$false,
	activeXFn = function (versionString) {
		return new ActiveXObject(versionString);
	},
	fns = [
		activeXFn[o[$curry]]('Msxml2.XMLHTTP'),
		activeXFn[o[$curry]]('Microsoft.XMLHTTP'),
		function () {
			return new XMLHttpRequest();
		}
	];
	while (fns[$length] !== 0) {
		try {
			var fn = fns[$shift]();
			requestObject = fn();

			$$_store(fn,$request);
			return requestObject;
		} catch (e) {
			requestObject = $$false;
		}
	}
	o[$error]('ajax not supported');
	return $$false;
},$request);
(function () {

	var defaultOptions = {},
	handler = function (request,options,call) {
		if (request[$readyState] === 4) {
			var status = request[$status];
			[500,400,200][o[$each]](function (statusCode) {
				if (status >= statusCode) {
					call(options[o[$string]('on',(statusCode / 100) >>> 1,'xx')]);
				}
			});
			if (status > 299) {
				call(options[$onFailure]);
			} else if (status > 199) {
				call(options[$onSuccess]);
			}
			call(options[$onComplete]);
		}
	},
	defaultHeaders = {'User-Agent': 'XMLHTTP/1.0'};

	defaultOptions[$method] = $GET;
	defaultOptions[$async] = $$true;

	$$_store(function (responseOptions) {
		var headers = o[$combine]({},defaultHeaders,responseOptions[$headers]),
		options = o[$combine]({},defaultOptions,responseOptions),
		myRequest = o[$request](),
		call = function (fn) {
			fn && fn(myRequest,options);
		};
		options[$headers] = headers;
		myRequest[$onreadystatechange] = handler[o[$curry]](myRequest,options,call);
		myRequest[$open](options[$method],options[$url],options[$async]);
		options[$headers] && o[$for_each](options[$headers],function (headerValue,headerLabel) {
			myRequest[$setRequestHeader](headerLabel,headerValue);
		});
		myRequest[$send](options[$post] || $$null);
		return o[$mask](myRequest,{
			abort: function () {
				call(options[$onAbort]);
				myRequest[$onreadystatechange] = $$null;
				myRequest[$abort]();
			}
		});
	},$ajax);

})();
})();
