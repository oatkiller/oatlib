tests.core = [
	{
		name: 'core',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test core': function () {
			Assert.areEqual('http://oatlab.com/oatlib/v2',o);
			var myRa = [];
			myRa[o]();
			Assert.areSame(myRa[o].currentObj,myRa);
			var myFn = [];
			myFn[o]();
			Assert.areSame(myFn[o].currentObj,myFn);
		}
	}
];
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
