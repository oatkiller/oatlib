//= require <hasOwnProperty>
//= require <take>
//= require <is_array>

var my_break = {},
method_name = 'each',
qname = o.qname(method_name),
array_version = function (iterator) {
	for (var i = 0; i < this.length; i++) {
		if (iterator.call(this,this[i],i,this) === my_break) {
			break;
		}
	}
	return this;
},
object_version = function (iterator) {
	for (var property_name in this) {
		if (o.hasOwnProperty(this,property_name) && iterator.call(this,this[property_name],property_name,this) === my_break) {
			break;
		}
	}
	return this;
};
// o.store(Array,'each' for tags
o.store(Array,method_name,array_version);
o[method_name] = o.take(function () {
	return o.is_array(this) || this.length !== undefined && this.length - 1 in this ? array_version.apply(this,arguments) : object_version.apply(this,arguments);
});
o[method_name].toString = function () {
	return qname;
};
o.each_break = my_break;
