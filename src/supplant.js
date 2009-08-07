(function () {
	var regex = (o.supplant_regex = /{([^{}]*)}/g);
	o.store(String,'supplant',function (o) {
		return this.replace(regex,
			function (a,b) {
				var r = o[b];
				return typeof r === 'string' || typeof r === 'number' ? r : a;
			}
		);
	});
})();
