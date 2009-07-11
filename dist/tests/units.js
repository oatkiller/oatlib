tests.core = [
	{
		name: 'core',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test core': function () {
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
			a = 'a',
			b = 'b',
			getName = function (a,b) {return this.name + a + b;};
			Assert.areSame(myObj.name + a + b,getName[o.bind](myObj,a)(b),'bind failed');
		}
	}
];
tests.builder = [
	{
		name: 'builder',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test builder': function () {
			var kitten = o.builder({
				type: 'cat',
				age: 'young'
			});
			var myKitten = kitten({
				color: 'grey',
				name: 'leroy'
			});
			Assert.isTrue(myKitten.hasOwnProperty('color'),'got instance property');
			Assert.isTrue(myKitten.hasOwnProperty('name'),'got instance property');
			Assert.isFalse(myKitten.hasOwnProperty('type'),'didnt set prototype as instance property');
			Assert.isTrue('type' in myKitten,'got a prototype property');
		},
		'test recursive builder': function () {
			var animal = o.builder({
				eat: function () {}
			});
			var mamal = o.builder(animal({sleep: function () {}}));
			var robert = mamal({name: 'robert'});
			Assert.isTrue(robert.hasOwnProperty('name'),'name');
			Assert.isTrue('eat' in robert,'eat');
			Assert.isTrue('sleep' in robert,'sleep');
		},
		'test multiple builder': function () {
			var mamal = o.builder({
				eat: function () {}
			},{sleep: function () {}});
			var robert = mamal({name: 'robert'});
			Assert.isTrue(robert.hasOwnProperty('name'),'name');
			Assert.isTrue('eat' in robert,'eat');
			Assert.isTrue('sleep' in robert,'sleep');
		},
		'test multiple builder reverse style': function () {
			var mamal = o.builder({sleep: function () {}},{
				eat: function () {}
			});
			var robert = mamal({name: 'robert'});
			Assert.isTrue(robert.hasOwnProperty('name'),'name');
			Assert.isTrue('eat' in robert,'eat');
			Assert.isTrue('sleep' in robert,'sleep');
		}
	}
];
tests.call_once = [
	{
		name: 'call_once',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test call_once calls': function () {
			var count = 0,
			do_count = o.call_once(function () {
				count++;
			});
			do_count();
			Assert.areSame(1,count,'didnt call');
			do_count();
			Assert.areSame(1,count,'called too many times'); }
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
			var add = function (a,b,c) {return a + b + c;},
			add4 = add[o.curry](4);
			Assert.areSame(7,add4(1,2),'curry failed :(');
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
				Assert.areSame(this.length,this[this.length - 1]);
			});
			Assert.isTrue(otherOne.length === 4);
		}
	}
];

tests.error = [
	{
		name: 'error',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		_should: {
			error: {
				'test that error throws an error?': true
			}
		},
		'test that error throws an error?': function () {
			o.error('nubs');
		}
	}
];

tests.each = [
	{
		name: 'every',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test every': function () {
			var otherOne = [];
			var answer = [1,true,'yes',undefined][o.every](function (a) {return a;});
			Assert.isFalse(answer);
			answer = [1,true,'yes',2][o.every](function (a) {return a;});
			Assert.isTrue(answer);
		}
	}
];
tests.each = [
	{
		name: 'every',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test every': function () {
			var answer = [
				{id: 1, value: false},
				{id: 2, value: false},
				{id: 3, value: true},
				{id: 4, value: false}
			][o.find](function (obj) {return obj.value;});
			Assert.areSame(answer.id,3);
		}
	}
];
tests.for_each = [
	{
		name: 'for_each',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test for_each': function () {
			var obj = {
				a: 1,
				b: 2,
				c: 3
			};
			o.for_each(obj,function (property,property_name,obj) {
				obj[property_name] = property + 1;
			});
			Assert.areSame(obj.a,2);
			Assert.areSame(obj.b,3);
			Assert.areSame(obj.c,4);
		}
	}
];

