//= require <dom/reference>

$$_dom_parse_pixel_value = $$_dom.parse_pixel_value = function (value) {
	var minus_px = value.replace(/px$/);
	if (value !== minus_px) {
		return parseFloat(minus_px);
	}
	return false;
};
