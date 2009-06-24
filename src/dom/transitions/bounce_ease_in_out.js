//= require <dom/transitions/bounce_ease_out>
//= require <dom/transitions/bounce_ease_in>
(function () {
	var bounce_ease_out = o[$dom][$transitions][$bounce][$ease_out],
	bounce_ease_in = o[$dom][$transitions][$bounce][$ease_in];
	$$_store(function (t, b, c, d) {
		if (t < d/2) {return bounce_ease_in(t*2, 0, c, d) * 0.5 + b;}
		else {return bounce_ease_out(t*2-d, 0, c, d) * 0.5 + c*0.5 + b;}
	},$ease_in_out,[$dom,$transitions,$bounce]);
})();
