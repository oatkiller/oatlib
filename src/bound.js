o.bound = function (n,l,u) {
	return typeof n !== 'number' ? l : n < l ? l : n > u ? u : n;
};
