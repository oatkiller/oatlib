o.store(String,'trim',function () {
	return this.replace(/^\s+|\s+$/g,empty_string);
});
