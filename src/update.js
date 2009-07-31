(function () {
	o.store(Array,'update',function (payload) {
		this.splice.apply(this,[0,this.length].concat(payload));
		return this;
	});

})();
