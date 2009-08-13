test({
	name: 'core',
	'core': function () {
		Assert.areEqual('http://oatlab.com/oatlib/v2',o);
	},
	'qname': function () {
		var sample_name = 'butt';
		Assert.areSame(o+':::'+sample_name,o.qname(sample_name));
	}
});
test({
	name: 'find',
	'works for arrays': function () {
		var answer = [
			{id: 1, value: false},
			{id: 2, value: false},
			{id: 3, value: true},
			{id: 4, value: false}
		][o.find](function (obj) {return obj.value;});
		Assert.areSame(3,answer.id);
	}
});
