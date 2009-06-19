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
tests.inject = [
	{
		name: 'inject',
		setUp: function () {},
		tearDown: function () {},
		testInject: function (){
			oatlib(function (o) {
				console.dir(o);
				Assert.areSame(o.inject(1,function (memo,a) {return memo * a;},2,2,2),8);
			});
		}
	}
];
