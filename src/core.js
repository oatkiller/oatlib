var namespace = 'http://oatlab.com/oatlib/v2',
qname_prefix = namespace + ':::',
o,
empty_array = [];

o.qname = function (name) {
	return qname_prefix + name;
};
o.store = function (global,name,fn) {
	o[name] = o.take(fn);
	var qname = o.qname(name);
	global.prototype[qname] = fn;
	o[name].toString = o.K[o.curry](qname);
};

this[namespace] = o = {};
o.toString = function () {
	return namespace;
};
