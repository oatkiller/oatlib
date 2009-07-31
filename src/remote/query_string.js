//= require <remote/reference>
//= require <string>
o.remote.query_string = function (obj) {
	return obj[o.inject]([],function (memo,pair) {
		memo.push(o.string(encodeURIComponent(pair.key),'=',encodeURIComponent(pair.value)));
		return memo;
	}).join('&');
};
