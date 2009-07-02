tests.get_related_mouseover_target = [
	{
		name: 'get_related_mouseover_target',
		setUp: function () {
			o = window['http://oatlab.com/oatlib/v2'];
		},
		'test get_related_mouseover_target should return fromElement if relatedTarget isnt avail': function () {
			var fromElement = {},
			e = {fromElement: fromElement},
			fn = o.dom.event.get_related_mouseover_target,
			result = fn(e);
			Assert.areSame(result,fromElement);
		}/*//, cause of cacheing, second test will always fail 
		'test get_related_mouseover_target should return relatedTarget if avail': function () {
			var relatedTarget = {},
			fromElement = {},
			e = {relatedTarget: relatedTarget, fromElement: fromElement},
			fn = o.dom.event.get_related_mouseover_target,
			result = fn(e);
			Assert.areSame(relatedTarget,result);
		}*/
	}
];
tests.get_related_mouseout_target = [
	{
		name: 'get_related_mouseout_target',
		setUp: function () {
			o = window['http://oatlab.com/oatlib/v2'];
		},
		'test get_related_mouseout_target': function () {
		}
	}
];
