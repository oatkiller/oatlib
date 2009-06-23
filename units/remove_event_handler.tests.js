tests.remove_event_handler = [
	{
		name: 'remove_event_handler',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test remove_event_handler': function () {
			var worked = true,
			button = document.createElement('button');
			o.remove_event_handler(button,'click',function (e) {
				worked = false;
			});
			YAHOO.util.UserAction.click(button); 
			Assert.isTrue(worked);
		}
	}
];
