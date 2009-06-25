tests.add_event_listener = [
	{
		name: 'add_event_listener',
		setUp: function () {
			o = window['http://oatlab.com/oatlib/v2'];
		},
		'test schedule_purge should call add_event_listener, passing it the window, unload, and a function which calls purge': function () {
			
			var args,
			purged = false;
			o.dom.event.add_event_listener = function () {
				args = arguments;
			};

			o.dom.event.purge = function () {
				purged = true;
			};

			o.dom.event.schedule_purge();

			Assert.areSame(args[0],window);
			Assert.areSame(args[1],'unload');

			args[2]();

			Assert.isTrue(purged);

		}
	}
];

