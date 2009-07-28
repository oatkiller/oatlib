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
tests.filter = [
	{
		name: 'filter',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test filter': function () {
			var results = [1,2,3,4][o.filter](function (a) {return a % 2;});
			Assert.areSame(results.length,2);
			Assert.areSame(results[0],1);
			Assert.areSame(results[1],3);
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
			Assert.areSame(o.get_object_property(obj,'name'),obj.name);
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

tests.add_class_name = [
	{
		name: 'addClassName',
		setUp: function () {
			this.element = {
				className: ''
			};
			o = window['http://oatlab.com/oatlib/v2'];
		},
		testNoClassName: function () {
			o.dom.add_class_name(this.element,'foo');
			Assert.areSame(this.element.className,'foo');
		},
		testSomeClassNames: function () {
			this.element.className = 'asdew asdf duck';
			o.dom.add_class_name(this.element,'foo');
			Assert.areSame('foo asdew asdf duck',this.element.className);
		},
		testExistsAlready: function () {
			this.element.className = 'foo asdf';
			o.dom.add_class_name(this.element,'foo');
			Assert.areSame('foo asdf',this.element.className);
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
				myRa = o.dom.array(cells);
				Assert.isNotUndefined(myRa.push);
		}
	}
];
tests.clear_opacity = [
	{
		name: 'clear_opacity',
		setUp: function () {
			o = window['http://oatlab.com/oatlib/v2'];
		},
		testitworks: function () {
			var node = {
				style: {
					opacity: 'blah'
				}
			};
			o.dom.clear_opacity(node);
			Assert.areSame(node.style.opacity,'');
		},
		testitworksonwindows: function () {
			var node = {
				style: {
					filter: 'asdf'
				}
			};
			o.dom.clear_opacity(node);
			Assert.areSame(node.style.filter,'alpha(opacity=)');
		}
	}
];
tests.contains = [
	{
		name: 'contains',
		setUp: function () {
			o = window['http://oatlab.com/oatlib/v2'];
		},
		testitworks: function () {
			var my_div = document.createElement('div');
			my_div.innerHTML = '<span></span>';
			var my_span = my_div.firstChild;
			Assert.isTrue(o.dom.contains(my_div,my_span));
		}
	}
];
tests.dom_event_delegate = [
	{
		name: 'filter_delegates_by_descendant',
		setUp: function () {
			o = window['http://oatlab.com/oatlib/v2'];
		},
		'testworks': function () {
			var my_div = document.createElement('div');
			my_div.innerHTML = '<span><em></em></span>';
			var results = o.dom.event.filter_delegates_by_descendant([
				{ancestor: my_div},
				{ancestor: document.body}
			],my_div.firstChild.firstChild);
			Assert.areSame(results[0].ancestor,my_div);
			Assert.areSame(results.length,1);
		}
	},
	{
		name: 'consider_delegates_for_node',
		setUp: function () {
			o = window['http://oatlab.com/oatlib/v2'];
		},
		'testworks': function () {
		}
	}
];
tests.get_abstraction = [
	{
		name: 'get_abstraction',
		setUp: function () {
			o = window['http://oatlab.com/oatlib/v2'];
		},
		'test that get_abstraction returns an obj with the passed obj as its .event and that it has all the objs in its roto that its supposed to': function () {
			var e = {
				its: 'me'
			},
			abstraction = o.dom.event.get_abstraction(e);
			Assert.isTrue('get_event' in abstraction);
			Assert.isFalse(abstraction.hasOwnProperty('get_event'))
			Assert.areSame(abstraction.get_event(),e);
		}
	}
];
tests.get_button_pressed = [
	{
		name: 'get_button',
		setUp: function () {
			o = window['http://oatlab.com/oatlib/v2'];
		},
		'test get_button should return right if which is set to 3': function () {
			var e = {
				which: 3,
			 	button: 0
			};
			Assert.areSame(o.dom.event.get_button(e),'right');
		},
		'test get_button should return left if which is set to not 3': function () {
			var e = {
				which: 2,
			 	button: 0
			};
			Assert.areSame(o.dom.event.get_button(e),'left');
		}/*,
		'test get_button should return right if button is set to 2 and which isnt exist': function () {
			var e = {
			 	button: 2
			};
			Assert.areSame(o.dom.event.get_button(e),'right');
		},
		'test get_button should return left if button is set to not 2 and which isnt exist': function () {
			var e = {
			 	button: 1
			};
			Assert.areSame(o.dom.event.get_button(e),'left');
		}*/
	}
];
tests.get_event = [
	{
		name: 'get_event',
		setUp: function () {
			o = window['http://oatlab.com/oatlib/v2'];
		},
		'test get_event should return event if passed one': function () {
			var obj = {};
			var fn = o.dom.event.get_event;
			var result = fn(obj);
			result = fn(obj);
			Assert.areSame(result,obj);
		}/*, // makes it testable
		'test get_event should return window.event else': function () {
			var fn = o.dom.event.get_event,
			obj = {};
			window.event = obj;
			Assert.areSame(obj,window.event,'didnt set window.event');
			var result = fn();
			Assert.areSame(result,window.event);
		}*/
	}
];
tests.get_key = [
	{
		name: 'get_key',
		setUp: function () {
			o = window['http://oatlab.com/oatlib/v2'];
		},
		'test get_key returns keyCode for key if avail': function () {
			var obj = {keyCode: 1, which: 2};
			var fn = o.dom.event.get_key;
			var result = fn(obj).key;
			Assert.areSame(result,1);
		},
		'test get_key returns which for key if keyCode is not avail': function () {
			var obj = {which: 2};
			var fn = o.dom.event.get_key;
			var result = fn(obj).key;
			Assert.areSame(result,2);
		}
	}
];
tests.get_mouse_coordinates_pressed = [
	{
		name: 'get_mouse_coordinates',
		setUp: function () {
			o = window['http://oatlab.com/oatlib/v2'];
		},
		'test get_mouse_coordinates should return pageX and pageY if they are on the e': function () {
			var e = {
				pageX: 3,
			 	pageY: 2,
			 	clientX: 9,
			 	clientY: 10
			},
			result = o.dom.event.get_mouse_coordinates(e);
			Assert.areSame(result.x,3);
			Assert.areSame(result.y,2);
		}
	}
];
tests.get_related_mouseover_target = [
	{
		name: 'get_related_mouseover_target',
		setUp: function () {
			o = window['http://oatlab.com/oatlib/v2'];
		},
		'test get_related_mouseover_target should return fromElement if relatedTarget isnt avail': function () {
			var fromElement = {},
			e = {fromElement: fromElement},
			fn = o.dom.event.get_related_mouseover_target,
			result = fn(e);
			Assert.areSame(result,fromElement);
		}/*//, cause of cacheing, second test will always fail
		'test get_related_mouseover_target should return relatedTarget if avail': function () {
			var relatedTarget = {},
			fromElement = {},
			e = {relatedTarget: relatedTarget, fromElement: fromElement},
			fn = o.dom.event.get_related_mouseover_target,
			result = fn(e);
			Assert.areSame(relatedTarget,result);
		}*/
	}
];
tests.get_related_mouseout_target = [
	{
		name: 'get_related_mouseout_target',
		setUp: function () {
			o = window['http://oatlab.com/oatlib/v2'];
		},
		'test get_related_mouseout_target': function () {
		}
	}
];
tests.get_target = [
	{
		name: 'get_target',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test get_target should return e.target if it exists': function () {
			var target = {},
			obj = {target: target},
			fn = o.dom.event.get_target,
			result = fn(obj);
			result = fn(obj);
			Assert.areSame(result,target);
		}
	}
];
tests.dom_find = [
	{
		name: 'dom_find',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test should return node if test of node returns true': function () {
			var node = {},
			test = function () {return true;};
			Assert.areSame(o.dom.find(function(){},node,test),node);

		}
	}
];
tests.find_ancestor_or_self = [
	{
		name: 'find_ancestor_or_self',
		setUp: function () {
			o = window['http://oatlab.com/oatlib/v2'];
		},
		testitworks: function () {
			var my_div = document.createElement('div');
			my_div.innerHTML = '<span></span>';
			var my_span = my_div.firstChild;
			Assert.isFalse(o.dom.find_ancestor_or_self(my_span,function (n) {
				return false;
			},my_div));
		},
		'test ancestor isnt checked': function () {
			var my_div = document.createElement('div');
			my_div.innerHTML = '<span><em></em></span>';
			var my_span = my_div.firstChild,
			my_em = my_span.firstChild;
			Assert.isFalse(o.dom.find_ancestor_or_self(my_em,function (n) {
				return n === my_div;
			},my_div));
		},
		'test checks self': function () {
			var my_div = document.createElement('div');
			my_div.innerHTML = '<span><em></em></span>';
			var my_span = my_div.firstChild,
			my_em = my_span.firstChild;
			Assert.areSame(o.dom.find_ancestor_or_self(my_em,function (n) {
				return n === my_em;
			},my_div),my_em);
		}
	}
];
tests.fragment = [
	{
		name: 'fragment',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test fragment': function () {
			var stuff = o.dom.fragment('well<div>nope</div> har');
			Assert.areSame(3,stuff.childNodes.length,'fragment didnt get childnodes');
		}
	}
];
tests.get_text_content = [
	{
		name: 'get_text_content',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test get_text_content': function () {
				var tmpDiv = document.createElement('div'), cells, myRa;
				tmpDiv.innerHTML = '<table><tbody><tr><td></td><td></td><td></td><td></td></tr></tbody></table>';
				cells = tmpDiv.childNodes[0].childNodes[0].childNodes[0].cells;
				myRa = o.dom.array(cells);
				Assert.isNotUndefined(myRa.push);
		}
	}
];
tests.has_class_name = [
	{
		name: 'has_class_name',
		setUp: function () {
			this.element = document.createElement('div');
			document.body.appendChild(this.element);
			o = window['http://oatlab.com/oatlib/v2'];
		},
		tearDown: function () {
			try {
				document.body.removeChild(this.element);
			} catch (e) {}
		},
		'test element with several classes, finding first class': function () {
			this.element.className = 'foo bar gaz lulz';
			Assert.isTrue(o.dom.has_class_name(this.element,'foo'));
		},
		'test element with one class, finding it': function () {
			this.element.className = 'bar';
			Assert.isTrue(o.dom.has_class_name(this.element,'bar'));
		},
		'test element with several classes, finding second class': function () {
			this.element.className = 'bar lulz goat';
			Assert.isTrue(o.dom.has_class_name(this.element,'lulz'));
		},
		'test element with a classname, not finding a classname which is a substring of the elements class': function () {
			this.element.className = 'asdfnubzasdf';
			Assert.isFalse(o.dom.has_class_name(this.element,'nubz'));
		}
	}
];

