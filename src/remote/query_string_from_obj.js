//= require <remote/reference>
//= require <string>
//= require <reduce>
o.remote.query_string_from_obj = function (obj) {
	return obj[o.reduce](function (memo,pair) {
		memo.push(o.string(encodeURIComponent(pair.key),'=',encodeURIComponent(pair.value)));
		return memo;
	},[]).join('&');
};
