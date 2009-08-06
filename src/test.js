o.dom.event.delegate({
	type: 'focus',
	test: function (node) {
		return node.tagName === 'INPUT';
	},
	action: function (e) {
		do_it(e.type);
	}
});

var do_it = function (title) {
	document.title = title;
};

o.dom.event.delegate({
	type: 'blur',
	test: function (node) {
		return node.tagName === 'INPUT';
	},
	action: function (e) {
		do_it(e.type);
	}
});
