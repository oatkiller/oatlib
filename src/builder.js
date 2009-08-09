//= require <constructor>
//= require <reducer>
(function () {
 
  var single_builder = function (prototype) { // takes a prototype and produces a function which takes a properties object and produces an instance
    return function (properties) {
      return new (o.constructor(prototype))(properties);
    };
	};
	
	// takes one or more prototypes and returns a function which takes a properties object and produces an instance. the prototypes will all be linked, one at a time, into the instance. last arg is top proto
	o.builder = o.reducer(function () {return single_builder({});},function (a_single_builder,a_prototype) {return single_builder(a_single_builder(a_prototype));});

})();
