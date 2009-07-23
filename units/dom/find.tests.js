tests.dom_find = [
	{
		name: 'dom_find',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test should return node if test of node returns true': function () {
			var node = {},
			test = function () {return true;};
			Assert.areSame(o.dom.find(function(){},node,test),node);

		}
	}
];
