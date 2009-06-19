tests.fragment = [
	{
		name: 'fragment',
		'test fragment': function () {
			oatlib(function (o) {
				var stuff = o.fragment('well<div>nope</div> har');
				Assert.areSame(3,stuff.childNodes.length,'fragment didnt get childnodes');
				// dont use this on tables, they got no innerHTML
			});
		}
	}
];
