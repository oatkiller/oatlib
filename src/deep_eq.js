o.deep_eq = (function () {
  var FAIL = {};
  return function (/* arg1, arg2, ... */) {
	// i had to convert arguments to an array cause its doesnt have .slice otherwise
    var result = o.array(arguments).slice ().reduce (function (prev, curr) {
      if (prev == FAIL) {
        return FAIL;
      }
      var areObjs = prev !== null 
        && curr !== null 
        && typeof prev == 'object'
        && typeof curr == 'object'
      if (areObjs) {
        for (var x in curr) {
          if (!(x in prev)) {
            return FAIL;
          }
        }
        for (var x in prev) {
          if (!o.deep_eq (curr [x], prev [x])) {
            return FAIL;
          }
        }
        return curr;
      }
      else {
        return prev === curr
          ? curr
          : FAIL
          ;
      }
    });
    return result != FAIL;
  };
}) ();


