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
			getName = function () {return this.name;};
			Assert.areSame(myObj.name,getName[o.bind](myObj)(),'bind failed');
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
tests.dom = [
	{
		name: 'addClassName',
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
		testNoClassName: function () {
			o.dom.add_class_name(this.element,'foo');
			Assert.isTrue(/(\s+|^)foo(\s+|$)/.test(this.element.className))
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

tests.error = [
	{
		name: 'error',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];}
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
			getDouble = o.memoize(function (value) {
				total += 1;
				return value * 2;
			},memo);

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
