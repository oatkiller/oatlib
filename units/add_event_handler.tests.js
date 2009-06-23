tests.add_event_handler = [
	{
		name: 'add_event_handler',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test add_event_handler': function () {
			var worked = false,
			button = document.createElement('button');
			o.add_event_handler(button,'click',function (e) {
				worked = true;
			});
			YAHOO.util.UserAction.click(button); 
			Assert.isTrue(worked);
		}
	}
];
