//= require <take>
//= require <join>
//= require <language/prototypes/function>
(function () {
	var join = $$_take($$_join),
	fn = function (memo) {
		memo = memo || {};
		var that = this;
		return function () {
			var key = join(arguments);
			return memo[$hasOwnProperty](key) ? memo[key] : (memo[key] = that[$apply](this,arguments));
		};
	};

	$$_memoize = o[$memoize] = $$_take(fn);
	$$_o$memoize = $$_store($$_language_prototypes_function,$memoize,fn);
	$$_memoize[$toString] = function () {return $$_o$memoize;};
	
})();
