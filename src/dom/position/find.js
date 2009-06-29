//= require <string>
//= require <error>

$$_store(function (node) {

	if (node[$offsetParent]) {
		var left_offset_sum = top_offset_sum = 0;

		if (node[$offsetParent]) {
			do {
				left_offset_sum += node[$offsetLeft];
				top_offset_sum += node[$offsetTop];
			} while (node = node[$offsetParent]);

			return [left_offset_sum,top_offset_sum];
		}
	}
	return $$false;

},$find,[$dom,$position]);
