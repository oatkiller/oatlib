//= require <dom/reference>
o.dom.clear_opacity = function (node) {
	return node.style.filter = node.style.opacity = empty_string;
};
