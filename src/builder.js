//= require <constructor>
//= require <injector>
(function () {
 
  var singleBuilder = function (prototype) { // takes a prototype and produces a function which takes a properties object and produces an instance
    return function (properties) {
      return new (o[$constructor](prototype))(properties);
    };
	};
	
	// takes one or more prototypes and returns a function which takes a properties object and produces an instance. the prototypes will all be linked, one at a time, into the instance. last arg is top proto
	$$_store(o[$injector](function () {return singleBuilder({});},function (aSingleBuilder,aPrototype) {return singleBuilder(aSingleBuilder(aPrototype));}),$builder);

})();
