test({
	name: 'get_related_mouseover_target',
	setUp: function () {
		o.dom.event.setup_get_related_target();
	},
	'test get_related_mouseover_target should return fromElement if relatedTarget isnt avail': function () {
		var fromElement = {},
		e = {fromElement: fromElement},
		fn = o.dom.event.get_related_mouseover_target,
		result = fn(e);
		Assert.areSame(result,fromElement);
	},
	'test get_related_mouseover_target should return relatedTarget if avail': function () {
		var relatedTarget = {},
		fromElement = {},
		e = {relatedTarget: relatedTarget, fromElement: fromElement},
		fn = o.dom.event.get_related_mouseover_target,
		result = fn(e);
		Assert.areSame(relatedTarget,result);
	}
});
