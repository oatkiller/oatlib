//= require <dom/reference>
//= require <find>
//= require <curry>

$$_dom_array_find = $$_dom.array_find = function (iterate,node,test) {
	return (test.call(this,node) && node) || $$_dom_array(iterate(node))[o.find](arguments.callee[o.curry](iterate,test));
};

