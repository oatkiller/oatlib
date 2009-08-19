//= require <dom/reference>
//= require <first_result>
//= require <curry>
//= require <dom/array>

o.dom.array_find = function (iterate,node,test) {
	var callee = arguments.callee;
	var result = test.call(this,node);
	if (result) {
		return node;
	}
	var nodes = iterate(node);
	var array_of_nodes = o.dom.array(nodes);
	var fn = function (descendant_node) {
		return callee(iterate,descendant_node,test);
	};
	return array_of_nodes[o.first_result](fn);
};
