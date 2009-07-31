var namespace = 'http://oatlab.com/oatlib/v2',
qname_prefix = namespace + ':::',
o = {},
empty_array = [];

o.qname = function (name) {
	return qname_prefix + name;
};

this[namespace] = o;
o.toString = function () {
	return namespace;
};
