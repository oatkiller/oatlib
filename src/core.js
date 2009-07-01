var namespace = 'http://oatlab.com/oatlib/v2',
qname_prefix = namespace + ':::',
o,
emptyArray = [];

// $$_store($$_language_prototypes_array,$each,fn,$$true);
// $$_store($$_o_dom_event,$add_listener,fn);

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
