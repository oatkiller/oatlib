test({
	name: 'core',
	'core': function () {
		Assert.areEqual('http://oatlab.com/oatlib/v2',o);
	},
	'qname': function () {
		var sample_name = 'butt';
		Assert.areSame(o+':::'+sample_name,o.qname(sample_name));
	},
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
	}
});
test({
	name: 'K',
	'works': function () {
		Assert.areSame(Math,o.K(Math));
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
	}
});
test({
	name: 'array',
	setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
	'works': function () {
		var ra = o.array({length: 3, '0': 'a', '1': 'b', '2': 'c'});
		Assert.isNotUndefined(ra.push);
		Assert.areSame(ra[0],'a');
		Assert.areSame(ra[1],'b');
		Assert.areSame(ra[2],'c');
		Assert.areSame(ra.length,3);
	}
});
test({
	name: 'bind',
	setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
	'works': function () {
		var myObj = {name: 'robert'},
		a = 'a',
		b = 'b',
		getName = function (a,b) {return this.name + a + b;};
		Assert.areSame(myObj.name + a + b,getName[o.bind](myObj,a)(b),'bind failed');
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
	name: 'curry',
	setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
	'curry': function () {
		var add = function (a,b,c) {return a + b + c;},
		add4 = add[o.curry](4);
		Assert.areSame(7,add4(1,2),'curry failed :(');
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
		Assert.areSame(1,count,'called too many times'); }
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
	name: 'each',
	'each': function () {
		var other_one = [];
		[1,2,3,4][o.each](function (item) {
			other_one.push(item);
			Assert.areSame(this.length,this[this.length - 1]);
		});
		Assert.isTrue(other_one.length === 4);
	}
});
test({
	name: 'error',
	_should: {
		error: {
			'test that error throws an error?': true
		}
	},
	'that error throws an error?': function () {
		o.error('nubs');
	}
});
test({
	name: 'every',
	'every': function () {
		var answer = [1,true,'yes',undefined][o.every](function (a) {return a;});
		Assert.isFalse(answer);
		answer = [1,true,'yes',2][o.every](function (a) {return a;});
		Assert.isTrue(answer);
	}
});
test({
	name: 'filter',
	'filter': function () {
		var results = [1,2,3,4][o.filter](function (a) {return a % 2;});
		Assert.areSame(results.length,2);
		Assert.areSame(results[0],1);
		Assert.areSame(results[1],3);
	}
});
test({
	name: 'find',
	'works': function () {
		var answer = [
			{id: 1, value: false},
			{id: 2, value: false},
			{id: 3, value: true},
			{id: 4, value: false}
		][o.find](function (obj) {return obj.value;});
		Assert.areSame(answer.id,3);
	}
});
test({
	name: 'for_each',
	'for_each': function () {
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
});
test({
	name: 'get_flattened',
	'getFlattened': function () {
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
	'getFlattened in take form': function () {
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
	name: 'inject',
	'inject': function (){
		Assert.areSame([2,2,2][o.inject](1,function (memo,a) {return memo * a;}),8);
		Assert.areSame(o.inject([2,2,2],1,function (memo,a) {return memo * a;}),8);
	}
});
test({
	name: 'injector',
	'injector': function () {
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

	}
});
test({
	name: 'is not false',
	'works': function () {
		Assert.isTrue(o.is_not_false('asdf'));
		Assert.isFalse(o.is_not_false(false));
		Assert.isTrue(o.is_not_false(null));
	},
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
	'map': function () {
		var original = [2,4,6],
		mapped = original[o.map](function (e) {
				return e * 2;
		});

		for (var i = 0, length = original.length; i < length; i++) {
			Assert.areSame(original[i] * 2,mapped[i]);
		}
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

	}
});
test({
	name: 'newo.memoize',
	'new o.memoize basic usage': function () {
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
	'new o.memoize, with invalidateKey': function () {
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
	}
});
test({
	name: 'object_memo',
	'object_memo': function () {

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
	name: 'unique',
	'unique': function () {
		Assert.areSame([1,1,2,2,3,3,4,5][o.unique]().length,5);
	}
});
test({
	name: 'update',
	'works': function () {
		var my_array = [1,2,3],
		new_data = [4,5,6];
		my_array[o.update](new_data);
		Assert.areSame(my_array[0],new_data[0]);
		Assert.areSame(my_array[1],new_data[1]);
		Assert.areSame(my_array[2],new_data[2]);
	}
});
test({
	name: 'absolutize',
	'works': function () {
		var found_position = null;
		o.dom.find_position = function (my_node) {
			found_position = my_node;
			return {
				y: 10,
				x: 20
			};
		};
		node = document.createElement('div');
		node.style.width = '13px';
		node.style.height = '13px';
		var position = o.dom.absolutize(node);
		Assert.areSame(position.y,10);
		Assert.areSame(position.x,20);
		Assert.areSame(node,found_position);
		Assert.areSame(node.style.position,'absolute');
		Assert.areSame(node.parentNode,document.body);
		Assert.areSame(node.style.top,'10px');
		Assert.areSame(node.style.left,'20px');
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
			myRa = o.dom.array(cells);
			Assert.isNotUndefined(myRa.push);
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
	name: 'contains',
	'works': function () {
		var my_div = document.createElement('div');
		my_div.innerHTML = '<span></span>';
		var my_span = my_div.firstChild;
		Assert.isTrue(o.dom.contains(my_div,my_span));
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
	name: 'first_result',
	'works': function () {
		var answer = [
			{id: 1, value: true},
			{id: 2, value: true},
			{id: 3, value: false},
			{id: 4, value: false}
		][o.first_result](function (obj) {return !obj.value;});
		Assert.areSame(answer,true);
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
});
test({
	name: 'get_form_value_obj',
	'works': function () {
		var tmp_div = document.createElement('div');
		tmp_div.innerHTML = '<form method="get" action="index.html" id="my_form" onsubmit="return false;"><fiedset><input name="a" value="1" type="password" /><input name="b" value="2" type="hidden" /><input name="c" value="3" type="submit" id="push_it" /><select name="d"><optgroup label="nope"><option value="4">asdf</option></optgroup></select></fieldset></form>';
		document.body.appendChild(tmp_div);
		YAHOO.util.UserAction.click(document.getElementById('push_it'));
		var value_obj = o.dom.get_form_value_obj(document.getElementById('my_form'));
		console.log(value_obj);
		Assert.areSame('1',value_obj.a);
		Assert.areSame('2',value_obj.b);
		Assert.areSame('3',value_obj.c);
		Assert.areSame('4',value_obj.d);

	}
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
