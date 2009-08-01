//= require <dom/reference>
//= require <first_result>
//= require <curry>

o.dom.array_find = function (iterate,node,test) {
	var callee = arguments.callee;
	return (test.call(this,node) && node) || o.dom.array(iterate(node))[o.first_result](function (descendant_node) {
		return callee(iterate,descendant_node,test);
	});
};

