$$_inject = oatlib[$inject] = function (memo, iterator) { // takes a memo, an iterator function and any number of objects to be combined somehow. for each arg after iterator, iterator is called with the memo as its first param and the iterator as its second. ultimately the memo is returned. see unit tests for example
	for (var i = 2, length = arguments[$length]; i < length; i++) {
		memo = iterator(memo,arguments[i]);
	}
	return memo;
};
