test({
	name: 'cancel',
	works: function () {
		var my_div = document.createElement('div');
		my_div.innerHTML = '<p><span><b></b></span></p>';
		var p = my_div.getElementsByTagName('p')[0],
		span = my_div.getElementsByTagName('span')[0],
		b = my_div.getElementsByTagName('b')[0];

		var failed = false;

		p.onclick = function () {
			failed = true;
		};

		span.onclick = function (e) {
			o.dom.event.cancel(o.dom.event.get_event(e));
		};

	 	YAHOO.util.UserAction.click(b);
		this.wait(function () {
			Assert.isFalse(failed);
		},10);
	}
});
