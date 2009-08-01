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

o.take = function (fn) {
	return function () {
		return fn.apply(arguments[0],Array.prototype.slice.call(arguments,1));
	};
};

o.store = function (global,name,fn) {
	o[name] = o.take(fn);
	var qname = o.qname(name);
	global.prototype[qname] = fn;
	o[name].toString = function () {return qname;};
};
