tests.add_event_listener = [
	{
		name: 'add_event_listener',
		setUp: function () {
			o = window['http://oatlab.com/oatlib/v2'];
			//Assert.isTrue(isEmpty(o.dom.event.listeners));
			o.dom.event.event_listeners.length = 0;
			o.dom.event.schedule_purge = function () {};
		},
		'test add_event_listener should try to add listener': function () {
			var tried_to_add = false;
			o.dom.event.add_handler = function () {
				tried_to_add = true;
			};
			o.dom.event.add_listener(document.body,'click',function (e) {});
			Assert.isTrue(tried_to_add);
		},
		'test add_event_listener should record the signature': function () {

			var element = document.body,
			type = 'click',
			fn = function () {},
			bubble = false;

			o.dom.event.add_listener(element,type,fn,bubble);

			var signature = o.dom.event.event_listeners[0];
			Assert.areSame(signature[0],element);
			Assert.areSame(signature[1],type);
			Assert.areSame(signature[2],fn);
			Assert.areSame(signature[3],bubble);
		},
		'test add_event_listener should call schedule_purge': function () {
			var scheduled = false;
			o.dom.event.schedule_purge = function () {
				scheduled = true;
			};
			o.dom.event.add_listener(document.body,'click',function (e) {});
			Assert.isTrue(scheduled);

		}
	}
];
