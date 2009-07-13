//= require <dom/reference>
//= require <string>

(function () {
	var fn = function (node) {
		return (fn = $$_dom_set_opacity = $$_dom[$set_opacity] = node[$filters] ? function (node,value) {
			return node[$style][$filter] = $$_string('alpha(opacity=',value * 10,')');
		} : function (node,value) {
			return node[$style][$opacity] = value / 10;
		})[$apply](this,arguments);
	};
	$$_dom_set_opacity = $$_dom[$set_opacity] = function () {
		return fn[$apply](this,arguments);
	};
})();
