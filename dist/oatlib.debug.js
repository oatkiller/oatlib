(function () {
var $$_function_prototype, $$Function = Function, $prototype = 'prototype', $$_array_prototype, $$Array = Array, $$_namespace, $length = 'length', $slice = 'slice', $$_store, $toString = 'toString', $$null = null, $call = 'call', $parentNode = 'parentNode', $find_ancestor_or_self = 'find_ancestor_or_self', $dom = 'dom', emptyString = '';
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
$$_store(function (node,fn) {
	var found = $$null;
	looking: do {
		if (fn[$call](node,node)) {
			found = node;
			break looking;
		}
	} while (node && (node = node[$parentNode]))
	return found;
},$find_ancestor_or_self,[$dom]);
})();
