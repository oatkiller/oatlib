//= require <dom/reference>
//= require <find>
//= require <curry>

o.dom.array_find = function (iterate,node,test) {
	return (test.call(this,node) && node) || o.dom.array(iterate(node))[o.find](arguments.callee[o.curry](iterate,test));
};

