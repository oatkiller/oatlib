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

(function () {
 	var prefix = namespace + ':::';
	window[namespace] = o = function (name) {
		return prefix + name;
	};
})();

o[$toString] = function () {
	return namespace;
};
