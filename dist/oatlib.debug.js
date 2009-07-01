(function () {
var $$_qname, $$_store, $$window = window, $toString = 'toString', $$_language_prototypes_array, $$Array = Array, $prototype = 'prototype', $$_slice, $slice = 'slice', $array = 'array', $apply = 'apply', $$_language_prototypes_function, $$Function = Function, $bind = 'bind', $call = 'call', $concat = 'concat', $$true = true, emptyString = '';
var namespace = 'http://oatlab.com/oatlib/v2',
qname_prefix = namespace + ':::',
o,
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
$$_language_prototypes_array = $$Array[$prototype];
$$_slice = $$_language_prototypes_array[$slice];
$$_store(o,$array,function (arrayLike) {
	return $$_slice[$apply](arrayLike);
});
$$_language_prototypes_function = $$Function[$prototype];
$$_store($$_language_prototypes_function,$bind,function (obj) { // holds the logic for curry
	var that = this,
	oldArguments = $$_slice[$call](arguments,1);
	return function () {
		return that[$apply](obj,oldArguments[$concat](o[$array](arguments)));
	};
},$$true);
})();
