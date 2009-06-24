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
tests.cancel_event = [
	{
		name: 'cancel_event',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test cancel_event': function () {
			var worked = null,
			button = document.createElement('button'),
			div = document.createElement('div');
			div.appendChild(button);
			button.onclick = function (e) {
				worked = true;
				o.dom.cancel_event(e);
			};
			div.onclick = function (e) {
				worked = false;
			};
			YAHOO.util.UserAction.click(button);
			Assert.areSame(worked,true);
		}
	}
];
