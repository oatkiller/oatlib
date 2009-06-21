tests.trim = [
	{
		name: 'trim',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test trim': function () {
			Assert.areSame('123','      123     				'[o.trim]());
		}
	}
];

