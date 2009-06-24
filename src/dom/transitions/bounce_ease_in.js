//= require <dom/transitions/bounce_ease_out>
(function () {
	var bounce_ease_out = o[$dom][$transitions][$bounce][$ease_out];
	$$_store(function (t, b, c, d) {
		return c - bounce_ease_out(d-t, 0, c, d) + b;
	},$ease_in,[$dom,$transitions,$bounce]);
})();
