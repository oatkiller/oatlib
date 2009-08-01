//= require <dom/reference>
//= require <error>
o.dom.parse_pixel_value = function (value) {
	var minus_px = value.replace(/px$/);
	if (value !== minus_px) {
		return parseFloat(minus_px);
	}
	o.error('couldnt get pixel value from: ',value);
};
