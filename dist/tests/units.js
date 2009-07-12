tests.core = [
	{
		name: 'core',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test core': function () {
			Assert.areEqual('http://oatlab.com/oatlib/v2',o);
		}
	}
];
tests.filter_delegates_by_descendant = [
	{
		name: 'filter_delegates_by_descendant',
		setUp: function () {
			o = window['http://oatlab.com/oatlib/v2'];
		},
		'testworks': function () {
			var my_div = document.createElement('div');
			my_div.innerHTML = '<span><em></em></span>';
			var results = o.dom.event.filter_delegates_by_descendant([
				{ancestor: my_div},
				{ancestor: document.body}
			],my_div.firstChild.firstChild);
			Assert.areSame(results[0].ancestor,my_div);
			Assert.areSame(results.length,1);
		}
	}
];
