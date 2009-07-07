//= require <dom/reference>
//= require <dom/array>
//= require <injector>

var fn = function () {
	var getFragmentFromNodes = $$_injector(function () {return $$document.createDocumentFragment();},function (fragment,node) {
		fragment[$appendChild](node);
		return fragment;
	}),
	div = $$document[$createElement]($div);
	return (fn = $$_dom_fragment = $$_dom[$fragment] = function (html) {
		div[$innerHTML] = html;
		return getFragmentFromNodes[$apply]($$null,$$_dom_array(div[$childNodes]));
	})[$apply](this,arguments);
};

$$_dom_fragment = $$_dom[$fragment] = function () {
	return fn[$apply](this,arguments);
};
