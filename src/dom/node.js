//= require <dom/fragment>
o.dom.node = function (html) {
	return o.dom.fragment(html).childNodes[0];
};
