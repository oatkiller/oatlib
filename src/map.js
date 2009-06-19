$$_map = oatlib[$map] || function (arrayLike,fn) {
	var that = arrayLike, length = that[$length],
	response = new $$Array(length), i = 0;
	for (; i < length; i++) {
		response[i] = fn[$call](that,that[i],i,that);
	}
	return response;
};
