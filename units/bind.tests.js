tests.bind = [
	{
		name: 'bind',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test bind': function () {
			var myObj = {name: 'robert'},
			a = 'a',
			b = 'b',
			getName = function (a,b) {return this.name + a + b;};
			Assert.areSame(myObj.name + a + b,getName[o.bind](myObj,a)(b),'bind failed');
		}
	}
];
