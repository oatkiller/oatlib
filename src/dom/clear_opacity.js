//= require <dom/reference>
$$_dom[$clear_opacity] = function (node) {
	node[$style][$opacity] = emptyString;
	node[$style][$filter] = 'alpha(opacity=)';
};
