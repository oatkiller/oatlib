tests.string = [
	{
		name: 'string',
		'test string': function () {
			oatlib(function (o) {
				Assert.areSame('abcd',o.string('a','b','c','d'),'string failed');
			});
		}
	}
];
