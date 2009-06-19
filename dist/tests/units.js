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
				var ra = o.array({length: 3, '0': 'a', '1': 'b', '2': 'c'});
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
tests.combine = [
	{
		name: 'combine',
		'test combine': function () {
			oatlib(function (o) {
				var newObj = o.combine({
					name: 'robert'
				},{
					profession: 'website person'
				});

				Assert.isTrue(newObj.hasOwnProperty('name') && newObj.hasOwnProperty('profession'),'combine sucks');
			});
		}
	}
];
tests.curry = [
	{
		name: 'curry',
		'test curry': function () {
			oatlib(function (o) {
				var add = function (a,b) {return a + b;},
				add4 = o.curry(add,4);
				Assert.areSame(5,add4(1),'curry failed :(');
			});
		}
	}
];
tests.domarray = [
	{
		name: 'domarray',
		'test domArray': function () {
			oatlib(function (o) {
				var tmpDiv = document.createElement('div'), cells, myRa;
				tmpDiv.innerHTML = '<table><tbody><tr><td></td><td></td><td></td><td></td></tr></tbody></table>';
				cells = tmpDiv.childNodes[0].childNodes[0].childNodes[0].cells;
				myRa = o.domarray(cells);
				Assert.isNotUndefined(myRa.push);
			});
		}
	}
];
tests.fragment = [
	{
		name: 'fragment',
		'test fragment': function () {
			oatlib(function (o) {
				var stuff = o.fragment('well<div>nope</div> har');
				Assert.areSame(3,stuff.childNodes.length,'fragment didnt get childnodes');
			});
		}
	}
];
tests.inject = [
	{
		name: 'inject',
		'test inject': function (){
			oatlib(function (o) {
				Assert.areSame(o.inject(1,function (memo,a) {return memo * a;},2,2,2),8);
			});
		}
	}
];
tests.functional = [
	{
		name: 'injector',
		'test injector': function () {
			oatlib(function (o) {
				var stringBuilder = o.injector(function () {return '';},function (a,b) {
					return a + b;
				});
				Assert.areSame('abc',stringBuilder('a','b','c'),'injector sucks');
				var musher = o.injector(function () {return {length: 0};},function (arrayLike,value) {
					arrayLike[arrayLike.length] = value;
					arrayLike.length += 1;
					return arrayLike;
				});
				var arrayLike = musher(0,1,2);
				Assert.areSame(3,arrayLike.length,'length','injector sucks');
				Assert.areSame(0,arrayLike[0],'injector sucks');
				Assert.areSame(1,arrayLike[1],'injector sucks');
				Assert.areSame(2,arrayLike[2],'injector sucks');
			});
		}
	}
];
tests.string = [
	{
		name: 'string',
		'test string': function () {
			oatlib(function (o) {
				Assert.areSame('abcd',o.string('a','b','c','d'),'string failed');
			});
		}
	}
];
tests.node = [
	{
		name: 'node',
		'test node': function () {
			oatlib(function (o) {
				var myNode = o.node('something');
				Assert.areSame(3,myNode.nodeType,'node failed to get node');
			});
		}
	}
];
tests.map = [
	{
		name: 'map',
		'test map': function () {
			Assert.fail('didnt test');
		}
	}
];
tests.mask = [
	{
		name: 'mask',
		'test mask': function () {
			Assert.fail('need test this');
		}
	}
];
tests.rcurry = [
	{
		name: 'rcurry',
		'test curry': function () {
			oatlib(function (o) {
				var join = function () {
					return Array.prototype.join.call(arguments,' ');
				};
				var sucks = o.rcurry(join,'sucks');
				dotnetsucks = sucks('.net');
				Assert.areSame('.net sucks',dotnetsucks);
			});
		}
	}
];
tests.constructor = [
	{
		name: 'constructor',
		'test constructor': function () {
			oatlib(function (o) {
				var C = o.constructor({
					destroy: function () {
						return 'nope';
					}
				});
				var me = new C({
					'name': 'robert',
					'profession': 'website person'
				});
				Assert.isTrue(me.hasOwnProperty('name'),'property object worked');
				Assert.isTrue(me.hasOwnProperty('profession'),'property object worked');
				Assert.isTrue(!me.hasOwnProperty('destroy') && me.destroy !== null,'prototype worked');
			});
		}
	}
];
