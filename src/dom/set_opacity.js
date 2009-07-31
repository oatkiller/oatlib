//= require <dom/reference>
//= require <string>

(function () {
	var fn = function (node) {
		return (fn = o.dom.set_opacity = node.filters ? function (node,value) {
			return node.style.filter = o.string('alpha(opacity=',value * 10,')');
		} : function (node,value) {
			return node.style.opacity = value / 10;
		}).apply(this,arguments);
	};
	o.dom.set_opacity = function () {
		return fn.apply(this,arguments);
	};
})();
