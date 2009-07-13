//= require <dom/reference>
(function () {
	var fn = function (node) {
		return (fn = $$_dom_clear_opacity = $$_dom[$clear_opacity] =  $opacity in node[$style] ? function (node) {
			return node[$style][$opacity] = emptyString;
		} : function (node) {
			return node[$style][$filter] = 'alpha(opacity=100)';
		})[$apply](this,arguments);
	};
	$$_dom_clear_opacity = $$_dom[$clear_opacity] = function (node) {
		return fn[$apply](this,arguments);
	};
})();
