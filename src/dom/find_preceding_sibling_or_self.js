//= require <dom/reference>
//= require <curry>
//= require <dom/find>
o.dom.find_preceding_sibling_or_self = o.dom.find[o.curry](function (node) {
	return node.previousSibling;
});
