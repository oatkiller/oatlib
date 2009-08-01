test({
	name: 'class_name_test_regex',
	'works': function () {
		Assert.areSame(o.dom.class_name_test_regex('nubs').source,'(^|\\s+)nubs(\\s+|$)');
	}
});
