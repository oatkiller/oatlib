// For kicks
deepEq = (function () {
  var FAIL = {};
  return function (/* arg1, arg2, ... */) {
    if (!arguments.length) {
      return true;
    }
    var result = Array.prototype.slice.call (arguments).reduce (function (prev, curr) {
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
          if (!deepEq (curr [x], prev [x])) {
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
