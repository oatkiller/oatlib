(function () {
var $$_qname, $$_store, $$window = window, $toString = 'toString', $$_dom, $dom = 'dom', $regex = 'regex', $$RegExp = RegExp, $$_language_prototypes_array, $$Array = Array, $prototype = 'prototype', $$_join, $join = 'join', $$_string, $string = 'string', $call = 'call', $add_class_name = 'add_class_name', $className = 'className', $replace = 'replace', $$_slice, $slice = 'slice', $array = 'array', $apply = 'apply', $map = 'map', $length = 'length', $$true = true, $$document = document, $createElement = 'createElement', $innerHTML = 'innerHTML', $$_array, $childNodes = 'childNodes', $$_array_prototype, $$null = null, $$_take, $take = 'take', $$_language_prototypes_function, $$Function = Function, $$_qname_memoize, $memoize = 'memoize', $$_memoize, $hasOwnProperty = 'hasOwnProperty', $$_class_name_test_regex, $clear_opacity = 'clear_opacity', $style = 'style', $opacity = 'opacity', $filter = 'filter', $element = 'element', $getElementById = 'getElementById', $each = 'each', $$_inject, $inject = 'inject', $$_qname_inject, $injector = 'injector', $fragment = 'fragment', $appendChild = 'appendChild', $has_class_name = 'has_class_name', $test = 'test', $node = 'node', $remove_class_name = 'remove_class_name', $set_opacity = 'set_opacity', $$_remote, $remote = 'remote', $bind = 'bind', $concat = 'concat', $curry = 'curry', $combine = 'combine', $super_combine = 'super_combine', $for_each = 'for_each', $mask = 'mask', $error = 'error', $$Error = Error, $request = 'request', $$false = false, $shift = 'shift', $readyState = 'readyState', $status = 'status', $onFailure = 'onFailure', $onSuccess = 'onSuccess', $onComplete = 'onComplete', $method = 'method', $GET = 'GET', $async = 'async', $ajax = 'ajax', $headers = 'headers', $onreadystatechange = 'onreadystatechange', $open = 'open', $url = 'url', $setRequestHeader = 'setRequestHeader', $send = 'send', $post = 'post', $onAbort = 'onAbort', $abort = 'abort', $constructor = 'constructor', $builder = 'builder', $object_memo = 'object_memo', $$_concat, $rcurry = 'rcurry', $$_language_prototypes_string, $$String = String, $supplant = 'supplant', $number = 'number', $chop = 'chop', $get_once = 'get_once', $indexOf = 'indexOf', $trim = 'trim', $unique = 'unique', $push = 'push', emptyString = '';
var namespace = 'http://oatlab.com/oatlib/v2',
qname_prefix = namespace + ':::',
o,
emptyString = '',
emptyArray = [];


$$_qname = function (name) {
	return qname_prefix + name;
};
$$_store = function (obj,name,payload,qualify) {
	if (qualify) {
		var qname = $$_qname(name);
		o[name] = qname;
		return (obj[qname] = payload);
	} else {
		return (obj[name] = payload);
	}
};
$$window[namespace] = o = {};
o[$toString] = function () {
	return namespace;
};
$$_dom = $$_store(o,$dom,{});
$$_store(o,$regex,function (pattern,flags) {
	return new $$RegExp(pattern,flags);
});
$$_language_prototypes_array = $$Array[$prototype];
$$_join = $$_language_prototypes_array[$join];

$$_string = $$_store(o,$string,function () {
	return $$_join[$call](arguments,emptyString);
});
$$_store($$_dom,$add_class_name,function (element,className) {
	element[$className] = element[$className][$replace](o[$regex](o[$string]('^(?!.*',className,'(\\s+|$))')),o[$string](className,' '));
	return element;
});
$$_slice = $$_language_prototypes_array[$slice];
$$_store(o,$array,function (arrayLike) {
	return $$_slice[$apply](arrayLike);
});
$$_store($$_language_prototypes_array,$map,function (fn) {
	var that = this,
	length = that[$length],
	response = new $$Array(length), i = 0;

	for (; i < length; i++) {
		response[i] = fn[$call](that,that[i],i,that);
	}
	return response;

},$$true);

$$_store($$_dom,$array,function () { // try to use slice to get an array from an HTML elements collection. if this works, use slice for the array fn, else use an fn that iterates over the array like object and builds a new array incrementally. IE should get the second fn, others should get the first. generally.
	var testDiv = $$document[$createElement]('div');
	testDiv[$innerHTML] = 'a<d></b>';
	try {
		var $$_array = o[$array];
		$$_array(testDiv[$childNodes]);
		$$_store($$_dom,$array,$$_array);
	} catch (e) {
		$$_store($$_dom,$array,function (arrayLike) {
			return $$_array_prototype[o[$map]][$apply](arrayLike,function (a) {return a;});
		});
	}
	return o[$dom][$array][$apply]($$null,arguments);
});
$$_take = $$_store(o,$take,function (fn) {
	return function () {
		return fn[$apply](arguments[0],$$_slice[$call](arguments,1));
	};
});
$$_language_prototypes_function = $$Function[$prototype];
(function () {
	var join = o[$take]($$_join),
	$$_qname_memoize = $$_qname($memoize);
	$$_memoize = $$_store(o,$memoize,$$_take($$_store($$_language_prototypes_function,$memoize,function (memo) {
		memo = memo || {};
		var that = this;
		return function () {
			var key = join(arguments);
			return memo[$hasOwnProperty](key) ? memo[key] : (memo[key] = that[$apply](this,arguments));
		};
	},$$true)));
	$$_memoize[$toString] = function () {return $$_qname_memoize;};


})();
$$_class_name_test_regex = o[$memoize](function (className) {
	return o[$regex](o[$string]('(^|\\s+)',className,'(\\s+|$)'));
});
$$_store($$_dom,$clear_opacity,function (node) {
	node[$style][$opacity] = emptyString;
	node[$style][$filter] = 'alpha(opacity=)';
});
$$_store($$_dom,$element,function (id) {
	return $$document[$getElementById](id);
});
$$_store($$_language_prototypes_array,$each,function (fn) {
		var that = this;
	for (var i = 0, length = that[$length]; i < length; i++) {
		fn[$call](that, that[i], i, that);
	}
},$$true);
$$_inject = $$_store(o,$inject,$$_take($$_store($$_language_prototypes_array,$inject,function (memo,iterator) {
	this[o[$each]](function (property) {
		memo = iterator[$call](this,memo,property);
	});
	return memo;
},$$true)));
(function () {
	var $$_qname_inject = $$_qname($inject);
	$$_inject[$toString] = function () {return $$_qname_inject;};
})();
$$_store(o,$injector,function (memoBuilder, iterator) { // takes a function which returns a new memo and an iterator function. returns a function which wraps inject, passes it a new memo each times its called. see document.getFragmentWithNodes. this is the way you should use inject if the memo is not primitive
	return function () {
		return o[$array](arguments)[o[$inject]](memoBuilder(),iterator);
	};
});

$$_store($$_dom,$fragment,function () {
	var getFragmentFromNodes = o[$injector](function () {return $$document.createDocumentFragment();},function (fragment,node) {
		fragment[$appendChild](node);
		return fragment;
	}),
	div = $$document[$createElement]('div');
	return $$_store($$_dom,$fragment,function (html) {
		div[$innerHTML] = html;
		return getFragmentFromNodes[$apply]($$null,o[$dom][$array](div[$childNodes]));
	})[$apply](this,arguments);
});
$$_store($$_dom,$has_class_name,function (element,className) {
	return $$_class_name_test_regex(className)[$test](element[$className]);
});
$$_store($$_dom,$node,function (html) {
	return o[$dom][$fragment](html)[$childNodes][0];
});
$$_store($$_dom,$remove_class_name,function (element,className) {
	element[$className] = element[$className][$replace](
		$$_class_name_test_regex(className),
		'$1$2'
	)[$replace](
		/\s+/g,
		' '
	)[$replace](
		/(^\s|\s$)/g,
		emptyString
	);
	return element;
});
$$_store($$_dom,$set_opacity,function (node,value) {
	node[$style][$opacity] = value / 10;
	node[$style][$filter] = o[$string]('alpha(opacity=',value * 10,')');
});
$$_remote = $$_store(o,$remote,{});
$$_store($$_language_prototypes_function,$bind,function (obj) { // holds the logic for curry
	var that = this,
	oldArguments = $$_slice[$call](arguments,1);
	return function () {
		return that[$apply](obj,oldArguments[$concat](o[$array](arguments)));
	};
},$$true);
$$_store($$_language_prototypes_function,$curry,function () {
	return this[o[$bind]][$apply](this,[$$null][$concat](o[$array](arguments)));
},$$true);
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

	$$_store(o,$combine,combinator[o[$curry]](iterator[o[$curry]](function (anObj,propertyName) { // curries combinator with a test to make sure the properties are on the subject argument directly, as opposed to being on its prototype
		return anObj[$hasOwnProperty](propertyName);
	})));

	$$_store(o,$super_combine,combinator[o[$curry]](iterator[o[$curry]](function () {return $$true;}))); // curries combinator with a test that takes every property, including ones on the subject arguments __proto__

})();
$$_store(o,$for_each,function (obj,fn) {
	for (var propertyName in obj) {
		fn(obj[propertyName],propertyName,obj);
	}
});
$$_store(o,$mask,function (obj) {
	var C = function () {};
	C[$prototype] = obj;
	return new C();
});
$$_store(o,$error,function () {
	throw new $$Error(o[$string][$apply]($$null,o[$array](arguments)));
});
$$_store($$_remote,$request,function () {
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
});
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

	$$_store($$_remote,$ajax,function (responseOptions) {
		var headers = o[$combine]({},defaultHeaders,responseOptions[$headers]),
		options = o[$combine]({},defaultOptions,responseOptions),
		myRequest = o[$remote][$request](),
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
	});

})();

