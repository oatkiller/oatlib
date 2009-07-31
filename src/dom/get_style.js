//= require <dom/reference>
(function () {
	var fn = function (node) {
		return (fn = o.dom.get_style = node.currentStyle ? function (node,style) {
			return node.currentStyle[style];
		} : function (node,style) {
			return document.defaultView.getComputedStyle(node,null).getPropertyValue(style);
		}).apply(this,arguments);
	};
	o.dom.get_style = function () {
		return fn.apply(this,arguments);
	};

})();
