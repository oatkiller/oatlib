//= require <transition>
//= require <set_opacity>
//= require <combine>

(function () {

	var defaults = {
		start: 10,
		end: 0,
		timeInSeconds: .25,
		callback: function () {},
		aTransition: function (t, b, c, d) {
			return c*t/d + b;
		}
	};

	$$_store(function (node,options) {

		var settings = o[$combine]({},defaults,options),
		aTransition = settings.aTransition,
		start = settings.start,
		end = settings.end,
		timeInSeconds = settings.timeInSeconds,
		change = end - start;
		
		return o[$transition](function (soFar,total) {
			var value = aTransition(soFar,start,change,total);
			o[$set_opacity](node,value);
		},timeInSeconds,settings.callback);
	},$fade);

})();