tests.is_tag_name = [
	{
		name: 'is_tag_name',
		setUp: function () {
			o = window['http://oatlab.com/oatlib/v2'];
		},
		'testit': function () {

			Assert.isTrue(o.dom.is_tag_name({
				tagName: 'nubs'
			},'nubs'));
		}
	}
];

tests.node = [
	{
		name: 'node',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test node': function () {
			var myNode = o.dom.node('something');
			Assert.areSame(3,myNode.nodeType,'node failed to get node');
		}
	}
];
tests.remove_class_name = [
	{
		name: 'removeClassName',
		setUp: function () {
			o = window['http://oatlab.com/oatlib/v2'];
			this.element = document.createElement('div');
			document.body.appendChild(this.element);
		},
		tearDown: function () {
			try {
				document.body.removeChild(this.element);
			} catch (e) {}
		},
		testRemoveClassName: function () {
			var myElement;
			var setupElement = function () {
				myElement = document.createElement('div');
				myElement.className = 'foo bar woot';
			};

			setupElement();
			o.dom.remove_class_name(myElement,'foo');
			Assert.areSame('bar woot',myElement.className,'1');
			setupElement();
			o.dom.remove_class_name(myElement,'bar');
			Assert.areSame('foo woot',myElement.className,'2');
			setupElement();
			o.dom.remove_class_name(myElement,'woot');
			Assert.areSame('foo bar',myElement.className,'3');
		}
	}
];
(function () {
	tests['xmlhttp-helper'] = [
		{
			name: 'xmlhttp-helper',
			setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
			_should: {
				error: {
				},
				ignore: {
					testRequestHeaders: true,
					testPost: true
				}
			},
			setUp: function () {
			},
			tearDown: function () {
			},
			testBasic: function () {
				var that = this;
				o.remote.request({
					url: 'ajaxtest.xml',
					onComplete: function (responseObj) {
						Assert.isTrue(responseObj !== null && responseObj !== false,'no response obj');
						that.resume();
					}
				});
				this.wait();
			},
			testRequestHeaders: function () {
				var that = this;
				o.remote.request({
					url: 'ajaxtest.xml',
					headers: {
						'Accept': 'text/*, text/html, text/html;level=1, */*'
					},
					onComplete: function (responseObj) {
						Assert.isTrue(responseObj !== null && responseObj !== false,'no response obj');
						that.resume();
					}
				});
				this.wait();
			},
			testAbort: function () {
				var that = this;
				var myRequest = o.remote.request({
					url: 'ajaxtest.xml',
					onComplete: function (responseObj) {
						Assert.fail('failed to abort');
						that.resume();
					}
				});
				myRequest.abort();
			},
			testStatusText: function () {
				var that = this;
				var myRequest = o.remote.request({
					url: 'ajaxtest.xml',
					onComplete: function (responseObj) {
						Assert.areSame(responseObj.statusText,'OK','failed to get a good status txt');
						that.resume();
					}
				});
				this.wait();
			},
			testOnSuccess: function () {
				var that = this;
				var myRequest = o.remote.request({
					url: 'ajaxtest.xml',
					onSuccess: function (responseObj,options) {
						that.resume();
						delete options.onComplete;
					},
					onComplete: function () {
						Assert.fail('completed before success');
					}
				});
				this.wait();
			},
			testOnFailure: function () {
				var that = this;
				var myRequest = o.remote.request({
					url: 'asdfasdfasdfa',
					onFailure: function (responseObj,options) {
						that.resume();
						delete options.onComplete;
					},
					onComplete: function () {
						Assert.fail('completed before success');
					}
				});
				this.wait();
			},
			testPost: function () {
				var that = this;
				var myRequest = o.remote.request({
					url: 'ajaxtest.xml',
					post: 'some vars, etc',
					onSuccess: function (responseObj) {
						that.resume();
					}
				});
				this.wait();
			},
			testResponseXML: function () {
				var that = this;
				var myRequest = o.remote.request({
					url: 'ajaxtest.xml',
					onSuccess: function (responseObj) {
						Assert.areSame(responseObj.responseXML.childNodes[0].nodeName.toLowerCase(),'root','didnt get root object from xml');
						that.resume();
					}
				});
				this.wait();
			}
		}
	];
})();


