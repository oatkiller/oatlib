tests.core = [
	{
		name: 'core',
		'test core': function () {
			var gotThere = false;
			oatlib(function (o) {
				Assert.areSame(o,oatlib);
				gotThere = true;
			});
			Assert.isTrue(gotThere);
		}
	}
];
