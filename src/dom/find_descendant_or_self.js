//= require <dom/reference>
//= require <dom/array_find>
//= require <curry>

$$_dom_find_descendant_or_self = $$_dom.find_descendant_or_self = $$_dom_array_find[o.curry](function (node) {
	return node.childNodes;
});
