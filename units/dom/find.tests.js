test({
	name: 'dom_find',
	'should return node if test of node returns true': function () {
		var node = {},
		test = function () {return true;};
		Assert.areSame(o.dom.find(function(){},node,test),node);

	}
});