tests.get_flattened = [
	{
		name: 'get_flattened',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test getFlattened': function () {
			var source = [1,2,[3,4],[5],6],
			result = source[o.get_flattened](),
			expected_result = [1,2,3,4,5,6]
			i = 0,
			length = expected_result.length;
			Assert.areSame(result.length,expected_result.length);
			for (; i < length; i++) {
				Assert.areSame(result[i],expected_result[i]);
			}
		},
		'test getFlattened in take form': function () {
			var source = [1,2,[3,4],[5],6],
			result = o.get_flattened(source),
			expected_result = [1,2,3,4,5,6]
			i = 0,
			length = expected_result.length;
			Assert.areSame(result.length,expected_result.length);
			for (; i < length; i++) {
				Assert.areSame(result[i],expected_result[i]);
			}
		}
	}
];

tests.get_object_property = [
	{
		name: 'get_object_property',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test get_object_property': function () {
			var obj = {
				name: 'robert'
			};
			Assert.areSame(o.get_object_property('name',obj),obj.name);
		}
	}
];

tests.get_once = [
	{
		name: 'get_once',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test get_once': function () {
			var count = 0,
			proto = {
				get_it: o.get_once('get_it',function () {
					count++;
					return 1;
				})
			},
			C = function () {
			},
			my_c;
			C.prototype = proto;
			my_c = new C();
			Assert.areSame(count,0);
			Assert.areSame(1,my_c.get_it());
			Assert.areSame(count,1);
			Assert.areSame(1,my_c.get_it());
			Assert.areSame(count,1);
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
			Assert.areSame(o.inject([2,2,2],1,function (memo,a) {return memo * a;}),8);
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
tests.invoke = [
	{
		name: 'invoke',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test invoke': function () {
			var count = 0,
			fn = function () {
				count++;
			};
			Assert.areSame(count,0);
			o.invoke(fn);
			Assert.areSame(count,1);
			o.invoke(fn);
			Assert.areSame(count,2);

		}
	}
];

tests.last = [
	{
		name: 'last',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test last': function () {
			Assert.areSame([1,2,3][o.last](),3);
			Assert.areSame(o.last([1,2,3]),3);
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
tests.memoize = [
	{
		name: 'newo.memoize',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test new o.memoize basic usage': function () {
			var total = 0,
			getDouble = o.memoize(function (value) {
				total += 1;
				return value * 2;
			});

			getDouble(1);
			getDouble(1);
			getDouble(1);
			Assert.areSame(1,total);
			getDouble(2);
			getDouble(3);
			getDouble(4);
			Assert.areSame(4,total);
		},
		'test new o.memoize, with invalidateKey': function () {
			var total = 0,
			memo = {},
			getDouble = function (value) {
				total += 1;
				return value * 2;
			}[o.memoize](memo);

			getDouble(1);
			getDouble(1);
			getDouble(1);
			Assert.areSame(1,total);
			delete memo[1];
			getDouble(1);
			Assert.areSame(2,total);

		},
		'test new o.memoize, with multiple parameter': function () {
			var total = 0,
			add = o.memoize(function (value1,value2) {
				total += 1;
				return value1 + value2;
			});

			add(1,2);
			add(1,3);
			add(1,4);
			Assert.areSame(3,total);
			add(1,2);
			add(1,3);
			add(1,4);
			Assert.areSame(3,total);
		},
		'test new o.memoize with object param which has a toString method': function () {
			var total = 0,
			process = o.memoize(function (anObject) {
				total += 1;
				return;
			});

			var AnObject = function (name) {
				this.name = name;
			};
			AnObject.prototype.toString = function () {
				return this.name;
			};

			process(new AnObject('flanbart'));
			process(new AnObject('flanbart'));
			process(new AnObject('flanbart'));
			Assert.areSame(1,total);
			process(new AnObject('olberg'));
			process(new AnObject('tresdleton'));
			process(new AnObject('cranble'));
			Assert.areSame(4,total);
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

tests.take = [
	{
		name: 'take',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test take': function () {

			var join = o.take(Array.prototype.join);

			Assert.areSame(join([1,2,3]),'1,2,3');

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
