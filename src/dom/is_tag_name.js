//= require <dom/reference>
o.dom.is_tag_name = function (node,name) {
	return node.tagName && node.tagName === name;
};
