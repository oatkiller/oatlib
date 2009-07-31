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
