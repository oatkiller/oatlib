test({
	name: 'add_listener',
	'runs': function () {
		var ran = false,
		that = this;
		o.dom.event.add_listener(document.body,'click',function () {
			ran = true;
		},true);
		YAHOO.util.UserAction.click(document.body);	
		this.wait(function () {
			Assert.isTrue(ran);
		},10);
	}
});
