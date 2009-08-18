test({
	name: 'qname',
	'documentation': function () {
		// 'http://oatlab.com/oatlib/v2:::my_property_name'
		var my_property_name = o.qname('my_property_name');

		// this won't collide with any other scripts
		document.body[my_property_name] = 'my data';
		Assert.areSame('my data',document.body[my_property_name]);
	}
});
