tests.bind = [
	{
		name: 'bind',
		'test bind': function () {
			oatlib(function (o) {
				var myObj = {name: 'robert'},
				getName = function () {return this.name;};
				Assert.areSame(myObj.name,o.bind(getName,myObj)(),'bind failed');
			});
		}
	}
];
