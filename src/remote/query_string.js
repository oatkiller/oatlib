//= require <remote/reference>
//= require <for_each>
//= require <string>
$$_remote_query_string = function (obj) {
	return obj[o.inject]([],function (memo,pair) {
		memo.push($$_string(encodeURIComponent(pair.key),'=',encodeURIComponent(pair.value)));
		return memo;
	}).join('&');
};
