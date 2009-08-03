//= require <each>
//= require <indexOf>
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
		multi_subscribe: function (hash) {
		 	var that = this;
			o.each(hash,function (fn,key) {
				that.subscribe(fn[o.before](function (data) {
					return data.type === key;
				}));
			});
	 	},
		fire: function () {
			var that = this,
			args = arguments;
			that.bees[o.each](function (bee) {
				bee.apply(that,args);
			});
		}
	};
};
