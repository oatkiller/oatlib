//= require <remote/reference>
//= require <string>
//= require <for_each>

o.remote.query_string = function (obj) {
	var ra = [];
	o.for_each(obj,function (value,key) {
		ra.push(o.string(encodeURIComponent(key),'=',encodeURIComponent(value)));
	});
	return ra.join('&');
};
