//= require <dom/reference>
o.dom.is_tag_name = function (node,name) {
	return node.tagName !== undefined && node.tagName === name;
};
