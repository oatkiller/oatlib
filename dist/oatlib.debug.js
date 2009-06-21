(function () {
var $$_function_prototype, $$Function = Function, $prototype = 'prototype', $$_array_prototype, $$Array = Array, $$_bindings, $$_store, $$_slice, $slice = 'slice', $apply = 'apply', $array = 'array', $call = 'call', $concat = 'concat', $bind = 'bind', $chop = 'chop', $length = 'length', $each = 'each', $inject = 'inject', $$null = null, $curry = 'curry', $hasOwnProperty = 'hasOwnProperty', $combine = 'combine', $$true = true, $super_combine = 'super_combine', $$_concat, $constructor = 'constructor', $map = 'map', $$document = document, $createElement = 'createElement', $innerHTML = 'innerHTML', $$_array, $childNodes = 'childNodes', $domarray = 'domarray', $injector = 'injector', $appendChild = 'appendChild', $fragment = 'fragment', $indexOf = 'indexOf', $$_join, $join = 'join', $mask = 'mask', $node = 'node', $object_memo = 'object_memo', $rcurry = 'rcurry', $string = 'string', $replace = 'replace', $number = 'number', $supplant = 'supplant', $$String = String, $trim = 'trim', $push = 'push', $unique = 'unique', emptyString = '';
var emptyString = '',
namespace = 'http://oatlab.com/oatlib/v2',
o,
$$_function_prototype = $$Function[$prototype],
$$_array_prototype = $$Array[$prototype],
$$_bindings = [],
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

o.toString = function () {
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
},$bind,$$_function_prototype);
$$_store(function () {
	var that = this;
	that.length--;
	return that;
},$chop,$$_array_prototype);
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
$$_concat = $$_array_prototype[$concat];
$$_store(function (prototype) { // produces a new generic object constructor function
	var fn = function () {
		return o[$super_combine][$apply]($$null,[this][$concat](o[$array](arguments)));
	};
	fn[$prototype] = prototype;
  return fn;
},$constructor);
$$_store(function (fn) {
	var that = this,
	length = that[$length],
	response = new $$Array(length), i = 0;

	for (; i < length; i++) {
		response[i] = fn[$call](that,that[i],i,that);
	}
	return response;

},$map,$$_array_prototype);

$$_store(function () { // try to use slice to get an array from an HTML elements collection. if this works, use slice for the array fn, else use an fn that iterates over the array like object and builds a new array incrementally. IE should get the second fn, others should get the first. generally.
	var testDiv = $$document[$createElement]('div');
	testDiv[$innerHTML] = 'a<d></b>';
	try {
		var $$_array = o[$array];
		$$_array(testDiv[$childNodes]);
		$$_store($$_array,$domarray);
	} catch (e) {
		$$_store(function (arrayLike) {
			return $$_array_prototype[o[$map]][$apply](arrayLike,function (a) {return a;});
		},$domarray);
	}
	return o[$domarray][$apply]($$null,arguments);
},$domarray);
$$_store(function (memoBuilder, iterator) { // takes a function which returns a new memo and an iterator function. returns a function which wraps inject, passes it a new memo each times its called. see document.getFragmentWithNodes. this is the way you should use inject if the memo is not primitive
	return function () {
		return o[$array](arguments)[o[$inject]](memoBuilder(),iterator);
	};
},$injector);

$$_store(function () {
	var getFragmentFromNodes = o[$injector](function () {return $$document.createDocumentFragment();},function (fragment,node) {
		fragment[$appendChild](node);
		return fragment;
	}),
	div = $$document[$createElement]('div');
	return $$_store(function (html) {
		div[$innerHTML] = html;
		return getFragmentFromNodes[$apply]($$null,o[$domarray](div[$childNodes]));
	},$fragment)[$apply](this,arguments);
},$fragment);
$$_store(function (element) {

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

},$indexOf,$$_array_prototype);
$$_join = $$_array_prototype[$join];
$$_store(function (obj) {
	var C = function () {};
	C[$prototype] = obj;
	return new C();
},$mask);
$$_store(function (html) {
	return o[$fragment](html)[$childNodes][0];
},$node);
$$_store(function (propertyName,calculate) {
	return function () {
		var that = this;
		return that[$hasOwnProperty](propertyName) ? that[propertyName] : (that[propertyName] = calculate[$apply](that,arguments));
	};
},$object_memo);
(function () {

	$$_store(function () {
		var that = this,
		oldArguments = o[$array](arguments);
		return function () {
			return that[$apply](this,$$_concat[$call](o[$array](arguments),oldArguments));
		};
	},$rcurry,$$_function_prototype);

})();
$$_store(function () {
	return $$_join[$call](arguments,emptyString);
},$string);
$$_store(function (o) {
	return this[$replace](/{([^{}]*)}/g,
		function (a,b) {
			var r = o[b];
			return typeof r === $string || typeof r === $number ? r : a;
		}
	);
},$supplant,$$String[$prototype]);
$$_store(function () {
	return this[$replace](/^\s+|\s+$/g,emptyString);
},$trim,$$String[$prototype]);
$$_store(function () {
	var uniques = [];
	this[o[$each]](function (raElement) {
		uniques[o[$indexOf]](raElement) === -1 && uniques[$push](raElement);
	});
	return uniques;
},$unique,$$_array_prototype);
})();
