tests.core = [
	{
		name: 'core',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test core': function () {
			Assert.areEqual('http://oatlab.com/oatlib/v2',o);
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
			console.log('!',this.element.className,'!');
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
