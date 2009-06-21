tests.core = [
	{
		name: 'core',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test core': function () {
			Assert.areSame('http://oatlab.com/oatlib/v2'+':::'+'dumb',o('dumb'));
			Assert.areEqual('http://oatlab.com/oatlib/v2',o);
		}
	}
];
tests.array = [
	{
		name: 'array',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test array': function () {
			var ra = o.array({length: 3, '0': 'a', '1': 'b', '2': 'c'});
			Assert.isNotUndefined(ra.push);
		}
	}
];
tests.bind = [
	{
		name: 'bind',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test bind': function () {
			var myObj = {name: 'robert'},
			getName = function () {return this.name;};
			Assert.areSame(myObj.name,getName[o.bind](myObj)(),'bind failed');
		}
	}
];
tests.chop = [
	{
		name: 'chop',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test chop': function () {
			Assert.areSame([1,2,3,4][o.chop]().length,3);
		}
	}
];
tests.combine = [
	{
		name: 'combine',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test combine': function () {
			var newObj = o.combine({
				name: 'robert'
			},{
				profession: 'website person'
			});

			Assert.isTrue(newObj.hasOwnProperty('name') && newObj.hasOwnProperty('profession'),'combine sucks');
		}
	}
];
tests.constructor = [
	{
		name: 'constructor',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test constructor': function () {
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
		}
	}
];
tests.curry = [
	{
		name: 'curry',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test curry': function () {
			var add = function (a,b) {return a + b;},
			add4 = add[o.curry](4);
			Assert.areSame(5,add4(1),'curry failed :(');
		}
	}
];
tests.domarray = [
	{
		name: 'domarray',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test domArray': function () {
				var tmpDiv = document.createElement('div'), cells, myRa;
				tmpDiv.innerHTML = '<table><tbody><tr><td></td><td></td><td></td><td></td></tr></tbody></table>';
				cells = tmpDiv.childNodes[0].childNodes[0].childNodes[0].cells;
				myRa = o.domarray(cells);
				Assert.isNotUndefined(myRa.push);
		}
	}
];
tests.each = [
	{
		name: 'each',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test each': function () {
			var otherOne = [];
			[1,2,3,4][o.each](function (item) {
				otherOne.push(item);
			});
			Assert.isTrue(otherOne.length === 4);
		}
	}
];

tests.fragment = [
	{
		name: 'fragment',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test fragment': function () {
			var stuff = o.fragment('well<div>nope</div> har');
			Assert.areSame(3,stuff.childNodes.length,'fragment didnt get childnodes');
		}
	}
];
tests.indexOf = [
	{
		name: 'indexOf',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test indexOf': function () {
			Assert.areSame([1,2,3][o.indexOf](2),1);
		}
	}
];

tests.inject = [
	{
		name: 'inject',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test inject': function (){
			Assert.areSame([2,2,2][o.inject](1,function (memo,a) {return memo * a;}),8);
		}
	}
];
tests.functional = [
	{
		name: 'injector',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test injector': function () {
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
		}
	}
];
tests.map = [
	{
		name: 'map',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test map': function () {
			var original = [2,4,6],
			mapped = original[o.map](function (e) {
					return e * 2;
			});

			for (var i = 0, length = original.length; i < length; i++) {
				Assert.areSame(original[i] * 2,mapped[i]);
			}
		}
	}
];
tests.mask = [
	{
		name: 'mask',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test mask': function () {
			var obj = {
				name: 'woot'
			},
			masked = o.mask(obj);
			Assert.isTrue('name' in masked);
			Assert.isFalse(masked.hasOwnProperty('name'));

		}
	}
];
tests.node = [
	{
		name: 'node',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test node': function () {
			var myNode = o.node('something');
			Assert.areSame(3,myNode.nodeType,'node failed to get node');
		}
	}
];
tests.object_memo = [
	{
		name: 'object_memo',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test object_memo': function () {

			var myC = function () {},
			calcCount = 0;
			myC.prototype = {
				getIt: o.object_memo('myProperty',function () {
					calcCount++;
					return 'value';
				})
			},
			myObj = new myC();

			Assert.isFalse(myObj.hasOwnProperty('myProperty'));
			Assert.isFalse(myObj.hasOwnProperty('getIt'));

			Assert.areSame(myObj.getIt(),'value');
			Assert.areSame(calcCount,1);
			Assert.areSame(myObj.getIt(),'value');
			Assert.areSame(calcCount,1);
			Assert.isTrue(myObj.hasOwnProperty('myProperty'));

		}
	}
];

tests.rcurry = [
	{
		name: 'rcurry',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test rcurry': function () {

			var join = function () {
				return Array.prototype.join.call(arguments,' ');
			};

			Assert.areSame('.net sucks',join('.net','sucks'),'join failed');

			var sucks = join[o.rcurry]('sucks'),
			dotnetsucks = sucks('.net');

			Assert.areSame('.net sucks',dotnetsucks,'rcurry failed');
		}
	}
];
tests.string = [
	{
		name: 'string',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test string': function () {
			Assert.areSame('abcd',o.string('a','b','c','d'),'string failed');
		}
	}
];
tests.supplant = [
	{
		name: 'supplant',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test supplant': function () {
			Assert.areSame('a: 1, b: 2, c: 3','a: {a}, b: {b}, c: {c}'[o.supplant]({
				a: 1,
				b: 2,
				c: 3
			}));
		}
	}
];

tests.trim = [
	{
		name: 'trim',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test trim': function () {
			Assert.areSame('123','      123     				'[o.trim]());
		}
	}
];

tests.unique = [
	{
		name: 'unique',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test unique': function () {
			Assert.areSame([1,1,2,2,3,3,4,5][o.unique]().length,5);
		}
	}
];
