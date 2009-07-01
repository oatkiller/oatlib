(function () {
var $$_qname, $$_store, $$window = window, $toString = 'toString', $$_language_prototypes_array, $$Array = Array, $prototype = 'prototype', $$_slice, $slice = 'slice', $array = 'array', $apply = 'apply', emptyString = '';
var namespace = 'http://oatlab.com/oatlib/v2',
qname_prefix = namespace + ':::',
o,
emptyArray = [];


$$_qname = function (name) {
	return qname_prefix + name;
};
$$_store = function (obj,name,payload,qualify) {
	return (obj[qualify ? $$_qname(name) : name] = payload);
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
})();
