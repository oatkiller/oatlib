//= require <dom/event/reference>
(o.dom.event.setup_get_button = function () {
	var fn = function (e) {
		return (fn = e.which ?  function (e) {
			return e.which === 3 ? 'right' : 'left';
		} : function (e) {
			return e.button === 2 ? 'right' : 'left';}).apply(this,arguments);
	};
	o.dom.event.get_button = function (e) {
		return fn.apply(this,arguments);
	};
})();
