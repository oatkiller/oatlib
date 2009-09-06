//= require <each>
//= require <invoke>
//= require <filter>
//= require <indexOf>
//= require <only_if>
//= require <map>
//= require <memoize>
o.application_event = function () {
	var property = o.qname('application_event_type');
	return {
		bees: [],
		get_bees_by_type: function (type) {
			return this.bees[o.filter](function (bee) {
				return bee.type === type;
			});
		}[o.memoize](),
		subscribe: function (fn) {
			var bees = this.bees;
			bees.push(fn);

			// delete the cache
			delete this.get_bees_by_type[o.properties.memo][fn[property]];

			return function () {
				bees.splice(bees[o.indexOf](fn),1);
			};
	 	},
		multi_subscribe: function (hash) {
		 	var that = this,
			cancel_fns = [];
			o.each(hash,function (fn,key) {
				fn[property] = key;
				cancel_fns.push(that.subscribe(fn));
			});
			return function () {
				cancel_fns[o.each](o.invoke);
			};
	 	},
		fire: function (payload) {
			var that = this,
			args = arguments;
			var bees = payload.type !== undefined ? that.bees[o.filter](function (bee) {
				return bee[property] === payload.type;
			}) : that.bees;
			return bees[o.map](function (bee) {
				return bee.apply(that,args);
			});
		}
	};
};
