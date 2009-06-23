tests.take = [
	{
		name: 'take',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test take': function () {

			var join = o.take(Array.prototype.join);

			Assert.areSame(join([1,2,3]),'1,2,3');

		}
	}
];
