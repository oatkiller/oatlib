//= require <dom/reference>
//= require <dom/transition>
//= require <dom/set_opacity>
//= require <dom/clear_opacity>
//= require <combine>

(function () {

	var defaults = {
		start: 10,
		end: 0,
		timeInSeconds: .25,
		callback: function (node) {
			o[$dom][$clear_opacity](node);
		},
		aTransition: function (t, b, c, d) {
			return c*t/d + b;
		}
	};

	$$_store($$_dom,$fade,function (node,options) {

		var settings = o[$combine]({},defaults,options),
		aTransition = settings.aTransition,
		start = settings.start,
		end = settings.end,
		timeInSeconds = settings.timeInSeconds,
		change = end - start;
		
		return o[$dom][$transition](function (soFar,total) {
			var value = aTransition(soFar,start,change,total);
			o[$dom][$set_opacity](node,value);
		},timeInSeconds,settings.callback[o[$curry]](node));
	});

})();
