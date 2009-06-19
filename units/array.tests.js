tests.array = [
	{
		name: 'array',
		'test array': function () {
			oatlib(function (o) {
				var ra = oatlib.array({length: 3, '0': 'a', '1': 'b', '2': 'c'});
				Assert.isNotUndefined(ra.push);
			});
		}
	}
];
