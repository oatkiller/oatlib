tests.string = [
	{
		name: 'string',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test string': function () {
			Assert.areSame('abcd',o.string('a','b','c','d'),'string failed');
		}
	}
];
