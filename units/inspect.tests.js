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
