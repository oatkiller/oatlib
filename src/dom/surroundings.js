//= require <dom/reference>
//= require <dom/find_preceding_sibling_or_self>
//= require <dom/find_following_sibling_or_self>
//= require <dom/isnt_whitespace_node>

o.dom.surroundings = function (node) {
	return {
		parent_node: node.parentNode,
		previous_sibling_node: o.dom.find_preceding_sibling_or_self(node.previousSibling,o.dom.isnt_whitespace_node),
		next_sibling_node: o.dom.find_following_sibling_or_self(node.nextSibling,o.dom.isnt_whitespace_node)
	};
};
