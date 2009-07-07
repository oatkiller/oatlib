//= require <dom/reference>
//= require <dom/array>
//= require <injector>

var fn = function () {
	var getFragmentFromNodes = o[$injector](function () {return $$document.createDocumentFragment();},function (fragment,node) {
		fragment[$appendChild](node);
		return fragment;
	}),
	div = $$document[$createElement]('div');
	return (fn = function (html) {
		div[$innerHTML] = html;
		return getFragmentFromNodes[$apply]($$null,o[$dom][$array](div[$childNodes]));
	})[$apply](this,arguments);
};

$$_dom[$fragment] = function () {
	return fn[$apply](this,arguments);
};
