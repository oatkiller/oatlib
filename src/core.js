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

o.array = function (array_like) {
	return Array.prototype.slice.call(array_like);
};

o.take = function (fn) {
	return function () {
		var args = o.array(arguments);
		return fn.apply(args.shift(),args);
	};
};

o.store = function (global,name,fn) {
	o[name] = o.take(fn);
	var qname = o.qname(name);
	global.prototype[qname] = fn;
	o[name].toString = function () {return qname;};
};

o.properties = {};
