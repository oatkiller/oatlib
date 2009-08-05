//= require <dom/reference>
//= require <dom/array>
//= require <map>
//= require <get_flattened>
o.dom.find_descendants = function (node,test) {
	var result = [],
	callee = arguments.callee;
	test(node) && result.push(node);
	return node.firstChild === undefined ? result : result.concat(o.dom.array(node.childNodes)[o.map](function (node) {
		return callee(node,test);
	})[o.get_flattened]());
};
