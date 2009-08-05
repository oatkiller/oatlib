//= require <dom/node>
//= require <dom/remove>
//= require <supplant>
o.dom.set_css = function (css,media,type) {
	var node = o.dom.node('<style type="{type}" media="{media}">{css}</style>'[o.supplant]({
		type: type || 'text/css',
		media: media || 'screen',
		css: css
	}));
	document.body.appendChild(node);
	return function () {
		o.dom.remove(node);
	};
};
