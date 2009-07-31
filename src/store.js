//= require <take>
o.store = function (global,name,fn) {
	o[name] = o.take(fn);
	var qname = o.qname(name);
	global.prototype[qname] = fn;
	o[name].toString = function () {return qname;};
};
