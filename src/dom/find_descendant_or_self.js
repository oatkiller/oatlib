//= require <dom/reference>
//= require <dom/array_find>
//= require <curry>

o.dom.find_descendant_or_self = o.dom.array_find[o.curry](function (node) {
	return node.childNodes;
});
