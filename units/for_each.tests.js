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
