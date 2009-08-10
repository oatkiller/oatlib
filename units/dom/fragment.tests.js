test({
	name: 'fragment',
	'fragment': function () {
		var stuff = o.dom.fragment('well<div>nope</div> har');
		Assert.areSame(3,stuff.childNodes.length,'fragment didnt get childnodes');
		// dont use this on tables, they got no innerHTML
	}
	/* doesnt work in ie
	'style node': function () {
		var stuff = o.dom.fragment('<style></style>');
		Assert.areSame(1,stuff.childNodes.length,'fragment didnt get childnodes');
	}*/
});
