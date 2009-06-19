(function () {
var $call = 'call', $$_slice, $slice = 'slice', $$Array = Array, $prototype = 'prototype', $$_array, $array = 'array', $apply = 'apply', $$_bind, $bind = 'bind', $concat = 'concat', $$_inject, $inject = 'inject', $length = 'length', $$_curry, $curry = 'curry', $splice = 'splice', $$null = null, $$_combine, $combine = 'combine', $hasOwnProperty = 'hasOwnProperty', $$_super_combine, $super_combine = 'super_combine', $$true = true, $$_rcurry, $rcurry = 'rcurry', $$_map, $map = 'map', $$_domarray, $domarray = 'domarray', $$document = document, $createElement = 'createElement', $innerHTML = 'innerHTML', $childNodes = 'childNodes', $$_injector, $injector = 'injector', $$_fragment, $fragment = 'fragment', $appendChild = 'appendChild', $$_string, $string = 'string', $join = 'join', $$_node, $node = 'node', $$_mask, $mask = 'mask', $$_object_memo, $object_memo = 'object_memo', $$_trim, $trim = 'trim', $replace = 'replace', $$_constructor, $constructor = 'constructor', $$_supplant, $supplant = 'supplant', $number = 'number', emptyString = '';
oatlib = function (fn) {
	return fn[$call](this,oatlib);
};
var emptyString = '';
$$_slice = oatlib[$slice] = $$Array[$prototype][$slice];
$$_array = oatlib[$array] = function (arrayLike) {
	return $$_slice[$apply](arrayLike);
};
$$_bind = oatlib[$bind] = function (fn,obj) { // holds logic for curry
	var that = fn,
	oldArguments = $$_slice[$call](arguments,2);
	return function () {
		return that[$apply](obj,oldArguments[$concat]($$_array(arguments)));
	};
};
$$_inject = oatlib[$inject] = function (memo, iterator) { // takes a memo, an iterator function and any number of objects to be combined somehow. for each arg after iterator, iterator is called with the memo as its first param and the iterator as its second. ultimately the memo is returned. see unit tests for example
	for (var i = 2, length = arguments[$length]; i < length; i++) {
		memo = iterator(memo,arguments[i]);
	}
	return memo;
};
$$_curry = oatlib[$curry] = function (fn) {
	var args = $$_array(arguments);
	args[$splice](1,0,$$null);
	return $$_bind[$apply]($$null,args);
};
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
		return $$_inject[$apply]($$null,[resultObj,anIterator][$concat]($$_slice[$call](arguments,2)));
	};

	$$_combine = oatlib[$combine] = $$_curry(combinator,$$_curry(iterator,function (anObj,propertyName) { // curries combinator with a test to make sure the properties are on the subject argument directly, as opposed to being on its prototype
		return anObj[$hasOwnProperty](propertyName);
	}));

	$$_super_combine = oatlib[$super_combine] = $$_curry(combinator,$$_curry(iterator,function (anObj,propertyName) { // curries combinator with a test that takes every property, including ones on the subject arguments __proto__
		return $$true;
	}));

})();
(function () {

	$$_rcurry = oatlib[$rcurry] = function (fn) { // holds logic for curry
		var that = fn,
		oldArguments = $$_slice[$call](arguments,1);
		return function () {
			return that[$apply]($$null,$$_array(arguments)[$concat](oldArguments));
		};
	};

})();
$$_map = oatlib[$map] || function (arrayLike,fn) {
	var that = arrayLike, length = that[$length],
	response = new $$Array(length), i = 0;
	for (; i < length; i++) {
		response[i] = fn[$call](that,that[i],i,that);
	}
	return response;
};
$$_domarray = oatlib[$domarray] = function () { // try to use slice to get an array from an HTML elements collection. if this works, use slice for the array fn, else use an fn that iterates over the array like object and builds a new array incrementally. IE should get the second fn, others should get the first. generally.
	var testDiv = $$document[$createElement]('div');
	testDiv[$innerHTML] = 'asdf<div></div>asdf';
	try {
		$$_array(testDiv[$childNodes]);
		$$_domarray = oatlib[$domarray] = $$_array;
	} catch (e) {
		$$_domarray = oatlib[$domarray] = $$_rcurry($$_map,function (a) {return a;});
	}
	return $$_domarray[$apply]($$null,arguments);
};
$$_injector = oatlib[$injector] = function (memoBuilder, iterator) { // takes a function which returns a new memo and an iterator function. returns a function which wraps inject, passes it a new memo each times its called. see document.getFragmentWithNodes. this is the way you should use inject if the memo is not primitive
	var curriedInject = $$_curry($$_inject,memoBuilder(),iterator)
	return function () {
		return curriedInject[$apply]($$null,arguments);
	};
};
$$_fragment = oatlib[$fragment] = function () {
	var getFragmentFromNodes = $$_injector(function () {return $$document.createDocumentFragment();},function (fragment,node) {
		fragment[$appendChild](node);
		return fragment;
	}),
	div = $$document[$createElement]('div');
	return ($$_fragment = oatlib[$fragment] = function (html) {
		div[$innerHTML] = html;
		return getFragmentFromNodes[$apply]($$null,$$_domarray(div[$childNodes]));
	})[$apply](this,arguments);
};

$$_string = oatlib[$string] = function () {
	return $$_array(arguments)[$join](emptyString);
};
$$_node = oatlib[$node] = function (html) {
	return $$_fragment(html)[$childNodes][0];
};
$$_mask = oatlib[$mask] = function (obj) {
	var C = function () {};
	C[$prototype] = obj;
	return new C();
};
$$_object_memo = oatlib[$object_memo] = function (propertyName,calculate) {
	return function () {
		return this[$hasOwnProperty](propertyName) ? this[propertyName] : (this[propertyName] = calculate[$apply](this,arguments));
	};
};
$$_trim = oatlib[$trim] = function (s) {
	return s[$replace](/^\s+|\s+$/g,emptyString);
};
$$_constructor = oatlib[$constructor] = function (prototype) { // produces a new generic object constructor function
	var fn = function () {
    $$_inject[$apply]($$null,[this,$$_super_combine][$concat]($$_array(arguments)));
  };
	fn[$prototype] = prototype;
  return fn;
};
$$_supplant = oatlib[$supplant] = function (s,o) {
	return s[$replace](/{([^{}]*)}/g,
		function (a,b) {
			var r = o[b];
			return typeof r === $string || typeof r === $number ? r : a;
		}
	);
};
})();
