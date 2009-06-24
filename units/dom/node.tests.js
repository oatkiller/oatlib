tests.node = [
	{
		name: 'node',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test node': function () {
			var myNode = o.dom.node('something');
			Assert.areSame(3,myNode.nodeType,'node failed to get node');
		}
	}
];
