(function () {
var $$_function_prototype, $$Function = Function, $prototype = 'prototype', $$_array_prototype, $$Array = Array, $$_namespace, $length = 'length', $slice = 'slice', $$_store, $toString = 'toString', $$_slice, $apply = 'apply', $array = 'array', $call = 'call', $concat = 'concat', $bind = 'bind', $each = 'each', $inject = 'inject', $$null = null, $curry = 'curry', $hasOwnProperty = 'hasOwnProperty', $combine = 'combine', $$true = true, $super_combine = 'super_combine', $constructor = 'constructor', $injector = 'injector', $builder = 'builder', $$RegExp = RegExp, $regex = 'regex', $$_join, $join = 'join', $string = 'string', $className = 'className', $replace = 'replace', $add_class_name = 'add_class_name', $dom = 'dom', $map = 'map', $$document = document, $createElement = 'createElement', $innerHTML = 'innerHTML', $$_array, $childNodes = 'childNodes', $style = 'style', $opacity = 'opacity', $filter = 'filter', $clear_opacity = 'clear_opacity', $getElementById = 'getElementById', $element = 'element', $take = 'take', $memoize = 'memoize', $$_class_name_test_regex, $test = 'test', $has_class_name = 'has_class_name', $appendChild = 'appendChild', $fragment = 'fragment', $node = 'node', $remove_class_name = 'remove_class_name', $set_opacity = 'set_opacity', $mask = 'mask', $object_memo = 'object_memo', $$_concat, $rcurry = 'rcurry', $for_each = 'for_each', $$Error = Error, $error = 'error', $$_period, $$_is_not_supported, $$false = false, $shift = 'shift', $request = 'request', $remote = 'remote', $readyState = 'readyState', $status = 'status', $onFailure = 'onFailure', $onSuccess = 'onSuccess', $onComplete = 'onComplete', $method = 'method', $GET = 'GET', $async = 'async', $headers = 'headers', $onreadystatechange = 'onreadystatechange', $open = 'open', $url = 'url', $setRequestHeader = 'setRequestHeader', $send = 'send', $post = 'post', $onAbort = 'onAbort', $abort = 'abort', $ajax = 'ajax', $number = 'number', $supplant = 'supplant', $$String = String, emptyString = '';
var namespace = 'http://oatlab.com/oatlib/v2',
o,
emptyArray = [];
$$_function_prototype = $$Function[$prototype];
$$_array_prototype = $$Array[$prototype];
$$_namespace = function (ra,obj) {
	obj = obj || o;
	if (!ra[$length]) {
		return obj;
	}
	if (ra[0] in obj) {
		return $$_namespace(ra[$slice](1),obj[ra[0]]);
	} else {
		for (var i = 0, length = ra[$length], propertyName; i < length; i++) {
			propertyName = ra[i];
			obj[propertyName] = {};
			obj = obj[propertyName];
		}
		return obj;
	}
};
(function () {
 	var qname,
	namespace_obj;
	$$_store = function (fn,name,namespace,obj) {
		namespace_obj = $$_namespace(namespace || []);
		if (obj) {
			qname = o(name);
			obj[qname] = fn;
			namespace_obj[name] = qname;
		} else {
			namespace_obj[name] = fn;
		}
		return fn;
	};
})();

(function () {
 	var prefix = namespace + ':::';
	window[namespace] = o = function (name) {
		return prefix + name;
	};
})();

o[$toString] = function () {
	return namespace;
};
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
},$bind,emptyArray,$$_function_prototype);
$$_store(function (fn) {
		var that = this;
	for (var i = 0, length = that[$length]; i < length; i++) {
		fn[$call](that, that[i], i, that);
	}
},$each,emptyArray,$$_array_prototype);
$$_store(function (memo,iterator) {
	this[o[$each]](function (property) {
		memo = iterator[$call](this,memo,property);
	});
	return memo;
},$inject,emptyArray,$$_array_prototype);
$$_store(function () {
	return this[o[$bind]][$apply](this,[$$null][$concat](o[$array](arguments)));
},$curry,emptyArray,$$_function_prototype);
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
$$_store(function (prototype) { // produces a new generic object constructor function
	var fn = function () {
		return o[$super_combine][$apply]($$null,[this][$concat](o[$array](arguments)));
	};
	fn[$prototype] = prototype;
  return fn;
},$constructor);
$$_store(function (memoBuilder, iterator) { // takes a function which returns a new memo and an iterator function. returns a function which wraps inject, passes it a new memo each times its called. see document.getFragmentWithNodes. this is the way you should use inject if the memo is not primitive
	return function () {
		return o[$array](arguments)[o[$inject]](memoBuilder(),iterator);
	};
},$injector);
(function () {

  var singleBuilder = function (prototype) { // takes a prototype and produces a function which takes a properties object and produces an instance
    return function (properties) {
      return new (o[$constructor](prototype))(properties);
    };
	};

	$$_store(o[$injector](function () {return singleBuilder({});},function (aSingleBuilder,aPrototype) {return singleBuilder(aSingleBuilder(aPrototype));}),$builder);

})();
$$_store(function (pattern,flags) {
	return new $$RegExp(pattern,flags);
},$regex);
$$_join = $$_array_prototype[$join];
$$_store(function () {
	return $$_join[$call](arguments,emptyString);
},$string);
$$_store(function (element,className) {
	element[$className] = element[$className][$replace](o[$regex](o[$string]('^(?!.*',className,'(\\s+|$))')),o[$string](className,' '));
	return element;
},$add_class_name,[$dom]);
$$_store(function (fn) {
	var that = this,
	length = that[$length],
	response = new $$Array(length), i = 0;

	for (; i < length; i++) {
		response[i] = fn[$call](that,that[i],i,that);
	}
	return response;

},$map,emptyArray,$$_array_prototype);

