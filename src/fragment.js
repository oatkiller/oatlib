//= require <injector>
//= require <domarray>
$$_fragment = oatlib[$fragment] = function () {
	var getFragmentFromNodes = $$_injector(function () {return $$document.createDocumentFragment();},function (fragment,node) {
		fragment[$appendChild](node);
		return fragment;
	}),
	div = $$document[$createElement]('div');
	return ($$_fragment = oatlib[$fragment] = function (html) {
		div[$innerHTML] = html;
		return getFragmentFromNodes[$apply]($$null,$$_domarray(div[$childNodes]));
	})[$apply](this,arguments);
};

