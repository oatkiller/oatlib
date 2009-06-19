tests.curry = [
	{
		name: 'curry',
		testCurry: function () {
			oatlib(function (o) {
				var add = function (a,b) {return a + b;},
				add4 = o.curry(add,4);
				Assert.areSame(5,add4(1),'curry failed :(');
			});
		}
	}
];
