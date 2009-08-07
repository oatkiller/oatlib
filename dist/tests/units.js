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
	}
});
test({
	name: 'are_same',
	'works': function () {
		Assert.isTrue(o.are_same(1,1));
		Assert.isTrue(o.are_same(1,1,1));
		Assert.isFalse(o.are_same({},{}));
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
	name: 'before',
	'works': function () {
		var payload = {},
		got_this = false;
		my_fn = (function (type,payload) {
			got_this = payload;
		})[o.before](function (type) {
			return type === 'on_drop';
		});

		my_fn('blah',payload);
		Assert.isFalse(got_this);
		my_fn('on_drop',payload);
		Assert.areSame(payload,got_this);
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
	name: 'dom array_find',
	'works': function () {
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
	tearDown: function () {
		this.tmp_div.parentNode.removeChild(this.tmp_div);
	},
	'works': function () {
		var tmp_div;
		this.tmp_div = tmp_div = document.createElement('div');
		tmp_div.innerHTML = '<form method="get" action="index.html" id="my_form" onsubmit="return false;"><fiedset><input name="a" value="1" type="password" /><input name="b" value="2" type="hidden" /><input name="c" value="3" type="submit" id="push_it" /><select name="d"><optgroup label="nope"><option value="4">asdf</option></optgroup></select></fieldset></form>';
		document.body.appendChild(tmp_div);
		YAHOO.util.UserAction.click(document.getElementById('push_it'));
		var ra = o.dom.get_form_value_obj(document.getElementById('my_form'));

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
	name: 'set_css',
	'works': function () {
		var tmp_div = document.createElement('div');
		tmp_div.className = 'oh-hellz-yah-woot';
		document.body.appendChild(tmp_div);
		Assert.areSame(0,tmp_div.offsetHeight);
		var remove = o.dom.set_css('.oh-hellz-yah-woot {height: 100px;}');
		this.wait(function () {
			Assert.areSame(100,tmp_div.offsetHeight);
			remove();
		},10);
	},
	'delete works': function () {
		var tmp_div = document.createElement('div');
		tmp_div.className = 'oh-hellz-yah-woot';
		document.body.appendChild(tmp_div);
		Assert.areSame(0,tmp_div.offsetHeight);
		var delete_them = o.dom.set_css('.oh-hellz-yah-woot {height: 100px;}');
		delete_them();
		this.wait(function () {
			Assert.areSame(0,tmp_div.offsetHeight,'couldnt delete');
		},10);
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
	'works with arrays': function () {
		var other_one = [];
		[1,2,3,4][o.each](function (item) {
			other_one.push(item);
			Assert.areSame(this.length,this[this.length - 1]);
		});
		Assert.isTrue(other_one.length === 4);
	},
	'works with other objs': function () {
		var src = {
			a: 1,
			b: 2,
			c: 3
		};

		o.each(src,function (value,key) {
			src[key] = value * 2;
		});

		Assert.areSame(2,src.a);
		Assert.areSame(4,src.b);
		Assert.areSame(6,src.c);
	},
	'can break': function () {
		var count = 0,
		ra = [1,2,3,4];
		ra[o.each](function (element) {
			count++;
			if (element === 3) {
				return o.each_break;
			}
		});
		Assert.areSame(3,count);
	}
});
test({
	name: 'error',
	_should: {
		error: {
			'that error throws an error?': true
		}
	},
	'that error throws an error?': function () {
		o.error('nubs');
	}
});
test({
	name: 'every',
	'works for arrays': function () {
		var answer = [1,true,'yes',undefined][o.every](function (a) {return a;});
		Assert.isFalse(answer);
		answer = [1,true,'yes',2][o.every](function (a) {return a;});
		Assert.isTrue(answer);
	}
});
test({
	name: 'filter',
	'works on arrays': function () {
		var results = [1,2,3,4][o.filter](function (a) {return a % 2;});
		Assert.areSame(2,results.length);
		Assert.areSame(1,results[0]);
		Assert.areSame(3,results[1]);
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
		Assert.areSame(answer.id,3);
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
		var answer = o.first_result({
			a: 1,
			b: 2,
			c: 3,
			d: 4
		},function (value) {var result = value * 2; return result > 5 ? result : false;});
		Assert.areSame(6,answer);
	}
});

test({
	name: 'get_flattened',
	'works for arrays': function () {
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
	name: 'is_array',
	'works on arrays': function () {
		Assert.isTrue(o.is_array([]));
	},
	'works on non arrays': function () {
		Assert.isFalse(o.is_array({'0': 1, '1': 2, length: 2}));
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
	name: 'query_string',
	'works': function () {
		Assert.areSame('a=1&a=1&b=2&c=3',o.remote.query_string([
			{key: 'a',value: 1},
			{key: 'a',value: 1},
			{key: 'b',value: 2},
			{key: 'c',value: 3},
		]));
	}
});
test({
	name: 'xmlhttp-helper',
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
			},
			on_complete: function () {
				Assert.fail('completed before success');
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
			},
			on_complete: function () {
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
