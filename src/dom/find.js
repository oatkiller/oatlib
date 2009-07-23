//= require <dom/reference>

$$_dom_find = $$_dom.find = function (iterate,node,test) {
	return (test.call(this,node) && node) || arguments.callee.call(this,iterate,iterate(node),test);
};
