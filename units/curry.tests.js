tests.curry = [
	{
		name: 'curry',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test curry': function () {
			var add = function (a,b) {return a + b;},
			add4 = add[o]().curry(4);
			Assert.areSame(5,add4(1),'curry failed :(');
		}
	}
];
