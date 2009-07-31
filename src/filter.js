o.store(Array,'filter',function (fn) {
	var length = this.length, i = 0, results = [], an;
	for (; i < length; i++) {
		an = this[i];
		if (fn.call(this,an,this)) {
			results.push(an);
		}
	}
	return results;
});
