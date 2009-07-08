tests.get_abstraction = [
	{
		name: 'get_abstraction',
		setUp: function () {
			o = window['http://oatlab.com/oatlib/v2'];
		},
		'test that get_abstraction returns an obj with the passed obj as its .event and that it has all the objs in its roto that its supposed to': function () {
			var e = {
				its: 'me'
			},
			abstraction = o.dom.event.get_abstraction(e);
			Assert.isTrue('get_event' in abstraction);
			Assert.isFalse(abstraction.hasOwnProperty('get_event'))
			Assert.areSame(abstraction.get_event(),e);
		}
	}
];
