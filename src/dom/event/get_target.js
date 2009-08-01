//= require <dom/event/reference>
//= require <get_object_property>
//= require <curry>
(o.dom.event.setup_get_target = function () {

	var base_fn = function (property,e) {
		var target = e[property];
		// handle that one safari
		return target.nodeType !== 3 ? target : target.parentNode;
	},
	fn = function (e) {
		return (fn = o.dom.event.get_target =  e.target !== undefined ? base_fn[o.curry]('target') : base_fn[o.curry]('srcElement')).apply(this,arguments);
	};

	o.dom.event.get_target = function () {
		return fn.apply(this,arguments);
	};

})();
