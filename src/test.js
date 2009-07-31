o.test = function (n) {
	return n !== 0 ? arguments.callee(n - 1) : 0;
};
