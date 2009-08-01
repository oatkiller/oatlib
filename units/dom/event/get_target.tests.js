test({
	name: 'get_target',
	setUp: function () {
		o.dom.event.setup_get_target();
	},
	'get_target should return e.target if it exists': function () {
		var target = {},
		obj = {target: target},
		fn = o.dom.event.get_target,
		result = fn(obj);
		result = fn(obj);
		Assert.areSame(result,target);
	},
	'get_target should return e.srcElement if target doesnt exist': function () {
		var target = {},
		obj = {srcElement: target},
		fn = o.dom.event.get_target,
		result = fn(obj);
		result = fn(obj);
		Assert.areSame(result,target);
	}
});
