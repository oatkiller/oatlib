tests.core = [
	{
		name: 'core',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test core': function () {
			Assert.areSame('http://oatlab.com/oatlib/v2'+':::'+'dumb',o('dumb'));
			Assert.areEqual('http://oatlab.com/oatlib/v2',o);
		}
	}
];
