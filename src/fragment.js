//= require <injector>
//= require <domarray>
o[$fragment] = function () {
	var getFragmentFromNodes = o[$injector](function () {return $$document.createDocumentFragment();},function (fragment,node) {
		fragment[$appendChild](node);
		return fragment;
	}),
	div = $$document[$createElement]('div');
	return (o[$fragment] = function (html) {
		div[$innerHTML] = html;
		return getFragmentFromNodes[$apply]($$null,div[$childNodes]);
	})[$apply](this,arguments);
};

