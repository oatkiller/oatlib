//= require <take>
//= require <join>
(function () {
	var join = o[$take]($$_join);
	$$_store(function (fn,memo) {
		memo = memo || {};
		return function () {
			var key = join(arguments);
			return memo[$hasOwnProperty](key) ? memo[key] : (memo[key] = fn[$apply](this,arguments));
		};
	},$memoize);
})();
