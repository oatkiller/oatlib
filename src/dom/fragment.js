//= require <dom/reference>
//= require <dom/array>
//= require <reducer>

(function () {
	var fn = function () {
		var get_fragment_from_nodes = o.reducer(function () {return document.createDocumentFragment();},function (fragment,node) {
			fragment.appendChild(node);
			return fragment;
		}),
		div = document.createElement('div');
		return (fn = o.dom.fragment = function (html) {
			div.innerHTML = html;
			return get_fragment_from_nodes.apply(null,o.dom.array(div.childNodes));
		}).apply(this,arguments);
	};

	o.dom.fragment = function () {
		return fn.apply(this,arguments);
	};
})();
