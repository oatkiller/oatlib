//= require <hasOwnProperty>
//= require <iterate>
o.store(Array,'every',function (fn) {
	var result = true, that = this;
	o.iterate(this,function (element,i) {
		if (fn.call(this,element,i,that) === false) {
			result = false;
			return o.iterate_break;
		}
	});
	return result;
});
