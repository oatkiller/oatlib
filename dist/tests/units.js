test({
	name: 'core',
	'core': function () {
		Assert.areEqual('http://oatlab.com/oatlib/v2',o);
	},
	'qname': function () {
		var sample_name = 'butt';
		Assert.areSame(o+':::'+sample_name,o.qname(sample_name));
	}
});
test({
	name: 'application_event',
	setUp: function () {
		this.event = o.application_event();
	},
	tearDown: function () {
		delete this.event;
	},
	'returns obj': function () {
		Assert.isObject(this.event);
	},
	'subscribe returns fn': function () {
		Assert.isFunction(this.event.subscribe(function () {}));
	},
	'subscribe puts its payload in the event return obj bees property': function () {
		var my_fn = function () {};
		this.event.subscribe(my_fn);
		Assert.areSame(this.event.bees[0],my_fn);
	},
	'subscribes return removes the payload from the event return obj bees property': function () {
		var my_fn = function () {};
		var remove = this.event.subscribe(my_fn);
		remove();
		Assert.areSame(this.event.bees.length,0);
	},
	'fire calls all the bees with its payload': function () {
		var called = false,
		other_called = false,
		my_fn = function (e) {
			called = e;
		},
		my_second_fn = function (e) {
			other_called = e;
		};
		this.event.subscribe(my_fn);
		this.event.subscribe(my_second_fn);
		this.event.fire('nubs');
		Assert.areSame(called,other_called);
		Assert.areSame(called,'nubs');
	},
	'multisubscribe works': function () {
		var a = 0, b = a, c = a;
		this.event.multi_subscribe({
			a: function (data) {a+=data.value;},
			b: function (data) {b+=data.value;},
			c: function (data) {c+=data.value;}
		});
		Assert.areSame(0,a);
		Assert.areSame(0,b);
		Assert.areSame(0,c);
		this.event.fire({
			type: 'a',
			value: 1
		});
		Assert.areSame(1,a);
		Assert.areSame(0,b);
		Assert.areSame(0,c);
		this.event.fire({
			type: 'a',
			value: 9
		});
		Assert.areSame(10,a);
		Assert.areSame(0,b);
		Assert.areSame(0,c);
		this.event.fire({
			type: 'b',
			value: 3
		});
		Assert.areSame(10,a);
		Assert.areSame(3,b);
		Assert.areSame(0,c);
		this.event.fire({
			type: 'c',
			value: 6
		});
		Assert.areSame(10,a);
		Assert.areSame(3,b);
		Assert.areSame(6,c);
	},
	'documentation': function () {
		(function () {
			var my_event = o.application_event();
			my_event.subscribe(function (payload) {
			});

			my_event.fire({
				data: 'will be avail. in the function you subscribed'
			});
		})();
		(function () {
			var my_event = o.application_event();
			my_event.multi_subscribe({
				start: function (payload) {
				},
				finish: function (payload) {
				}
			});
			my_event.fire({
				type: 'start',
				data: 'this obj will be passed to the fn you subscribed to start'
			});
			my_event.fire({
				type: 'finish',
				data: 'this obj will be passed to the fn you subscribed to finish'
			});
		})();
	}
});
test({
	name: 'are_same',
	'true in this weirder case in ie': function () {
		Assert.isFalse(o.are_same(2,undefined));
	},
	'true in this weird case in ie': function () {
		Assert.isFalse(o.are_same({y: 2},{}));
	},
	'true with all the same string': function () {
		Assert.isTrue(o.are_same('[object Object]','[object Object]','[object Object]'),'[object Object]s');
	},
	'false when first obj has more properties': function () {
		Assert.isFalse(o.are_same({x: 1, y: 2}, {x: 1}),'dissimilar objs should return false');
	},
	'false when second obj has more properties': function () {
		Assert.isFalse(o.are_same({x: 1}, {x: 1, y: 2}),'dis similar objs should return false');
	},
	'works with one param passed': function () {
		Assert.isTrue(o.are_same(false),'just one param');
	},
	'works with no params': function () {
		Assert.isTrue(o.are_same(),'no params');
	},
	'works with two numbers': function () {
		Assert.isTrue(o.are_same(1,1));
	},
	'works with three numbers': function () {
		Assert.isTrue(o.are_same(1,1,1));
	},
	'works with two empty objs': function () {
		var result = o.are_same({},{});
		Assert.isTrue(result);
	},
	'works with two dissimilar objs': function () {
		Assert.isFalse(o.are_same({a:1},{a:2}),'not similar objects should false');
	},
	'works with two similar objs': function () {
		Assert.isTrue(o.are_same({a:1},{a:1}),'similar objects should true');
	},
	'works with a bunch of HUGE CRAZY similar objs': function () {
		Assert.isTrue(o.are_same(
			{
				a: 1,
				b: 2,
				c: 3,
				d: {
					e: 5,
					f: {
						g: 6,
						h: [
							0,
							1,
							{
								i: 'a',
								j: true,
								k: null,
								l: undefined,
								m: Math,
								n: Number,
								o: Object,
								p: []
							}
						]
					}
				}
			},
			{
				a: 1,
				b: 2,
				c: 3,
				d: {
					e: 5,
					f: {
						g: 6,
						h: [
							0,
							1,
							{
								i: 'a',
								j: true,
								k: null,
								l: undefined,
								m: Math,
								n: Number,
								o: Object,
								p: []
							}
						]
					}
				}
			},
			{
				a: 1,
				b: 2,
				c: 3,
				d: {
					e: 5,
					f: {
						g: 6,
						h: [
							0,
							1,
							{
								i: 'a',
								j: true,
								k: null,
								l: undefined,
								m: Math,
								n: Number,
								o: Object,
								p: []
							}
						]
					}
				}
			}
		));
	},
	'work with TWO CRAZY HUGE dissimilar objs': function () {
		Assert.isFalse(o.are_same(
			{
				a: 1,
				b: 2,
				c: 3,
				d: {
					e: 5,
					f: {
						g: 6,
						h: [
							0,
							1,
							{
								i: 'a',
								j: true,
								k: null,
								l: undefined,
								m: Math,
								n: Number,
								o: Object,
								p: []
							}
						]
					}
				}
			},
			{
				a: 1,
				b: 2,
				c: 3,
				d: {
					e: 5,
					f: {
						g: 6,
						h: [
							0,
							1,
							{
								i: 'a',
								j: true,
								k: null,
								l: undefined,
								m: Math,
								n: Number,
								o: Object,
								p: []
							}
						]
					}
				}
			},
			{
				a: 1,
				b: 2,
				c: 3,
				d: {
					e: 5,
					f: {
						g: 6,
						h: [
							0,
							1,
							{
								i: 'a',
								j: true,
								k: null,
								l: undefined,
								m: Math,
								n: Number,
								o: 'hehe',
								p: []
							}
						]
					}
				}
			}
		));
	},
	'documentation': function () {
		(function () {
			Assert.isTrue(o.are_same(1,1)); // true.

			Assert.isTrue(o.are_same('foo','foo','foo','foo')); // true.

			Assert.isTrue(o.are_same([1,2,3],[1,2,3],[1,2,3])); // true.

			Assert.isFalse(o.are_same([1,3,2],[1,2,3])); // false.

			Assert.isFalse(o.are_same([1,2],[1,2,3])); // false.

			Assert.isTrue(o.are_same({
				name: 'robert',
				age: 23,
				favorites: {
					book: 'Wuthering Heights',
					album: 'Bricolages - Ryuichi Sakamoto',
					tea: 'jasmine'
				}
			},{
				name: 'robert',
				age: 23,
				favorites: {
					book: 'Wuthering Heights',
					album: 'Bricolages - Ryuichi Sakamoto',
					tea: 'jasmine'
				}
			})); // true.

			Assert.isFalse(o.are_same({
				name: 'robert',
				age: 23,
				favorites: {
					book: 'War &amp; Peace',
					album: 'Bricolages - Ryuichi Sakamoto',
					tea: 'jasmine'
				}
			},{
				name: 'robert',
				age: 23,
				favorites: {
					book: 'Wuthering Heights',
					album: 'Bricolages - Ryuichi Sakamoto',
					tea: 'jasmine'
				}
			})); // false
		})();
	}
});
test({
	name: 'array',
	setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
	'works': function () {
		var ra = o.array({length: 3, '0': 'a', '1': 'b', '2': 'c'});
		Assert.isNotUndefined(ra.push);
		Assert.areSame('a',ra[0]);
		Assert.areSame('b',ra[1]);
		Assert.areSame('c',ra[2]);
		Assert.areSame(3,ra.length);
	},
	'how does ie handle array elements with a value of undefined?': function () {
		Assert.areSame(1,[undefined].length,'language is broken');
		Assert.areSame(1,o.array([undefined]).length,'slice is broken?');
	}
});
(function () {

	var takes_numbers = function (n) {
		if (typeof n !== 'number') {
			throw new TypeError('needs number');
		}
	},
	fancy_takes_numbers = takes_numbers[o.before](parseFloat),
	takes_3_numbers = function (a,b,c) {
		takes_numbers(a);
		takes_numbers(b);
		takes_numbers(c);
	},
	fancy_takes_3_numbers = takes_3_numbers[o.before](function () {
		for (var i = 0, length = arguments.length; i < length; i++) {
			arguments[i] = parseFloat(arguments[i]);
		}
		return arguments;
	});

	test({
		name: 'before',
		_should: {
			error: {
				'takes_numbers error': true,
				'takes_3_numbers error': true
			}
		},
		'takes_numbers error': function () {
			takes_numbers('1');
		},
		'takes_numbers': function () {
			takes_numbers(1);
		},
		'fancy_takes_numbers': function () {
			fancy_takes_numbers('1');
		},
		'takes_3_numbers error': function () {
			takes_3_numbers(1,2,'3');
		},
		'takes_3_numbers': function () {
			takes_3_numbers(1,2,3);
		},
		'fancy_takes_3_numbers': function () {
			fancy_takes_3_numbers('1','2','3');
		}
	});

})();
test({
	name: 'bind',
	setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
	'works': function () {
		var myObj = {name: 'robert'},
		a = 'a',
		b = 'b',
		getName = function (a,b) {return this.name + a + b;};
		Assert.areSame(myObj.name + a + b,getName[o.bind](myObj,a)(b),'bind failed');
	},
	'documentation': function () {
		var person1 = {
			name: 'Robert'
		};

		var person2 = {
			name: 'Roy'
		};

		var get_name = function () {
			return this.name;
		};

		var get_person1s_name = get_name[o.bind](person1),
		get_person2s_name = get_name[o.bind](person2);

		Assert.areSame('Robert',get_person1s_name()); // returns 'Robert'
		Assert.areSame('Roy',get_person2s_name()); // returns 'Roy'
	}
});
test({
	name: 'bound',
	'works for under lower': function () {
		Assert.areSame(3,o.bound(2,3,5));
	},
	'works for exactly lower': function () {
		Assert.areSame(3,o.bound(3,3,5));
	},
	'works for within limits': function () {
		Assert.areSame(4,o.bound(4,3,5));
	},
	'works for at upper': function () {
		Assert.areSame(5,o.bound(5,3,5));
	},
	'works for above upper': function () {
		Assert.areSame(5,o.bound(6,3,5));
	}
});
test({
	name: 'builder',
	'builder': function () {
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
	'recursive builder': function () {
		var animal = o.builder({
			eat: function () {}
		});
		var mamal = o.builder(animal({sleep: function () {}}));
		var robert = mamal({name: 'robert'});
		Assert.isTrue(robert.hasOwnProperty('name'),'name');
		Assert.isTrue('eat' in robert,'eat');
		Assert.isTrue('sleep' in robert,'sleep');
	},
	'multiple builder': function () {
		var mamal = o.builder({
			eat: function () {}
		},{sleep: function () {}});
		var robert = mamal({name: 'robert'});
		Assert.isTrue(robert.hasOwnProperty('name'),'name');
		Assert.isTrue('eat' in robert,'eat');
		Assert.isTrue('sleep' in robert,'sleep');
	},
	'multiple builder reverse style': function () {
		var mamal = o.builder({sleep: function () {}},{
			eat: function () {}
		});
		var robert = mamal({name: 'robert'});
		Assert.isTrue(robert.hasOwnProperty('name'),'name');
		Assert.isTrue('eat' in robert,'eat');
		Assert.isTrue('sleep' in robert,'sleep');
	}
});
test({
	name: 'call_once',
	'call_once calls': function () {
		var count = 0,
		do_count = o.call_once(function () {
			count++;
		});
		do_count();
		Assert.areSame(1,count,'didnt call');
		do_count();
		Assert.areSame(1,count,'called too many times');
	},
	'documentation': function () {

		var get_a_div = function () {
			return document.createElement('div');
		}[o.call_once]();

		var my_div = get_a_div(), // returns a new div
		my_same_div = get_a_div(); // returns the same div again, as the function is called only once

		Assert.areSame(my_div,my_same_div);

	}
});
test({
	name: 'cartesian distance',
	'works': function () {
		Assert.areSame(5,o.cartesian.distance(0,0,3,4));
	}
});
test({
	name: 'chop',
	'chop': function () {
		Assert.areSame([1,2,3,4][o.chop]().length,3);
	}
});
test({
	name: 'combine',
	'combine': function () {
		var newObj = o.combine({
			name: 'robert'
		},{
			profession: 'website person'
		});

		Assert.isTrue(newObj.hasOwnProperty('name') && newObj.hasOwnProperty('profession'),'combine sucks');
	},
	'super_combine': function () {
		var C = function () {};
		C.prototype = {
			a: 1,
			b: 2,
			c: 3
		};
		var obj1 = {},
		obj2 = new C();
		o.super_combine(obj1,obj2);
		Assert.areSame(1,obj1.a);
		Assert.areSame(2,obj1.b);
		Assert.areSame(3,obj1.c);


	},
	'soft_combine': function () {
		var obj1 = {
			a: 1,
			b: 2,
			c: 3
		},
		obj2 = {
			c: 4,
			d: 4,
			e: 5
		};
		o.soft_combine(obj1,obj2);
		Assert.areSame(1,obj1.a);
		Assert.areSame(2,obj1.b);
		Assert.areSame(3,obj1.c);
		Assert.areSame(4,obj1.d);
		Assert.areSame(5,obj1.e);
	}
});
test({
	name: 'constructor',
	'constructor': function () {
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
});
test({
	name: 'contains',
	'works': function () {
		Assert.isTrue([1,2,3][o.contains](1),'contains 1');
		Assert.isFalse([1,2,3][o.contains](0),'doesnt contain 0');
		Assert.isTrue(['a','b'][o.contains]('a','b'),'contains a and b');
	},
	'documentation': function () {
		Assert.isTrue([1,2,3][o.contains](1)); // true. the array [1,2,3] has 1 as an element
		Assert.isFalse([1,2,3,4][o.contains](0)); // false, 0 isnt one of the elements of the array
		Assert.isTrue([1,2,3,4][o.contains](1,2)); // true. contains can take multiple params
		Assert.isFalse([1,2,3,4][o.contains](0,1)); // false. all params must be elements
		Assert.isFalse(['1',2,3][o.contains](1)); // false. i always use === to compare.
	}
});
test({
	name: 'curry',
	setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
	'curry': function () {
		var add = function (a,b,c) {return a + b + c;},
		add4 = add[o.curry](4);
		Assert.areSame(7,add4(1,2),'curry failed :(');
	}
});
test({
	name: 'absolutize',
	'works': function () {
		Assert.fail('untested');
	}
});
test({
	name: 'addClassName',
	setUp: function () {
		this.element = {
			className: ''
		};
	},
	'no class name': function () {
		o.dom.add_class_name(this.element,'foo');
		Assert.areSame(this.element.className,'foo');
	},
	'some class names': function () {
		this.element.className = 'asdew asdf duck';
		o.dom.add_class_name(this.element,'foo');
		Assert.areSame('foo asdew asdf duck',this.element.className);
	},
	'exists already': function () {
		this.element.className = 'foo asdf';
		o.dom.add_class_name(this.element,'foo');
		Assert.areSame('foo asdf',this.element.className);
	}
});
test({
	name: 'domarray',
	'domArray': function () {
			var tmpDiv = document.createElement('div'), cells, myRa;
			tmpDiv.innerHTML = '<table><tbody><tr><td></td><td></td><td></td><td></td></tr></tbody></table>';
			cells = tmpDiv.childNodes[0].childNodes[0].childNodes[0].cells;
			Assert.areSame(4,cells.length);
			myRa = o.dom.array(cells);
			Assert.isNotUndefined(myRa.push);
	},
	'documentation': function () {

var errors_caught = 0;

var my_div = document.createElement('div');
my_div.innerHTML = '<span>hi</span><p>a para</p>';

try {
	my_div.childNodes.push() // error, can't push childNodes because its not an array
} catch (e) {
	errors_caught++;
}

var my_child_nodes = o.dom.array(my_div.childNodes);

my_child_nodes.push('anything');
Assert.areSame('anything',my_child_nodes[my_child_nodes.length - 1]);

my_div.innerHTML = '';

Assert.areSame('SPAN',my_child_nodes[0].tagName); // still has nodes

	}
});
test({
	name: 'dom array_find',
	'works': function () {
	}
});
test({
	name: 'capacitate',
	'works': function () {
		var count = 0,
		final_fn = (function () {
			count ++;
		})[o.capacitate]();
		final_fn();
		final_fn();
		final_fn();
		Assert.areSame(0,count);
		this.wait(function () {
			Assert.areSame(3,count);
		},120);
	},
	'works with threshold': function () {
		var count = 0,
		final_fn = (function () {
			count ++;
		})[o.capacitate](30);
		final_fn();
		final_fn();
		final_fn();
		Assert.areSame(0,count);
		this.wait(function () {
			Assert.areSame(3,count);
		},40);
	}
});
test({
	name: 'class_name_test_regex',
	'works': function () {
		Assert.areSame(o.dom.class_name_test_regex('nubs').source,'(^|\\s+)nubs(\\s+|$)');
	}
});
test({
	name: 'clear_opacity',
	'works': function () {
		var node = {
			style: {
				opacity: 'blah'
			}
		};
		o.dom.clear_opacity(node);
		Assert.areSame(node.style.opacity,'');
	},
	'worksonwindows': function () {
		var node = {
			style: {
				filter: 'asdf'
			}
		};
		o.dom.clear_opacity(node);
		Assert.areSame(node.style.filter,'');
	}
});
test({
	name: 'dom.contains',
	'works': function () {
		var my_div = document.createElement('div');
		my_div.innerHTML = '<span></span>';
		var my_span = my_div.firstChild;
		Assert.isTrue(o.dom.contains(my_div,my_span));
	}
});
test({
	name: 'debounce',
	'works': function () {
		var worked = false,
		final_fn = (function () {
			worked = true;
		})[o.debounce]();
		final_fn();
		this.wait(function () {
			Assert.isTrue(worked);
		},120);
	},
	'works with threshold': function () {
		var worked = false,
		final_fn = (function () {
			worked = true;
		})[o.debounce](50);
		final_fn();
		this.wait(function () {
			Assert.isTrue(worked);
		},60);
	}
});
test({
	name: 'empty',
	'works': function () {
		var my_tmp_div = document.createElement('div');
		Assert.areSame(0,my_tmp_div.childNodes.length);
		o.dom.empty(my_tmp_div);
		Assert.areSame(0,my_tmp_div.childNodes.length);
		my_tmp_div.innerHTML = '<span></span><em></em><b>asdf</b><p>asdf</p>';
		Assert.areSame(4,my_tmp_div.childNodes.length);
		o.dom.empty(my_tmp_div);
		Assert.areSame(0,my_tmp_div.childNodes.length);
	}
});
test({
	name: 'add_listener',
	'runs': function () {
		var ran = false,
		that = this;
		o.dom.event.add_listener(document.body,'click',function () {
			ran = true;
		},true);
		YAHOO.util.UserAction.click(document.body);
		this.wait(function () {
			Assert.isTrue(ran);
		},10);
	}
});
test({
	name: 'cancel',
	works: function () {
		var my_div = document.createElement('div');
		my_div.innerHTML = '<p><span><b></b></span></p>';
		var p = my_div.getElementsByTagName('p')[0],
		span = my_div.getElementsByTagName('span')[0],
		b = my_div.getElementsByTagName('b')[0];

		var failed = false;

		p.onclick = function () {
			failed = true;
		};

		span.onclick = function (e) {
			o.dom.event.cancel(o.dom.event.get_event(e));
		};

	 	YAHOO.util.UserAction.click(b);
		this.wait(function () {
			Assert.isFalse(failed);
		},10);
	}
});
test({
	name: 'delegate',
	tearDown: function () {
		document.body.removeChild(this.my_div);
	},
	'works': function () {
		var my_div;
	 	this.my_div = my_div	= document.createElement('div');
		my_div.innerHTML = '<span><em></em></span>';
		document.body.appendChild(my_div);
		var em = my_div.getElementsByTagName('em')[0];
		var worked = false;
		var cancel_it = o.dom.event.delegate({
			ancestor: my_div,
			test: function (n) {
				return n.tagName !== undefined && n.tagName === 'SPAN';
			},
			action: function (e,oe) {
				worked = true;
			}
		});
		YAHOO.util.UserAction.click(em);
		var that = this;
		this.wait(function () {
			Assert.isTrue(worked);
			worked = false;
			cancel_it();
			YAHOO.util.UserAction.click(em);
			that.wait(function () {
				Assert.isFalse(worked);
			},10);
		},10);
	}
});
test({
	name: 'focus fires?',
	'realy?': function () {
	}
});
test({
	name: 'get_abstraction',
	'that get_abstraction returns an obj with the passed obj as its .event and that it has all the objs in its roto that its supposed to': function () {
		var e = {
			its: 'me'
		},
		abstraction = o.dom.event.get_abstraction(e);
		Assert.isTrue('get_event' in abstraction);
		Assert.isFalse(abstraction.hasOwnProperty('get_event'))
		Assert.areSame(abstraction.get_event(),e);
	}
});
test({
	name: 'get_button',
	setUp: function () {
		o.dom.event.setup_get_button();
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
	},
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
	}
});
test({
	name: 'get_element_from_point',
	'does right one way': function () {
		var payload,
		my_payload = {
			clientX: 1,
			clientY: 3
		};
		o.dom.event.setup_get_element_from_point({
			elementFromPoint: function (x,y) {
				payload = {
					x: x,
					y: y
				};
			}
		});
		o.dom.event.get_element_from_point(my_payload);
		Assert.areSame(payload.x,my_payload.x);
		Assert.areSame(payload.y,my_payload.y);
	},
	'does right one way': function () {
		var payload,
		my_payload = {
			pageX: 1,
			pageY: 3
		};
		o.dom.event.setup_get_element_from_point({
			elementFromPoint: function (x,y) {
				payload = {
					x: x,
					y: y
				};
			}
		});
		o.dom.event.get_element_from_point(my_payload);
		Assert.areSame(payload.x,my_payload.x);
		Assert.areSame(payload.y,my_payload.y);
	}
});
test({
	name: 'get_event',
	'test get_event should return event if passed one': function () {
		var obj = {};
		var fn = o.dom.event.get_event;
		var result = fn(obj);
		result = fn(obj);
		Assert.areSame(result,obj);
	}, // makes it testable
	'test get_event should return window.event else': function () {
		var my_window = {
			event: {}
		};
		o.dom.event.setup_get_event(my_window);

		var fn = o.dom.event.get_event;

		var result = fn();

		Assert.areSame(result,my_window.event);
	}
});
test({
	name: 'get_key',
	'get_key returns keyCode for key if avail': function () {
		var obj = {keyCode: 1, which: 2};
		var fn = o.dom.event.get_key;
		var result = fn(obj).key;
		Assert.areSame(result,1);
	},
	'get_key returns which for key if keyCode is not avail': function () {
		var obj = {which: 2};
		var fn = o.dom.event.get_key;
		var result = fn(obj).key;
		Assert.areSame(result,2);
	}
});
test({
	name: 'get_mouse_coordinates',
	'should return pageX and pageY if they are on the e': function () {
		var e = {
			pageX: 3,
			pageY: 2,
			clientX: 9,
			clientY: 10
		},
		result = o.dom.event.get_mouse_coordinates(e);
		Assert.areSame(result.x,3);
		Assert.areSame(result.y,2);
	},
	'otherwise should return clientX to document.body.scrollLeft + document.documentElement.scrollLeft, etc': function () {
		var my_document = {
			body: {
				scrollLeft: 18,
				scrollTop: 49
			},
			documentElement: {
				scrollLeft: 21,
				scrollTop: 91
			}
		},
		e = {
			clientX: 13,
		 	clientY: 8
		};
		o.dom.event.setup_get_mouse_coordinates(my_document);
		var result = o.dom.event.get_mouse_coordinates(e);
		Assert.areSame(my_document.body.scrollLeft + my_document.documentElement.scrollLeft + e.clientX,result.x);
		Assert.areSame(my_document.body.scrollTop + my_document.documentElement.scrollTop + e.clientY,result.y);
	}
});
test({
	name: 'get_related_mouseover_target',
	setUp: function () {
		o.dom.event.setup_get_related_target();
	},
	'test get_related_mouseover_target should return fromElement if relatedTarget isnt avail': function () {
		var fromElement = {},
		e = {fromElement: fromElement},
		fn = o.dom.event.get_related_mouseover_target,
		result = fn(e);
		Assert.areSame(result,fromElement);
	},
	'test get_related_mouseover_target should return relatedTarget if avail': function () {
		var relatedTarget = {},
		fromElement = {},
		e = {relatedTarget: relatedTarget, fromElement: fromElement},
		fn = o.dom.event.get_related_mouseover_target,
		result = fn(e);
		Assert.areSame(relatedTarget,result);
	}
});
test({
	name: 'get_target',
	setUp: function () {
		o.dom.event.setup_get_target();
	},
	'get_target should return e.target if it exists': function () {
		var target = {},
		obj = {target: target},
		fn = o.dom.event.get_target,
		result = fn(obj);
		result = fn(obj);
		Assert.areSame(result,target);
	},
	'get_target should return e.srcElement if target doesnt exist': function () {
		var target = {},
		obj = {srcElement: target},
		fn = o.dom.event.get_target,
		result = fn(obj);
		result = fn(obj);
		Assert.areSame(result,target);
	}
});
test({
	name: 'prevent_default',
	setUp: function () {
		o.dom.event.setup_prevent_default();
	},
	'should work with preventDefault': function () {
		var called_prevent_default = false,
		e = {
			preventDefault: function () {
				called_prevent_default = true;
			}
		};
		o.dom.event.prevent_default(e);
		Assert.isTrue(called_prevent_default);
	},
	'should work with returnValue': function () {
		var e = {
			returnValue: true
		};
		o.dom.event.prevent_default(e);
		Assert.isFalse(e.returnValue);
	}
});
test({
	name: 'prevent_select',
	'runs': function () {
		o.dom.event.prevent_select(function () {return true;});
	}
});
test({
	name: 'dom_find',
	'should return node if test of node returns true': function () {
		var node = {},
		test = function () {return true;};
		Assert.areSame(o.dom.find(function(){},node,test),node);

	}
});
test({
	name: 'find_ancestor_or_self',
	'works': function () {
		var my_div = document.createElement('div');
		my_div.innerHTML = '<span></span>';
		var my_span = my_div.firstChild;
		Assert.isNull(o.dom.find_ancestor_or_self(my_span,function (n) {
			return false;
		},my_div));
	},
	'checks self': function () {
		var my_div = document.createElement('div');
		my_div.innerHTML = '<span><em></em></span>';
		var my_span = my_div.firstChild,
		my_em = my_span.firstChild;
		Assert.areSame(o.dom.find_ancestor_or_self(my_em,function (n) {
			return n === my_em;
		},my_div),my_em);
	}
});
test({
	name: 'find_descendant_or_self',
	'works': function () {
		var my_div = document.createElement('div');
		my_div.innerHTML = '<span><b></b></span>';
		Assert.areSame('B',o.dom.find_descendant_or_self(my_div,function (node) {
			return node.tagName && node.tagName === 'B';
		}).tagName);
	},
	'checks self': function () {
		var my_div = document.createElement('div');
		my_div.innerHTML = '<span><b></b></span>';
		Assert.areSame(o.dom.find_descendant_or_self(my_div,function (node) {
			return node.tagName && node.tagName === 'DIV';
		}).tagName,'DIV');
	}
});
test({
	name: 'find_descendants',
	'works': function () {
		var tmp_div = document.createElement('div');
		tmp_div.innerHTML = '<span></span><b></b><strong></strong><p></p>';
		var results = o.dom.find_descendants(tmp_div,function (node) {
			return node.tagName === 'DIV' || node.tagName === 'B' || node.tagName === 'STRONG';
		});
		Assert.areSame(3,results.length);
	}
});
test({
	name: 'find_following_sibling_or_self',
	'works': function () {
		var my_div = document.createElement('div');
		my_div.innerHTML = '<span></span><p></p><b></b>';
		var my_span = my_div.firstChild;
		Assert.areSame('B',o.dom.find_following_sibling_or_self(my_span,function (n) {
			return n.tagName && n.tagName === 'B';
		}).tagName);
	}
});
test({
	name: 'find_position',
	'works': function () {
		var my_div = document.createElement('div');
		document.body.appendChild(my_div);

		var position = o.dom.find_position(my_div);

		Assert.isNotUndefined(position.y);
		Assert.isNotUndefined(position.x);
		Assert.isNotUndefined(position.get_height);
		Assert.isNotUndefined(position.get_width);
		Assert.isNotUndefined(position.rect);

	}
});
test({
	name: 'find_preceding_sibling_or_self',
	'works': function () {
		var my_div = document.createElement('div');
		my_div.innerHTML = '<span></span><p></p><b></b>';
		var my_b = my_div.lastChild;
		Assert.areSame('SPAN',o.dom.find_preceding_sibling_or_self(my_b,function (n) {
			return n.tagName && n.tagName === 'SPAN';
		}).tagName);
	}
});
test({
	name: 'fragment',
	'fragment': function () {
		var stuff = o.dom.fragment('well<div>nope</div> har');
		Assert.areSame(3,stuff.childNodes.length,'fragment didnt get childnodes');
	}
	/* doesnt work in ie
	'style node': function () {
		var stuff = o.dom.fragment('<style></style>');
		Assert.areSame(1,stuff.childNodes.length,'fragment didnt get childnodes');
	}*/
});
test({
	name: 'get scroll offsets',
	'runs': function () {
		o.dom.get_scroll_offsets();
	}
});
test({
	name: 'get_style',
	'runs': function () {
		o.dom.get_style(document.body,'margin');
	}
});
test({
	name: 'get_text_content',
	'get_text_content': function () {
		var tmpDiv = document.createElement('div'), cells, myRa;
		tmpDiv.innerHTML = '<table><tbody><tr><td></td><td></td><td></td><td></td></tr></tbody></table>';
		cells = tmpDiv.childNodes[0].childNodes[0].childNodes[0].cells;
		myRa = o.dom.array(cells);
		Assert.isNotUndefined(myRa.push);
	}
});
test({
	name: 'get_window_size',
	'runs': function () {
		o.dom.get_window_size();
		o.dom.get_window_size();
	}
});
test({
	name: 'has_class_name',
	setUp: function () {
		this.element = document.createElement('div');
		document.body.appendChild(this.element);
	},
	tearDown: function () {
		try {
			document.body.removeChild(this.element);
		} catch (e) {}
	},
	'element with several classes, finding first class': function () {
		this.element.className = 'foo bar gaz lulz';
		Assert.isTrue(o.dom.has_class_name(this.element,'foo'));
	},
	'element with one class, finding it': function () {
		this.element.className = 'bar';
		Assert.isTrue(o.dom.has_class_name(this.element,'bar'));
	},
	'element with several classes, finding second class': function () {
		this.element.className = 'bar lulz goat';
		Assert.isTrue(o.dom.has_class_name(this.element,'lulz'));
	},
	'element with a classname, not finding a classname which is a substring of the elements class': function () {
		this.element.className = 'asdfnubzasdf';
		Assert.isFalse(o.dom.has_class_name(this.element,'nubz'));
	}
});
test({
	name: 'hide',
	'works': function () {
		var node = {
			style: {
				display: ''
			}
		};
		var result = o.dom.hide(node);
		Assert.areSame('none',node.style.display);
		Assert.areSame(node,result);
	}
});
test({
	name: 'insert_after',
	setUp: function () {
		this.tmp_div = document.createElement('div');
		this.tmp_div.innerHTML = '<p></p><b></b><p></p>';
		this.payload = document.createElement('span');
	},
	tearDown: function () {
		delete this.tmp_div;
		delete this.payload;
	},
	'not last child': function () {
		o.dom.insert_after(this.tmp_div.childNodes[1],this.payload);
		Assert.areSame(this.tmp_div.childNodes[2],this.payload);
	},
	'last child': function () {
		o.dom.insert_after(this.tmp_div.childNodes[2],this.payload);
		Assert.areSame(this.tmp_div.childNodes[3],this.payload);
	}
	});
test({
	name: 'insert_before',
	setUp: function () {
		this.tmp_div = document.createElement('div');
		this.tmp_div.innerHTML = '<p></p><b></b><p></p>';
		this.payload = document.createElement('span');
	},
	tearDown: function () {
		delete this.tmp_div;
		delete this.payload;
	},
	'works': function () {
		o.dom.insert_before(this.tmp_div.childNodes[1],this.payload);
		Assert.areSame(this.tmp_div.childNodes[1],this.payload);
	}
});
test({
	name: 'is_node',
	'works': function () {
		Assert.isTrue(o.dom.is_node(document),'document');
		Assert.isTrue(o.dom.is_node(document.body),'document.body');
		Assert.isTrue(o.dom.is_node(document.createTextNode('sadf')),'new text node');
		Assert.isFalse(o.dom.is_node({}),'object literal');
	}
});
test({
	name: 'is_tag_name',
	'works': function () {
		var tmp_div = document.createElement('div');
		Assert.isTrue(o.dom.is_tag_name(tmp_div,'DIV'));
	},
	'doest error on document': function () {
		Assert.isFalse(o.dom.is_tag_name(document,'anything'));
	},
	'doest error on window': function () {
		Assert.isFalse(o.dom.is_tag_name(window,'anything'));
	},
	'doest error on text node': function () {
		Assert.isFalse(o.dom.is_tag_name(document.createTextNode('asdf'),'anything'));
	}
});
test({
	name: 'node',
	'works': function () {
		var myNode = o.dom.node('something');
		Assert.areSame(3,myNode.nodeType,'node failed to get node');
	}
});
test({
	name: 'parse_pixel_value',
	_should: {
		error: {
			'doesnt work': true
		}
	},
	'works': function () {
		Assert.areSame(12,o.dom.parse_pixel_value('12px'));
	},
	'doesnt work': function () {
		o.dom.parse_pixel_value('12');
	}
});
test({
	name: 'prepend_child',
	setUp: function () {
		this.tmp_div = document.createElement('div');
		this.tmp_div.innerHTML = '<p></p><b></b><p></p>';
		this.payload = document.createElement('span');
	},
	tearDown: function () {
		delete this.tmp_div;
		delete this.payload;
	},
	'has children': function () {
		o.dom.prepend_child(this.tmp_div,this.payload);
		Assert.areSame(this.tmp_div.childNodes[0],this.payload);
	},
	'has no children': function () {
		this.tmp_div.innerHTML = '';
		o.dom.prepend_child(this.tmp_div,this.payload);
		Assert.areSame(this.tmp_div.childNodes[0],this.payload);
	}
});
test({
	name: 'query_string_obj_from_form',
	tearDown: function () {
		this.tmp_div.parentNode.removeChild(this.tmp_div);
	},
	'works': function () {
		var tmp_div;
		this.tmp_div = tmp_div = document.createElement('div');
		tmp_div.innerHTML = '<form method="get" action="index.html" id="my_form" onsubmit="return false;"><fiedset><input name="a" id="blah-blah-a" value="1" type="password" /><input name="b" id="blah-blah-b" value="2" type="hidden" /><input name="c" value="3" type="submit" id="push_it" /><select name="d" id="blah-blah-d"><optgroup label="nope"><option value="4">asdf</option></optgroup></select></fieldset></form>';
		document.body.appendChild(tmp_div);
		YAHOO.util.UserAction.click(document.getElementById('push_it'));
		var ra = o.dom.query_string_obj_from_form(document.getElementById('my_form'));

		var get_obj_by_key = function (key) {
			var the_one;
			for (var property_name in ra) {
				var obj = ra[property_name];
				if (obj.key === key) {
					return obj;
				}
			}
		};

		Assert.areSame('1',get_obj_by_key('a').value);
		Assert.areSame('2',get_obj_by_key('b').value);
		Assert.areSame('3',get_obj_by_key('c').value);
		Assert.areSame('4',get_obj_by_key('d').value);

		var nodes = ['a','b','push_it','d'];
		for (var i = 0; i < nodes.length; i++) {
			nodes[i] = document.getElementById(nodes[i] !== 'push_it' ? 'blah-blah-' + nodes[i] : nodes[i]);
		}

		Assert.areSame(nodes[0],get_obj_by_key('a').node,'a');
		Assert.areSame(nodes[1],get_obj_by_key('b').node,'b');
		Assert.areSame(nodes[2],get_obj_by_key('c').node,'c');
		Assert.areSame(nodes[3],get_obj_by_key('d').node,'d');

	}
});
test({
	name: 'remove',
	'works': function () {
		var my_div = document.createElement('div');
		my_div.innerHTML = '<span></span>';
		var result = o.dom.remove(my_div.childNodes[0]);
		Assert.areSame(0,my_div.childNodes.length);
		Assert.areSame('SPAN',result.tagName);
	}
});
test({
	name: 'removeClassName',
	setUp: function () {
		this.element = document.createElement('div');
		document.body.appendChild(this.element);
	},
	tearDown: function () {
		try {
			document.body.removeChild(this.element);
		} catch (e) {}
	},
	'remove className': function () {
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
});
test({
	name: 'replace',
	'works': function () {
		var my_tmp_div = document.createElement('div'),
		my_span = document.createElement('span');
		my_tmp_div.innerHTML = '<b></b><i></i>';
		o.dom.replace(my_tmp_div.firstChild,my_span);
		Assert.areSame(my_span,my_tmp_div.firstChild);
	}
});
test({
	name: 'unhide',
	'works': function () {
		var my_div = document.createElement('div');
		my_div.style.display = 'none';
		var result = o.dom.unhide(my_div);
		Assert.areSame(my_div,result);
		Assert.areSame('',my_div.style.display);
	}
});
test({
	name: 'dom.update',
	'works': function () {
		var my_div = document.createElement('div');
		my_div.innerHTML = 'some stuff <b>asdf</b> asdf';
		Assert.areSame(3,my_div.childNodes.length);
		my_new_content = document.createElement('div');
		my_new_content.innerHTML = 'some stuff';
		var my_div_ref2 = o.dom.update(my_div,my_new_content);
		Assert.areSame(1,my_div.childNodes.length);
		Assert.areSame('DIV',my_div.firstChild.tagName);
		Assert.areSame(my_div,my_div_ref2);
	}
});
test({
	name: 'each',
	'take form works on arrays': function () {
		var count = 0,
		my_array = [1,2,3];
		o.each(my_array,function (element,index,ra) {
			Assert.areSame(count,parseInt(index));
			Assert.areSame(my_array[count],element);
			Assert.areSame(my_array,ra);
			count++;
		});
		Assert.areSame(3,count);
	},
	'prototype form works on arrays': function () {
		var count = 0,
		my_array = [1,2,3];
		my_array[o.each](function (element,index,ra) {
			Assert.areSame(count,index);
			Assert.areSame(my_array[count],element);
			Assert.areSame(my_array,ra);
			count++;
		});
		Assert.areSame(3,count);
	},
	'undefineds in array are eachd over in take form': function () {
		var count = 0;
		o.each([undefined,undefined,undefined],function () {
			count++;
		});
		Assert.areSame(3,count);
	},
	'undefineds in array are eachd over in prototype form': function () {
		var count = 0;
		[undefined,undefined,undefined][o.each](function () {
			count++;
		});
		Assert.areSame(3,count);
	},
	'take form works on objects': function () {
		var count = 0,
		my_obj = {a: 1, b: 2, c: 3},
		properties = ['a','b','c'];
		o.each(my_obj,function (element,property_name,obj) {
			Assert.areSame(properties[count],property_name);
			Assert.areSame(obj[property_name],element);
			Assert.areSame(my_obj,obj);
			count++;
		});
		Assert.areSame(3,count);
	},
	'take form can break': function () {
		var count = 0;
		o.each({a: true, b: false},function (element) {
			if (element === false) {
				return o.each_break;
			}
			count++;
		});
		Assert.areSame(1,count);
	},
	'array form can break': function () {
		var count = 0;
		o.each([true,false],function (element) {
			if (element === false) {
				return o.each_break;
			}
			count++;
		});
		Assert.areSame(1,count);
	}/*,
	'documentation': function () {
[1,2,3][o.each](function (n,index,my_array) {

	alert(n);
});

o.each({
	name: 'Robert',
	age: 23,
	food: 'peanut butter'
},function (element,property_name,obj) {
	alert(property_name + ': ' + element);
});

[1,2,3][o.each](function (n) {
	if (n === 2) {
		return o.each_break;
	}
});

	}*/
});
test({
	name: 'error',
	_should: {
		error: {
			'that error throws an error?': true,
			'documentation': true
		}
	},
	'that error throws an error?': function () {
		o.error('nubs');
	},
	'documentation': function () {

		var takes_a_number = function (n) {
			if (typeof n !== 'number') {
				o.error('FFFFFFFFFFFFUUUUUU');
			}
			return n + 1;
		};
		takes_a_number('hi'); // error

	}
});
test({
	name: 'every',
	'works for arrays': function () {
		answer = [1,true,'yes',2][o.every](function (a) {return a;});
		Assert.isTrue(answer);
	},
	'works for arrays with undefined in them': function () {
		var answer = [1,true,'yes',false][o.every](function (a) {return a;});
		Assert.isFalse(answer);
	},
	'documentation': function () {
Assert.isTrue([1,2,3][o.every](function (n) {return n < 4;})); // true;

Assert.isFalse([1,2,5][o.every](function (n) {return n < 4;})); // false;
	}
});
test({
	name: 'filter',
	'works on arrays': function () {
		var results = [1,2,3,4][o.filter](function (a) {return a % 2;});
		Assert.areSame(2,results.length);
		Assert.areSame(1,results[0]);
		Assert.areSame(3,results[1]);
	},
	'works on objs': function () {
		var obj = {
			a: 1,
			b: 2,
			c: 3,
			d: 4
		},
		filtered = o.filter(obj,function (a) {return a % 2 !== 0;}),
		count = 0;
		for (var property_name in filtered) {
			if (count === 0) {
				Assert.areSame('a',property_name);
				Assert.areSame(1,filtered[property_name]);
			} else {
				Assert.areSame('c',property_name);
				Assert.areSame(3,filtered[property_name]);
			}
			count++;
		}
		Assert.areSame(2,count);
		Assert.isUndefined(filtered.length);
	},
	'documentation': function () {

var new_array = [1,2,3,4][o.filter](function (i) {
	return i % 2;
});
Assert.areSame(1,new_array[0]);
Assert.areSame(3,new_array[1]);
	}
});
test({
	name: 'find',
	'works for arrays': function () {
		var answer = [
			{id: 1, value: false},
			{id: 2, value: false},
			{id: 3, value: true},
			{id: 4, value: false}
		][o.find](function (obj) {return obj.value;});
		Assert.areSame(3,answer.id);
	}
});
test({
	name: 'first_result',
	'works for arrays': function () {
		var answer = [
			{id: 1, value: true},
			{id: 2, value: true},
			{id: 3, value: false},
			{id: 4, value: false}
		][o.first_result](function (obj) {return !obj.value;});
		Assert.areSame(answer,true);
	},
	'works for non arrays': function () {
		var fn = function (value) {
			var result = value * 2; return result > 5 ? result : false;
		},
		answer = o.first_result({
			a: 1,
			b: 2,
			c: 3,
			d: 4
		},fn);
		Assert.areSame(6,answer);
	},
	'documentation': function () {
Assert.areSame(3,['blah','ducks','3','woot'][o.first_result](function (n) {
	return parseFloat(n);
}));

	}
});
test({
	name: 'flatten',
	'works for arrays': function () {
		var source = [1,2,[3,4],[5],6],
		result = source[o.flatten](),
		expected_result = [1,2,3,4,5,6]
		i = 0,
		length = expected_result.length;
		Assert.areSame(result.length,expected_result.length);
		for (; i < length; i++) {
			Assert.areSame(result[i],expected_result[i]);
		}
	},
	'flatten in take form': function () {
		var source = [1,2,[3,4],[5],6],
		result = o.flatten(source),
		expected_result = [1,2,3,4,5,6]
		i = 0,
		length = expected_result.length;
		Assert.areSame(result.length,expected_result.length);
		for (; i < length; i++) {
			Assert.areSame(result[i],expected_result[i]);
		}
	},
	'documentation': function () {
Assert.areSame(6,[1,2,[3,4],[5,6]][o.flatten]().length);
[1,2,[3,4],[5,6]][o.flatten]();
	}
});
test({
	name: 'get_object_property',
	setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
	'test get_object_property': function () {
		var obj = {
			name: 'robert'
		};
		Assert.areSame(o.get_object_property(obj,'name'),obj.name);
	}
});
test({
	name: 'get_once',
	'get_once': function () {
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
});

test({
	name: 'indexOf',
	'indexOf': function () {
		Assert.areSame([1,2,3][o.indexOf](2),1);
	}
});
test({
	name: 'inspect',
	'passed a number, inspect returns the toString(10) of it': function () {
		Assert.areSame('1',o.inspect(1));
	},
	'passed a string it returns the strings to string with " and " on either side': function () {
		Assert.areSame('"a"',o.inspect('a'));
	},
	'pass a regex it returns what youd expect': function () {
		Assert.areSame('/abc/ig',o.inspect(/abc/ig));
	},
	'pass a boolean and it returns the boolean literal': function () {
		Assert.areSame('true',o.inspect(true));
		Assert.areSame('false',o.inspect(false));
	},
	'pass a named function and it will return "Function: name"': function () {
		function my_fn () {}
		Assert.areSame('Function: my_fn',o.inspect(my_fn));
	},
	'pass an anonymous function and it will return "Function: anonymous"': function () {
		Assert.areSame('Function: anonymous',o.inspect(function () {}));
	},
	'pass it an object which has a toString that isnt Object.prototype.toString, and it will return that': function () {
		var C = function () {};
		C.prototype.toString = function () {
			return 'foo';
		};
		Assert.areSame('foo',o.inspect(new C()));
	},
	'pass it an object which has Object.prototype.toString as its toString and it should return an object graph': function () {
		Assert.areSame('{\n\tproperty_name: "a"\n}',o.inspect({property_name: 'a'}));
	},
	'above with multilpe properties': function () {
		Assert.areSame('{\n\tproperty_name: "a",\n\tname: "robert",\n\tage: "23"\n}',o.inspect({property_name: 'a', name: 'robert', age: '23'}));
	},
	'deep objects': function () {
		o.inspect({
			a: 1,
			b: {
				c: 2
			},
			d: 3
		});
	}
});
test({
	name: 'invoke',
	'invoke': function () {
		var count = 0,
		fn = function () {
			count++;
		};
		Assert.areSame(count,0);
		o.invoke(fn);
		Assert.areSame(count,1);
		o.invoke(fn);
		Assert.areSame(count,2);

	},
	'documentation': function () {
var my_fn = function (a,b) {
	return a + b;
};
Assert.areSame(7,o.invoke(my_fn,3,4));
	}
});
test({
	name: 'is_array',
	'works on arrays': function () {
		Assert.isTrue(o.is_array([]));
	},
	'works on non arrays': function () {
		Assert.isFalse(o.is_array({'0': 1, '1': 2, length: 2}));
	},
	'documentation': function () {
		Assert.isTrue(o.is_array([])); // true
		Assert.isFalse(o.is_array({})); // false

		Assert.isFalse(o.is_array({
			'0': 'a',
			'1': 'b',
			length: 2
		}));
	}
});
test({
	name: 'is not false',
	'works': function () {
		Assert.isTrue(o.is_not_false('asdf'));
		Assert.isFalse(o.is_not_false(false));
		Assert.isTrue(o.is_not_false(null));
	}
});
test({
	name: 'parse',
	'works': function () {
		var obj = o.json.parse('{"key": "value"}');
		Assert.areSame('value',obj.key);
	}
});
test({
	name: 'stringify',
	'works': function () {
		Assert.areSame('{"key":"value"}',o.json.stringify({key: 'value'}));
	}
});
test({
	name: 'K',
	'works': function () {
		Assert.areSame(Math,o.K(Math));
	}
});
test({
	name: 'last',
	'last': function () {
		Assert.areSame([1,2,3][o.last](),3);
		Assert.areSame(o.last([1,2,3]),3);
	}
});
test({
	name: 'map',
	'works with arrays': function () {
		var original = [2,4,6],
		mapped = original[o.map](function (e) {
				return e * 2;
		});

		for (var i = 0, length = original.length; i < length; i++) {
			Assert.areSame(original[i] * 2,mapped[i]);
		}
	},
	'works with other objs': function () {

		var src = {
			a: 1,
			b: 2,
			c: 3
		},
		result = o.map(src,function (value) {
			return value * 2;
		});

		Assert.areSame(src.a * 2,result.a);
		Assert.areSame(src.b * 2,result.b);
		Assert.areSame(src.c * 2,result.c);
	}
});
test({
	name: 'mask',
	'mask': function () {
		var obj = {
			name: 'woot'
		},
		masked = o.mask(obj);
		Assert.isTrue('name' in masked);
		Assert.isFalse(masked.hasOwnProperty('name'));

	},
	'documentation': function () {

var book = {
	title: 'Anna Karenina',
	author: 'Leo Tolstoy'
};

var my_book = o.mask(book);

my_book.notes = 'this book rocks';

Assert.isUndefined(book.notes);
Assert.isNotUndefined(my_book.notes);
Assert.isNotUndefined(my_book.title);


	}
});
test({
	name: 'newo.memoize',
	'new o.memoize basic usage': function () {
		var total = 0,
		get_double = o.memoize(function (value) {
			total += 1;
			return value * 2;
		});

		get_double(1);
		get_double(1);
		get_double(1);
		Assert.areSame(1,total);
		get_double(2);
		get_double(3);
		get_double(4);
		Assert.areSame(4,total);
	},
	'new o.memoize, with invalidate': function () {
		var total = 0,
		memo = {},
		get_double = function (value) {
			total += 1;
			return value * 2;
		}[o.memoize](memo);

		get_double(1);
		get_double(1);
		get_double(1);
		Assert.areSame(1,total);
		delete memo['1'];
		get_double(1);
		Assert.areSame(2,total);

	},
	'new o.memoize, with multiple parameter': function () {
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
	'new o.memoize with object param which has a toString method': function () {
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
	},
	'documentation': function () {

var my_data;

var count = 0;


var my_cached_ajax_responses = {},
get_data_by_id_and_type = function (id,type) {
	count++;
	return my_data; // something you got from ajax
}[o.memoize](my_cached_ajax_responses);

Assert.areSame(0,count);

get_data_by_id_and_type(1,'name');
Assert.areSame(1,count);

get_data_by_id_and_type(1,'name');
Assert.areSame(1,count);

var key = [1,'name'].join(); // '1,name'

delete my_cached_ajax_responses[key];

get_data_by_id_and_type(1,'name');
Assert.areSame(2,count);

	}
});
test({
	name: 'only_if',
	'works': function () {
		var payload = {},
		got_this = false;
		my_fn = (function (type,payload) {
			got_this = payload;
		})[o.only_if](function (type) {
			return type === 'on_drop';
		});

		my_fn('blah',payload);
		Assert.isFalse(got_this);
		my_fn('on_drop',payload);
		Assert.areSame(payload,got_this);
	}/*,
	'documentation': function () {
		var submitted = false,
		my_form = {
			submit: function () {
				submitted = true;
			}
		};
		var submit_the_form = function () {
			my_form.submit();
		}[o.only_if](confirm[o.curry]('are you sure?'));
		Assert.isFalse(submitted);
		submit_the_form();
		Assert.isFalse(submitted);
		submit_the_form();
		Assert.isTrue(submitted);

	}*/
});
test({
	name: 'qname',
	'documentation': function () {
		var my_property_name = o.qname('my_property_name');

		document.body[my_property_name] = 'my data';
		Assert.areSame('my data',document.body[my_property_name]);
	}
});
test({
	name: 'rcurry',
	'rcurry': function () {

		var join = function () {
			return Array.prototype.join.call(arguments,' ');
		};

		Assert.areSame('.net sucks',join('.net','sucks'),'join failed');

		var sucks = join[o.rcurry]('sucks'),
		dotnetsucks = sucks('.net');

		Assert.areSame('.net sucks',dotnetsucks,'rcurry failed');
	}
});
test({
	name: 'reduce',
	'works': function () {
		Assert.areSame(6,[0, 1, 2, 3][o.reduce](function (a,b) {return a + b;}));
		var flattened = [[0,1], [2,3], [4,5]][o.reduce](function(a,b) {
			return a.concat(b);
		}, []);
		for (var i = 0; i <= 5; i++) {
			Assert.areSame(i,flattened[i]);
		}
	},
	'fine grain': function () {
		var expected_previous = [0,1],
		expected_current = [1,2],
		count = 0;
		[0,1,2][o.reduce](function (previous,current) {
			Assert.areSame(expected_previous[count],previous);
			Assert.areSame(expected_current[count],current);
			count++;
			return current;
		});
		Assert.areSame(2,count);
	}
});
test({
	name: 'reducer',
	'reducer': function () {
		var stringBuilder = o.reducer(function () {return '';},function (a,b) {
			return a + b;
		});
		Assert.areSame('abc',stringBuilder('a','b','c'),'reducer sucks');
		var musher = o.reducer(function () {return {length: 0};},function (arrayLike,value) {
			arrayLike[arrayLike.length] = value;
			arrayLike.length += 1;
			return arrayLike;
		});
		var arrayLike = musher(0,1,2);
		Assert.areSame(3,arrayLike.length,'length','reducer sucks');
		Assert.areSame(0,arrayLike[0],'reducer sucks');
		Assert.areSame(1,arrayLike[1],'reducer sucks');
		Assert.areSame(2,arrayLike[2],'reducer sucks');
	}
});
test({
	name: 'request',
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
});
test({
	name: 'query_string_from_obj',
	'works': function () {
		Assert.areSame('a=1&a=1&b=2&c=3',o.remote.query_string_from_obj([
			{key: 'a',value: 1},
			{key: 'a',value: 1},
			{key: 'b',value: 2},
			{key: 'c',value: 3}
		]));
	}
});
test({
	name: 'query_string_obj',
	'works': function () {
		var obj1 = o.remote.query_string_obj({
			a: 1,
			b: 2
		});
		var obj2 = [
			{key: 'a', value: 1},
			{key: 'b', value: 2}
		];
		Assert.areSame(obj1[0].key,obj2[0].key);
		Assert.areSame(obj1[0].value,obj2[0].value);
		Assert.areSame(obj1[1].key,obj2[1].key);
		Assert.areSame(obj1[1].value,obj2[1].value);
	}
});
test({
	name: 'request',
	_should: {
		ignore: {
			testRequestHeaders: true,
			testPost: true
		}
	},
	testBasic: function () {
		var that = this;
		o.remote.request({
			url: 'ajaxtest.xml',
			on_complete: function (responseObj) {
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
			on_complete: function (responseObj) {
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
			on_complete: function (responseObj) {
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
			on_complete: function (responseObj) {
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
			on_success: function (responseObj,options) {
				that.resume();
				delete options.on_complete;
			}
		});
		this.wait();
	},
	testOnFailure: function () {
		var that = this;
		var myRequest = o.remote.request({
			url: 'asdfasdfasdfa',
			on_failure: function (responseObj,options) {
				that.resume();
				delete options.on_complete;
			}
		});
		this.wait();
	},
	testPost: function () {
		var that = this;
		var myRequest = o.remote.request({
			url: 'ajaxtest.xml',
			post: 'some vars, etc',
			on_success: function (responseObj) {
				that.resume();
			}
		});
		this.wait();
	},
	testResponseXML: function () {
		var that = this;
		var myRequest = o.remote.request({
			url: 'ajaxtest.xml',
			on_success: function (responseObj) {
				Assert.areSame(responseObj.responseXML.childNodes[0].nodeName.toLowerCase(),'root','didnt get root object from xml');
				that.resume();
			}
		});
		this.wait();
	}
});
test({
	name: 'store',
	'store': function () {
		var global = {prototype: {}},
		name = 'meganubs',
		fn = function () {return this.kittens;};
		o.store(global,name,fn);
		Assert.areSame(o.meganubs({kittens: 'what'}),'what');
		Assert.areSame(global.prototype[o.qname(name)],fn);
		Assert.areSame(o.meganubs.toString(),o.qname(name));
	},
	'documentation': function () {

		o.store(Number,'double',function () {
			return this * 2;
		});


		Assert.areSame(2,(1)[o.double]()); // 2;

		Assert.areSame(2,o.double(1)); // 2

	}
});
test({
	name: 'string',
	'test string': function () {
		Assert.areSame('abcd',o.string('a','b','c','d'),'string failed');
	}
});
test({
	name: 'supplant',
	'supplant': function () {
		Assert.areSame('a: 1, b: 2, c: 3','a: {a}, b: {b}, c: {c}'[o.supplant]({
			a: 1,
			b: 2,
			c: 3
		}));
	}
});
test({
	name: 'take',
	'take': function () {

		var join = o.take(Array.prototype.join);

		Assert.areSame(join([1,2,3]),'1,2,3');

	}
});
test({
	name: 'trim',
	'trim': function () {
		Assert.areSame('123','      123     				'[o.trim]());
	}
});
test({
	name: 'type_of',
	'works': function () {
		Assert.areSame('object',o.type_of({}));
		Assert.areSame('node',o.type_of(document.createElement('div')));
		Assert.areSame('array',o.type_of([]));
		Assert.areSame('null',o.type_of(null));
	},
	'works for regex': function () {
		Assert.areSame('object',o.type_of(/asdf/));
	}
});
test({
	name: 'unique',
	'unique': function () {
		Assert.areSame([1,1,2,2,3,3,4,5][o.unique]().length,5);
	}
});
test({
	name: 'update',
	'works on arrays': function () {
		var my_array = [1,2,3],
		new_data = [4,5,6];
		my_array[o.update](new_data);
		Assert.areSame(my_array[0],new_data[0]);
		Assert.areSame(my_array[1],new_data[1]);
		Assert.areSame(my_array[2],new_data[2]);
	},
	'works on generics': function () {
		var my_obj = {
			'a': 1,
			'b': 2,
			'c': 3
		},
		new_obj = {
			a: 2,
			b: 3,
			c: 4
		};
		Assert.areSame(2,new_obj.a);
		Assert.areSame(3,new_obj.b);
		Assert.areSame(4,new_obj.c);
	},
	'kills it all': function () {
		var my_obj = {
			'a': 1,
			'b': 2,
			'c': 3
		},
		my_new_obj = {
			'A': 2,
			'B': 3,
			'C': 4
		};
		o.update(my_obj,my_new_obj);
		Assert.areSame(2,my_obj.A);
		Assert.isUndefined(my_obj.a);
		Assert.areSame(3,my_obj.B);
		Assert.isUndefined(my_obj.b);
		Assert.areSame(4,my_obj.C);
		Assert.isUndefined(my_obj.c);

	}
});
test({
	name: 'with',
	'dunno': function () {
		var value = 1,
		my_obj = {
			a: value
		};
		with (my_obj) {
			var my_fn = function () {
				return a;
			};
			Assert.areSame(value,my_fn());
		};
	},
	'stuff doesnt sneak onto the object': function () {
		var my_obj = {};
		with (my_obj) {
			var a = 1;
			b = 2;
			this.c = 3;
		}
		Assert.isUndefined(my_obj.a);
		Assert.isUndefined(my_obj.b);
		Assert.isUndefined(my_obj.c);
	},
	'with nested withs, the stack is stacked properly': function () {
		var outer = {
			a: 1
		},
		inner = {
			a: 2,
			b: 3
		};
		with (outer) {
			Assert.areSame(1,a);
			with (inner) {
				Assert.areSame(2,a);
				Assert.areSame(3,b);
			}
		}
	},
	'code inside a with can add properties the stack object and access them immediately as in scope variables': function () {
		var obj = {
		};
		with (obj) {
			obj.a = 1;
			Assert.areSame(a,1);
			obj.b = {
				c: {
					d: 2
			 	}
			};
			Assert.areSame(2,b.c.d);
		}
	},
	_should: {
		error: {
			'functions defined outside of a with block and called inside a with blocks dont have access to the with blocks special scope vars': true
	 	}
 	},
	'functions defined outside of a with block and called inside a with blocks dont have access to the with blocks special scope vars': function () {
		var my_fn = function () {
			Assert.isUndefined(a);
		};
		with ({a: 1}) {
			my_fn();
		}
	},
	'a with can be used with a var': function () {
		var my_fn = function (scope) {
			with (scope) {
				c += a + b;
				return c;
			}
		},
		my_scope = {a: 1, b: 2, c: 3}
		Assert.areSame(6,my_fn(my_scope));
		Assert.areSame(6,my_scope.c);
	},
	'when setting a var, the version in the with is set first': function () {
		var a = 1;
		with ({a: 2}) {
			Assert.areSame(2,a);
		}
	},
	'local vars can be deleted': function () {
		var local = {};
		with (local) {
			local.a = 1;
			Assert.isNotUndefined(a);
			delete local.a;
			try {
				Assert.isUndefined(a);
			} catch (e) {
				return;
			}
			Assert.fail();
		}
	},
	'local vars are assigned to the with scope': function () {
		var a = {d: undefined};
		with (a) {
			var b = 1;
			c = 1;
			d = true;
		}
		Assert.isUndefined(a.b,'b');
		Assert.isUndefined(a.c,'c');
		Assert.isTrue(a.d,'d');
	},
	'what happens to property names in the with obj that arent allowed variables?': function () {
		var value;
		with ({'!@#!@kas;dkf': function () {}}) {
			value = true;
		}
		Assert.isTrue(true);
	},
	'asdf': function () {
		var my_obj = {};
		with (my_obj) {
			blah = 1;
		}
		Assert.isUndefined(my_obj.blah);
	}
});
