test({
	name: 'store',
	'store': function () {
		var global = {prototype: {}},
		name = 'meganubs',
		fn = function () {return this.kittens;};
		o.store(global,name,fn);
		Assert.areSame(o.meganubs({kittens: 'what'}),'what');
		Assert.areSame(global.prototype[o.qname(name)],fn);
		Assert.areSame(o.meganubs.toString(),o.qname(name));
	}
});
