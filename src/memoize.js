//= require <take>
//= require <join>
//= require <language/prototypes/function>
(function () {
	var join = o[$take]($$_join),
	$$_qname_memoize = $$_qname($memoize);
	// store this fn on the prototype and at o.memoize
	$$_memoize = o[$memoize] = $$_take($$_store($$_language_prototypes_function,$memoize,function (memo) {
		memo = memo || {};
		var that = this;
		return function () {
			var key = join(arguments);
			return memo[$hasOwnProperty](key) ? memo[key] : (memo[key] = that[$apply](this,arguments));
		};
	}));
	$$_memoize[$toString] = function () {return $$_qname_memoize;};

	
})();
