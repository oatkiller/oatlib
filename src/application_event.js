//= require <each>
//= require <rcurry>
//= require <invoke>
o.application_event = function () {
	return {
		bees: [],
		subscribe: function (fn) {
			var bees = this.bees;
			bees.push(fn);
			return function () {
				bees.splice(bees[o.indexOf](fn),1);
			};
	 	},
		fire: function (payload) {
			var that = this;
			that.bees[o.each](o.invoke[o.rcurry](payload));
		}
	};
};
