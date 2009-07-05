//= require <dom/event/reference>
var fn = function (e) {
	return (fn = e[$pageX] ?  function (e) {
		return {x: e[$pageX], y: e[$pageY]};
	} : function (e) {
		return {x: e[$clientX] + $$document[$body][$scrollLeft] + $$document[$documentElement][$scrollLeft],
			y: e[$clientY] + $$document[$body][$scrollTop] + $$document[$documentElement][$scrollTop]};
	})[$apply](this,arguments);
};

$$_dom_event[$get_mouse_coordinates] = function (e) {
	return fn[$apply](this,arguments);
};
