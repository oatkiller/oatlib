//= require <dom/reference>
//= require <dom/array>
//= require <injector>

(function () {
	var create_element = $$document.createElement,
	fn = function () {
		var get_fragment_from_nodes = $$_injector(function () {return $$document.createDocumentFragment();},function (fragment,node) {
			fragment.appendChild(node);
			return fragment;
		}),
		div = $$document.createElement($div);
		return (fn = $$_dom_fragment = $$_dom.fragment = function (html) {
			div.innerHTML = html;
			return get_fragment_from_nodes.apply($$null,$$_dom_array(div.childNodes));
		}).apply(this,arguments);
	};

	$$_dom_fragment = $$_dom.fragment = function () {
		return fn.apply(this,arguments);
	};
})();