$$_store(function () { // try to use slice to get an array from an HTML elements collection. if this works, use slice for the array fn, else use an fn that iterates over the array like object and builds a new array incrementally. IE should get the second fn, others should get the first. generally.
	var testDiv = $$document[$createElement]('div');
	testDiv[$innerHTML] = 'a<d></b>';
	try {
		var $$_array = o[$array];
		$$_array(testDiv[$childNodes]);
		$$_store($$_array,$array,[$dom]);
	} catch (e) {
		$$_store(function (arrayLike) {
			return $$_array_prototype[o[$map]][$apply](arrayLike,function (a) {return a;});
		},$array,[$dom]);
	}
	return o[$dom][$array][$apply]($$null,arguments);
},$array,[$dom]);
$$_store(function (node) {
	node[$style][$opacity] = emptyString;
	node[$style][$filter] = 'alpha(opacity=)';
},$clear_opacity,[$dom]);
$$_store(function (id) {
	return $$document[$getElementById](id);
},$element,[$dom]);
$$_store(function (fn) {
	return function (obj) {
		return fn[$apply](obj,$$_slice[$call](arguments,1));
	};
},$take);
(function () {
	var join = o[$take]($$_join);
	$$_store(function (fn,memo) {
		memo = memo || {};
		return function () {
			var key = join(arguments);
			return memo[$hasOwnProperty](key) ? memo[key] : (memo[key] = fn[$apply](this,arguments));
		};
	},$memoize);
})();
$$_class_name_test_regex = o[$memoize](function (className) {
	return o[$regex](o[$string]('(^|\\s+)',className,'(\\s+|$)'));
});
$$_store(function (element,className) {
	return $$_class_name_test_regex(className)[$test](element[$className]);
},$has_class_name,[$dom]);

$$_store(function () {
	var getFragmentFromNodes = o[$injector](function () {return $$document.createDocumentFragment();},function (fragment,node) {
		fragment[$appendChild](node);
		return fragment;
	}),
	div = $$document[$createElement]('div');
	return $$_store(function (html) {
		div[$innerHTML] = html;
		return getFragmentFromNodes[$apply]($$null,o[$dom][$array](div[$childNodes]));
	},$fragment)[$apply](this,arguments);
},$fragment,[$dom]);
$$_store(function (html) {
	return o[$dom][$fragment](html)[$childNodes][0];
},$node,[$dom]);
$$_store(function (element,className) {
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
},$remove_class_name,[$dom]);
$$_store(function (node,value) {
	node[$style][$opacity] = value / 10;
	node[$style][$filter] = o[$string]('alpha(opacity=',value * 10,')');
},$set_opacity,[$dom]);
$$_store(function (obj) {
	var C = function () {};
	C[$prototype] = obj;
	return new C();
},$mask);
$$_store(function (propertyName,calculate) {
	return function () {
		var that = this;
		return that[$hasOwnProperty](propertyName) ? that[propertyName] : (that[propertyName] = calculate[$apply](that,arguments));
	};
},$object_memo);
$$_concat = $$_array_prototype[$concat];
(function () {

	$$_store(function () {
		var that = this,
		oldArguments = o[$array](arguments);
		return function () {
			return that[$apply](this,$$_concat[$call](o[$array](arguments),oldArguments));
		};
	},$rcurry,emptyArray,$$_function_prototype);

})();
$$_store(function (obj,fn) {
	for (var propertyName in obj) {
		fn(obj[propertyName],propertyName,obj);
	}
},$for_each);
$$_store(function () {
	throw new $$Error(o[$string][$apply]($$null,o[$array](arguments)));
},$error);
$$_period = '.';
$$_is_not_supported = ' is not supported';
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
},$request,[$remote]);
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
	},$ajax,[$remote]);

})();

$$_store(function (o) {
	return this[$replace](/{([^{}]*)}/g,
		function (a,b) {
			var r = o[b];
			return typeof r === $string || typeof r === $number ? r : a;
		}
	);
},$supplant,emptyArray,$$String[$prototype]);
})();
