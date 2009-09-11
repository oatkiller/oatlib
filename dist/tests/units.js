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
	name: 'get_once',
	'get_property_name': function () {
	},
	'get_once': function () {
		var count = 0,
		proto = {
			get_it: o.get_once(function () {
				count++;
				return 1;
			})
		},
		C = function () {
		},
		my_c;
		C.prototype = proto;
		my_c = new C();
		Assert.areSame(0,count,'no count yet');
		Assert.areSame(1,my_c.get_it(),'return 1');
		Assert.areSame(1,count,'1 count now');
		Assert.areSame(1,my_c.get_it(),'still return 1');
		Assert.areSame(1,count,'still 1 count');
	}
});
