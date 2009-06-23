tests.core = [
	{
		name: 'core',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test core': function () {
			Assert.areSame('http://oatlab.com/oatlib/v2'+':::'+'dumb',o('dumb'));
			Assert.areEqual('http://oatlab.com/oatlib/v2',o);
		}
	}
];
tests.add_event_handler = [
	{
		name: 'add_event_handler',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test add_event_handler': function () {
			var worked = false;
			button = document.createElement('button');
			o.add_event_handler(button,'click',function (e) {
				worked = true;
			});
			YAHOO.util.UserAction.click(button);
			Assert.isTrue(worked);
		}
	}
];