tests.request = [
	{
		name: 'request',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		testBasic: function () {
			var myRequest = o.remote.ajax();
			Assert.isTrue('abort' in myRequest,'request return had no abort method');
			Assert.isTrue('abort' in myRequest,'request return had no abort method or property');
			Assert.isTrue('getAllResponseHeaders' in myRequest,'request return had no getAllResponseHeaders method or property');
			Assert.isTrue('getResponseHeader' in myRequest,'request return had no getResponseHeader method or property');
			Assert.isTrue('open' in myRequest,'request return had no open method or property');
			Assert.isTrue('send' in myRequest,'request return had no send method or property');
			Assert.isTrue('setRequestHeader' in myRequest,'request return had no setRequestHeader method or property');
		}
	}
];
tests.test = [
	{
		name: 'test',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test recursion sucks 5000': function () {
			Assert.areSame(o.test(5000),0);
		},
		'test recursion sucks 3750': function () {
			Assert.areSame(o.test(3750),0);
		},
		'test recursion sucks 3500': function () {
			Assert.areSame(o.test(3500),0);
		},
		'test recursion sucks 3000': function () {
			Assert.areSame(o.test(3000),0);
		},
		'test recursion sucks 2800': function () {
			Assert.areSame(o.test(2800),0);
		},
		'test recursion sucks 2500': function () {
			Assert.areSame(o.test(2500),0);
		},
		'test recursion sucks 500': function () {
			Assert.areSame(o.test(500),0);
		},
		'test recursion sucks 400': function () {
			Assert.areSame(o.test(400),0);
		},
		'test recursion sucks 300': function () {
			Assert.areSame(o.test(300),0);
		},
		'test recursion sucks 200': function () {
			Assert.areSame(o.test(200),0);
		},
		'test recursion sucks 100': function () {
			Assert.areSame(o.test(100),0);
		},
		'test recursion sucks 50': function () {
			Assert.areSame(o.test(50),0);
		},
		'test recursion sucks 25': function () {
			Assert.areSame(o.test(25),0);
		},
		'test recursion sucks 2': function () {
			Assert.areSame(o.test(2),0);
		}
	}
];
