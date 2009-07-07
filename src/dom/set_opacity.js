//= require <dom/reference>
//= require <string>
$$_dom_set_opacity = $$_dom[$set_opacity] = function (node,value) {
	node[$style][$opacity] = value / 10;
	node[$style][$filter] = $$_string('alpha(opacity=',value * 10,')');
};
