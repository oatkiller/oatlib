//= require <combine>
//= require <is_array>
//= require <each>
(function () {
 	var generic_fn = function (payload) {
		var keys = [],
		that = this;
		// this wont work in 1 step in IE
		o.each(that,function (element,key) {
			keys.push(key);
		});
		keys[o.each](function (key) {
			delete that[key];
		});
		o.combine(that,payload);
		return that;
	},
	array_fn = function (payload) {
		this.splice.apply(this,[0,this.length].concat(payload));
		return this;
	};
	o.store(Array,'update',function (payload) {
		return o.is_array(this) ? array_fn.apply(this,arguments) : generic_fn.apply(this,arguments);
	});
})();
