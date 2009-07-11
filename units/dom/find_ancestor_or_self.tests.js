tests.find_ancestor_or_self = [
	{
		name: 'find_ancestor_or_self',
		setUp: function () {
			o = window['http://oatlab.com/oatlib/v2'];
		},
		testitworks: function () {
		 	// cant really unit test this as its written so this is a functional / integration tests. its still likely to catch any bugs cause this is a really thin method
			var my_div = document.createElement('div');
			my_div.innerHTML = '<span></span>';
			var my_span = my_div.firstChild;
			Assert.isFalse(o.dom.find_ancestor_or_self(my_span,function (n) {
				return false;
			},my_div));
		},
		'test ancestor isnt checked': function () {
			var my_div = document.createElement('div');
			my_div.innerHTML = '<span><em></em></span>';
			var my_span = my_div.firstChild,
			my_em = my_span.firstChild;
			Assert.isFalse(o.dom.find_ancestor_or_self(my_em,function (n) {
				return n === my_div;
			},my_div));

		},
		'test checks self': function () {
			var my_div = document.createElement('div');
			my_div.innerHTML = '<span><em></em></span>';
			var my_span = my_div.firstChild,
			my_em = my_span.firstChild;
			Assert.areSame(o.dom.find_ancestor_or_self(my_em,function (n) {
				return n === my_em;
			},my_div),my_em);
		}
	}
];
