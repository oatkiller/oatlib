tests.call_once = [
	{
		name: 'call_once',
		setUp: function () {o = window['http://oatlab.com/oatlib/v2'];},
		'test call_once calls': function () {
			var count = 0,
			do_count = o.call_once(function () {
				count++;
			});
			do_count();
			Assert.areSame(1,count,'didnt call');
			do_count();
			Assert.areSame(1,count,'called too many times'); }
	}
];
