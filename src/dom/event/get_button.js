//= require <dom/event/reference>
//var fn;
//$$_store($$_dom_event,$set_get_button,function () {
(function () {
	var fn = function (e) {
		return (fn = e[$which] ?  function (e) {
			return e[$which] === 3 ? $right : $left;
		} : function (e) {
			return e[$button] === 2 ? $right : $left;})[$apply](this,arguments);
	};
})();
//});

$$_dom_event[$get_button] = function (e) {
	return fn[$apply](this,arguments);
};
