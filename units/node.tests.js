tests.node = [
	{
		name: 'node',
		'test node': function () {
			oatlib(function (o) {
				var myNode = o.node('something');
				Assert.areSame(3,myNode.nodeType,'node failed to get node');
			});
		}
	}
];
