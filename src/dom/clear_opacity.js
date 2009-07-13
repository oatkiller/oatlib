//= require <dom/reference>
$$_dom_clear_opacity = $$_dom[$clear_opacity] = function (node) {
	return node[$style][$filter] = node[$style][$opacity] = emptyString;
};
