o.store(Array,'first_index',function (fn) {
	var i = 0, length_less_1 = this.length - 1;
	while (!(i in this) && i < length_less_1) {
		i++;
	}
	return i;
});
