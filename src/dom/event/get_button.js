//= require <dom/event/reference>
(function () {
	var fn = function (e) {
		return (fn = e[$which] ?  function (e) {
			return e[$which] === 3 ? $right : $left;
		} : function (e) {
			return e[$button] === 2 ? $right : $left;})[$apply](this,arguments);
	};
	$$_dom_event_get_button = $$_dom_event[$get_button] = function (e) {
		return fn[$apply](this,arguments);
	};
})();

