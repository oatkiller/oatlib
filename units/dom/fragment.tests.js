test({
	name: 'fragment',
	'fragment': function () {
		var stuff = o.dom.fragment('well<div>nope</div> har');
		Assert.areSame(3,stuff.childNodes.length,'fragment didnt get childnodes');
		// dont use this on tables, they got no innerHTML
	}
});
