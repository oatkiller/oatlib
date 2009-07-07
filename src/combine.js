//= require <inject>
//= require <curry>
(function () {

	var iterator = function (test,resultObj,anObj) { // combines two objects
		for (var propertyName in anObj) {
			if (test(anObj,propertyName)) {
				resultObj[propertyName] = anObj[propertyName];
			}
		}
		return resultObj;
	},
	combinator = function (anIterator,resultObj) { // combines any number of objects
		return $$_slice[$call](arguments,2)[$$_o$inject](resultObj,anIterator);
	};

	$$_combine = o[$combine] = combinator[$$_o$curry](iterator[$$_o$curry](function (anObj,propertyName) { // curries combinator with a test to make sure the properties are on the subject argument directly, as opposed to being on its prototype
		return anObj[$hasOwnProperty](propertyName);
	}));
	//
	// curries combinator with a test that takes every property, including ones on the subject arguments __proto__
	$$_super_combine = o[$super_combine] = combinator[$$_o$curry](iterator[$$_o$curry](function () {return $$true;}));

})();
