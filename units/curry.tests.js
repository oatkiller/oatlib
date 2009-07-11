tests.curry = [
	{
		name: 'curry',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test curry': function () {
			var add = function (a,b,c) {return a + b + c;},
			add4 = add[o.curry](4);
			Assert.areSame(7,add4(1,2),'curry failed :(');
		}
	}
];
