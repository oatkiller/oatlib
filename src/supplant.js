o.store(String,'supplant',function (o) {
	return this.replace(/{([^{}]*)}/g,
		function (a,b) {
			var r = o[b];
			return typeof r === 'string' || typeof r === 'number' ? r : a;
		}
	);
});