$$_store(o,$constructor,function (prototype) { // produces a new generic object constructor function
	var fn = function () {
		return o[$super_combine][$apply]($$null,[this][$concat](o[$array](arguments)));
	};
	fn[$prototype] = prototype;
  return fn;
});
(function () {

  var singleBuilder = function (prototype) { // takes a prototype and produces a function which takes a properties object and produces an instance
    return function (properties) {
      return new (o[$constructor](prototype))(properties);
    };
	};

	$$_store(o,$builder,o[$injector](function () {return singleBuilder({});},function (aSingleBuilder,aPrototype) {return singleBuilder(aSingleBuilder(aPrototype));}));

})();
$$_store(o,$object_memo,function (propertyName,calculate) {
	return function () {
		var that = this;
		return that[$hasOwnProperty](propertyName) ? that[propertyName] : (that[propertyName] = calculate[$apply](that,arguments));
	};
});
$$_concat = $$_language_prototypes_array[$concat];
(function () {

	$$_store($$_language_prototypes_function,$rcurry,function () {
		var that = this,
		oldArguments = o[$array](arguments);
		return function () {
			return that[$apply](this,$$_concat[$call](o[$array](arguments),oldArguments));
		};
	},$$true);

})();
$$_language_prototypes_string = $$String[$prototype];

