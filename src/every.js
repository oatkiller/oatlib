o.store(Array,'every',function (fn) {
	var length = this.length, i = 0;
	for (; i < length; i++) {
		if (!fn.call(this,this[i],this)) {
			return false;
		}
	}
	return true;
});
