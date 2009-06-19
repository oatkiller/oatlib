tests.bind = [
	{
		name: 'bind',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test bind': function () {
			var myObj = {name: 'robert'},
			getName = function () {return this.name;};
			Assert.areSame(myObj.name,getName[o]().bind(myObj)(),'bind failed');
		}
	}
];
