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
	},
	'documentation': function () {

		// create Number.prototype.double, but use namespacing, and store a take form of the same fn
		o.store(Number,'double',function () {
			return this * 2;
		});

		// take doesnt store the fn's at their name.
		// for example, double is:
		//	http://oatlab.com/oatlib/v2:::double
		// o.double's toString returns that qualified namespace
		
		Assert.areSame(2,(1)[o.double]()); // 2;

		// o.double is the same fn, but in the take form
		// in other words the number isnt this, but the first param
		Assert.areSame(2,o.double(1)); // 2

	}
});
