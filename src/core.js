var namespace = 'http://oatlab.com/oatlib/v2',
qname_prefix = namespace + ':::',
o,
//emptyString = '',
emptyArray = [];

// $$_store($$_language_prototypes_array,$each,fn,$$true);
// $$_store($$_o_dom_event,$add_listener,fn);

$$_qname = function (name) {
	return qname_prefix + name;
};
$$_store = function (obj,name,payload) {
	var qname = $$_qname(name);
	obj[qname] = payload;
	return (o[name] = qname);
};
this[namespace] = o = {};
o.toString = function () {
	return namespace;
};
