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
	'you can reference properties of the object as in scope local vars': function () {
		with (o.dom) {
			Assert.isTrue(is_tag_name(document.createElement('div'),'DIV'));
		}
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
	}
});
