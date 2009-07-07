//= require <dom/fragment>
$$_dom_node = $$_dom[$node] = function (html) {
	return $$_dom_fragment(html)[$childNodes][0];
};
