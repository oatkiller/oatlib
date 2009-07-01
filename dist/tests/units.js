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
tests.add_event_handler = [
	{
		name: 'add_event_handler',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test add_event_handler': function () {
			var worked = false,
			button = document.createElement('button');
			o.dom.add_event_handler(button,'click',function (e) {
				worked = true;
			});
			YAHOO.util.UserAction.click(button);
			Assert.isTrue(worked);
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
tests.cancel_event = [
	{
		name: 'cancel_event',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test cancel_event': function () {
			var worked = null,
			button = document.createElement('button'),
			div = document.createElement('div');
			div.appendChild(button);
			button.onclick = function (e) {
				worked = true;
				o.dom.cancel_event(e);
			};
			div.onclick = function (e) {
				worked = false;
			};
			YAHOO.util.UserAction.click(button);
			Assert.areSame(worked,true);
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
tests.remove_event_handler = [
	{
		name: 'remove_event_handler',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test remove_event_handler': function () {
			var worked = true,
			button = document.createElement('button');
			o.dom.remove_event_handler(button,'click',function (e) {
				worked = false;
			});
			YAHOO.util.UserAction.click(button);
			Assert.isTrue(worked);
		}
	}
];
tests['dom-effects'] = [
	{
		name: 'transition',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		_should: {
			error: {
			},
			ignore: {
			}
		},
		setUp: function () {
			o.dom.setupTransition();
			this.transition = o.dom.transition;
		},
		tearDown: function () {
			o.dom.tearDownTransition();
		},
		'test transition function': function () {
			var startedPlaying = false;
			this.transition.startPlaying = function () {
				startedPlaying = true;
			};

			this.transition(function(){},1,function(){});
			Assert.isTrue(this.transition.transitions.length > 0,'shouldve added a transition');
			Assert.isTrue(startedPlaying,'shouldve started playing');
			Assert.isTrue('stop' in this.transition.transitions[0],'object in transitions should be a transition object');

		},
		'test transition.getCurrentTime': function () {
			Assert.isTrue(typeof(this.transition.getCurrentTime()) === 'number','shouldve returned a Date obj');
		},
		'test transition.iterate': function () {
			var considerCount = 0,
			currentTimeCount = 0,
			oldCurrentTimeFn = this.transition.getCurrentTime,
			intervalCount = 0,
			oldItervalFn = this.transition.getInterval;

			this.transition.getCurrentTime = function () {
				currentTimeCount++;
				return oldCurrentTimeFn.apply(this);
			},

			this.transition.getInterval = function () {
				intervalCount++;
				return oldItervalFn.apply(this);
			};

			this.transition.transitions = [
				this.transition.getTransition({
					durationInSeconds: 1,
					consider: function () {
						considerCount++;
						return true;
					}
				}),
				this.transition.getTransition({
					durationInSeconds: 2,
					consider: function () {
						considerCount++;
						return true;
					}
				}),
				this.transition.getTransition({
					durationInSeconds: 0.01,
					consider: function () {
						considerCount++;
						return false;
					}
				})
			];
			var shouldntByThis = this.transition.currentTime = 'blahblahlah';
			currentTimeCount = 0;
			this.transition.iterate();
			Assert.isFalse(shouldntByThis === this.transition.currentTime,'was supposed to balete currentTime');
			Assert.areSame(considerCount,3,'shouldve considered all 3 objs');
			Assert.areSame(currentTimeCount,1,'shouldve got the current time exactly once');
			Assert.areSame(intervalCount,1,'shouldve got the interval exactly once');
			Assert.areSame(this.transition.transitions.length,2,'should be 2 transition objs left');
		},
		'test transition.iterate total whipeout': function () {

			var stopPlayingCount = 0;

			this.transition.stopPlaying = function () {
				stopPlayingCount++;
			};

			this.transition.transitions = [
				this.transition.getTransition({
					durationInSeconds: 0.01,
					consider: function () {
						return false;
					}
				}),
				this.transition.getTransition({
					durationInSeconds: 0.01,
					consider: function () {
						return false;
					}
				}),
				this.transition.getTransition({
					durationInSeconds: 0.01,
					consider: function () {
						return false;
					}
				})
			];

			this.transition.iterate();

			Assert.areSame(1,stopPlayingCount,'shouldve stopped playing exactly once');
		},
		'test getInterval': function () {
			this.transition.fps = 10;
			Assert.areSame(this.transition.getInterval(),100,'shouldve been 100, duh');
			this.transition.fps = 22;
			delete this.transition.interval;
			Assert.areSame(this.transition.getInterval(),45,'shouldve been 45, duh');
		},
		'test transitionObj.consider': function () {

			var args = [],
			triedToScheduleFinalRun = false;

			var aTransitionObj = this.transition.getTransition({
				durationInSeconds: 1,
				iterator: function () {
					args.push(arguments);
				},
				scheduleFinalRun: function () {
					triedToScheduleFinalRun = true;
				}
			});
			Assert.isTrue(aTransitionObj.consider(
				aTransitionObj.getEndTime() - 100,45
			),'should return true when 2 cycles are left');
			Assert.areSame(args.length,1,'shouldve iterated once');
			Assert.isFalse(triedToScheduleFinalRun,'shouldnt have tried to schedule a final run');

			Assert.isTrue(aTransitionObj.consider(
				aTransitionObj.getEndTime() - 55,45
			),'should return true when 1 cycle is left');
			Assert.areSame(args.length,2,'shouldve iterated twice now');
			Assert.isFalse(triedToScheduleFinalRun,'shouldnt have tried to schedule a final run');

			Assert.isFalse(aTransitionObj.consider(
				aTransitionObj.getEndTime() - 10,45
			),'should return false when no cycles are left');
			Assert.areSame(args.length,3,'shouldve iterated 3 times now');
			Assert.isTrue(triedToScheduleFinalRun,'should have tried to schedule a final run');
		},
		'test transitionObj.scheduleFinalRun': function () {

			var args = [],
			oldSetTimeoutFn = this.transition.setTimeout,
			setTimeoutArgs = [];

			var aTransitionObj = this.transition.getTransition({
				durationInSeconds: 1,
				iterator: function () {
					args.push(arguments);
				}
			});

			this.transition.setTimeout = function () {
				setTimeoutArgs.push(arguments);
				return oldSetTimeoutFn.apply(this,arguments);
			};

			aTransitionObj.scheduleFinalRun(
				aTransitionObj.getEndTime() - 10
			);

			Assert.areSame(setTimeoutArgs[0][1],10,'shoulve scheduled at about this time');

		},
		'test startPlaying when already playing': function () {
			this.transition.isPlaying = true;
			Assert.isFalse(this.transition.startPlaying(),'shouldve returned false cause we already started duh');
		},
		'test startPlaying': function () {

			var realSetInterval = this.transition.setInterval,
			setIntervalArgs = [];
			this.transition.setInterval = function () {
				setIntervalArgs.push(arguments);
				return realSetInterval.apply(this,arguments);
			};

			var realGetInterval = this.transition.getInterval,
			getIntervalArgs = [];
			this.transition.getInterval = function () {
				getIntervalArgs.push(arguments);
				return realGetInterval.apply(this,arguments);
			};

			this.transition.startPlaying();
			Assert.areSame(setIntervalArgs[0][1],this.transition.interval,'shoulve scheduled with interval');
			Assert.areSame(getIntervalArgs.length,1,'shouldve called getInterval');
			Assert.isTrue(this.transition.intervalHandle !== undefined,'should have a handle');
			Assert.isTrue(this.transition.isPlaying,'shouldve turned this flag on');
		},
		'test stopPlaying': function () {
			Assert.isFalse(this.transition.stopPlaying(),'shouldnt stop cause its not started');
		},
		'test stopPlaying': function () {

			var realClearInterval = this.transition.clearInterval,
			clearIntervalArgs = [];

			this.transition.clearInterval = function () {
				clearIntervalArgs.push(arguments);
				return realClearInterval.apply(this,arguments);
			};

			this.transition.isPlaying = true;

			this.transition.intervalHandle = 234;

			this.transition.stopPlaying();

			Assert.isFalse(this.transition.isPlaying,'shouldve turned this flag off');
			Assert.areSame(clearIntervalArgs[0][0],this.transition.intervalHandle);
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
				o.remote.ajax({
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
				o.remote.ajax({
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
				var myRequest = o.remote.ajax({
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
				var myRequest = o.remote.ajax({
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
				var myRequest = o.remote.ajax({
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
				var myRequest = o.remote.ajax({
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
				var myRequest = o.remote.ajax({
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
				var myRequest = o.remote.ajax({
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
			var myRequest = o.remote.request();
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
