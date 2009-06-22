//= require <transitions/core>
//= require <namespace>
//= require <transitions/bounce_ease_out>
(function () {
	var bounce_ease_out = o[$transitions][$bounce][$ease_out];
	o[$namespace]($$_transitions,[$bounce])[$ease_in] = function (t, b, c, d) {
		return c - bounce_ease_out(d-t, 0, c, d) + b;
	};
})();
