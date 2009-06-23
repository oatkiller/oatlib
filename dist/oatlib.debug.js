(function () {
var $$_function_prototype, $$Function = Function, $prototype = 'prototype', $$_array_prototype, $$Array = Array, $$_namespace, $length = 'length', $$_store, $toString = 'toString', $$RegExp = RegExp, $regex = 'regex', $$_join, $join = 'join', $call = 'call', $string = 'string', $className = 'className', $replace = 'replace', $add_class_name = 'add_class_name', $dom = 'dom', emptyString = '';
var namespace = 'http://oatlab.com/oatlib/v2',
o,
$$_function_prototype = $$Function[$prototype],
$$_array_prototype = $$Array[$prototype],
$$_namespace = function (ra) {
	var obj = o,
	propertyName;
	for (var i = 0, length = ra[$length]; i < length; i++) {
		propertyName = ra[i];
		obj = propertyName in obj ? obj[propertyName] : (obj[propertyName] = {});
	}
	return obj;
};
window['$$_namespace'] = $$_namespace;
(function () {
 	var qname,
	namespace_obj;
	$$_store = function (fn,name,namespace,obj) {
		namespace_obj = $$_namespace(namespace || []);
		if (obj) {
			obj[(qname = o(name))] = fn;
			namespace_obj[name] = qname;
		} else {
			namespace_obj[name] = fn;
		}
		return fn;
	};
})();
/*
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
*/

(function () {
 	var prefix = namespace + ':::';
	window[namespace] = o = function (name) {
		return prefix + name;
	};
})();

o[$toString] = function () {
	return namespace;
};
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
})();