$$_store($$_language_prototypes_string,$supplant,function (o) {
	return this[$replace](/{([^{}]*)}/g,
		function (a,b) {
			var r = o[b];
			return typeof r === $string || typeof r === $number ? r : a;
		}
	);
},$$true);
$$_store($$_language_prototypes_array,$chop,function () {
	var that = this;
	that.length--;
	return that;
},$$true);
$$_store(o,$get_once,function (methodName,calculate) {
	return function () {
		var value = calculate[$apply](this,arguments);
		return (this[methodName] = function () {
			return value;
		})[$apply](this,arguments);
	};
});
$$_store($$_language_prototypes_array,$indexOf,$$_language_prototypes_array[$indexOf] || function (element) {

	var that = this,
	length = that[$length],
	from = arguments[1] || 0;

	if (from < 0) {
		from += length;
	}

	for (; from < length; from++) {
		if (that[$hasOwnProperty](from) && that[from] === element) {
			return from;
		}
	}

	return -1;

},$$true);
$$_store($$_language_prototypes_string,$trim,function () {
	return this[$replace](/^\s+|\s+$/g,emptyString);
},$$true);
$$_store($$_language_prototypes_array,$unique,function () {
	var uniques = [];
	this[o[$each]](function (raElement) {
		uniques[o[$indexOf]](raElement) === -1 && uniques[$push](raElement);
	});
	return uniques;
},$$true);
})();
