//= require <color/reference>
(function () {
	o.color.rgb_to_hsl = function () {

		// Convert the RBG values to the range 0-1
		var r = arguments[0] / 255,
		g = arguments[1] / 255,
		b = arguments[2] / 255,
		// Find min and max values of R, B, G
		min = Math.min(r,g,b),
		max = Math.max(r,g,b),
		// L = (maxcolor + mincolor)/2 
		l = (min + max) / 2,
		s,
		h;
		// If the max and min colors are the same (ie the color is some kind of grey), S is defined to be 0, and H is undefined but in programs usually written as 0
		if (min === max) {
			s = 0;
			h = undefined;
		} else {
			// Otherwise, test L.
			// If L < 0.5, S=(maxcolor-mincolor)/(maxcolor+mincolor)
			// If L >=0.5, S=(maxcolor-mincolor)/(2.0-maxcolor-mincolor)
			// For the example, L=0.45 so S=(.83-.07)/(.83+.07) = .84
			s = l < .5 ? (max - min) / (max + min) : (max - min) / (2 - max - min);
		}

		// If R=maxcolor, H = (G-B)/(maxcolor-mincolor)
		// If G=maxcolor, H = 2.0 + (B-R)/(maxcolor-mincolor)
		// If B=maxcolor, H = 4.0 + (R-G)/(maxcolor-mincolor)
		// For the example, R=maxcolor so H = (.07-.07)/(.83-.07) = 0
		switch (max) {
			case r: h = (g - b) / (max - min); break;
			case g: h = 2 + (b - r) / (max - min); break;
			case b: h = 4 + (r - g) / (max - min); break;
		}

		// convert L and S back to percentages, and H into an angle in degrees (ie scale it from 0-360). From the computation in step 6, H will range from 0-6. RGB space is a cube, and HSL space is a double hexacone, where L is the principal diagonal of the RGB cube. Thus corners of the RGB cube; red, yellow, green, cyan, blue, and magenta, become the vertices of the HSL hexagon. Then the value 0-6 for H tells you which section of the hexgon you are in. H is most commonly given as in degrees, so to convert
		// H = H*60.0
		// If H is negative, add 360 to complete the conversion. 
		h *= 60;
		h = h < 0 ? h + 360 : h;
		
		return {
			h: h,
			s: s,
			l: l
		};
	};
})();
