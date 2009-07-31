//= require <language/prototypes/array>
o.store(Array,'last',function () {
	return this[this.length - 1];
});
