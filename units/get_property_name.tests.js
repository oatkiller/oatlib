test({
	name: 'get_property_name',
	'asdf': function () {
		var a_fn = function () {},
		b_fn = function () {},
		proto = {
			a: a_fn,
			b: b_fn
		},
		C = function () {};
		C.prototype = proto;
		var my_c = new C();

		Assert.areSame('a',o.get_property_name(my_c,a_fn));
		Assert.areSame('b',o.get_property_name(my_c,b_fn));

	}
});
