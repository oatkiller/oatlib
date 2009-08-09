//= require <remote/reference>
//= require <string>
//= require <inject>
o.remote.query_string_from_obj = function (obj) {
	return obj[o.inject]([],function (memo,pair) {
		memo.push(o.string(encodeURIComponent(pair.key),'=',encodeURIComponent(pair.value)));
		return memo;
	}).join('&');
};
