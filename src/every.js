//= require <hasOwnProperty>
//= require <each>
o.store(Array,'every',function (fn) {
	var result = true, that = this;
	o.each(this,function (element,i) {
		if (fn.call(this,element,i,that) === false) {
			result = false;
			return o.each_break;
		}
	});
	return result;
});
