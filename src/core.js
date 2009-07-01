var namespace = 'http://oatlab.com/oatlib/v2',
qname_prefix = namespace + ':::';
o,
emptyArray = [];

// $$_store($$_language_prototypes_array,$each,fn,$$true);
// $$_store($$_o_dom_event,$add_listener,fn);

$$_qname = function (name) {
	return qname_prefix + name;
};
$$_store = function (obj,name,payload,qualify) {
	return (obj[qualify ? $$_qname(name) : name] = payload);
};
$$window[namespace] = o = function (name) {
	return prefix + name;
};
o[$toString] = function () {
	return namespace;
};
