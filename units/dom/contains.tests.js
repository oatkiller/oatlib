tests.contains = [
	{
		name: 'contains',
		setUp: function () {
			o = window['http://oatlab.com/oatlib/v2'];
		},
		testitworks: function () {
		 	// cant really unit test this as its written so this is a functional / integration tests. its still likely to catch any bugs cause this is a really thin method
			var my_div = document.createElement('div');
			my_div.innerHTML = '<span></span>';
			var my_span = my_div.firstChild;
			Assert.isTrue(o.dom.contains(my_div,my_span));
		}
	}
];
