//= require <dom/event/reference>
//= require <get_object_property>
//= require <curry>
(function () {

	var base_fn = function (property,e) {
		var target = e[property];
		return target[$nodeType] !== 3 ? target : target[$parentNode];
	},
	fn = function (e) {
		return (fn = e[$target] ? base_fn[o[$curry]]($target) : base_fn[o[$curry]]($srcElement))[$apply](this,arguments);
	};

	$$_store($$_dom_event,$get_target,function () {
		return fn[$apply](this,arguments);
	});

})();