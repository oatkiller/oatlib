//= require <dom/reference>
(function () {
 	var fn = function (ancestor) {
		return (fn = o.dom.contains = ancestor.contains ? function (ancestor,descendant) {
			return ancestor.contains(descendant);
		} : function (ancestor,descendant) {
			return (ancestor && descendant && ancestor.compareDocumentPosition(descendant) & 16) !== 0;
		}).apply(this,arguments);
	};
	o.dom.contains = function () {
		return fn.apply(this,arguments);
	};
})();
