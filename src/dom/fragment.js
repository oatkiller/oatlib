//= require <dom/array>
//= require <injector>

$$_store(function () {
	var getFragmentFromNodes = o[$injector](function () {return $$document.createDocumentFragment();},function (fragment,node) {
		fragment[$appendChild](node);
		return fragment;
	}),
	div = $$document[$createElement]('div');
	return $$_store(function (html) {
		div[$innerHTML] = html;
		return getFragmentFromNodes[$apply]($$null,o[$dom][$array](div[$childNodes]));
	},$fragment)[$apply](this,arguments);
},$fragment,[$dom]);