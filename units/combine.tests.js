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
