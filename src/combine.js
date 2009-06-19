//= require <slice>
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
		return $$_inject[$apply]($$null,[resultObj,anIterator][$concat]($$_slice[$call](arguments,2)));
	};

	$$_combine = oatlib[$combine] = $$_curry(combinator,$$_curry(iterator,function (anObj,propertyName) { // curries combinator with a test to make sure the properties are on the subject argument directly, as opposed to being on its prototype
		return anObj[$hasOwnProperty](propertyName);
	}));

	$$_super_combine = oatlib[$super_combine] = $$_curry(combinator,$$_curry(iterator,function (anObj,propertyName) { // curries combinator with a test that takes every property, including ones on the subject arguments __proto__
		return $$true;
	}));

})();
