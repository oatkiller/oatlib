var deepEq = (function () {
  var FAIL = {};
  var deepEq = function (/* arg1, arg2, ... */) {
    if (arguments.length <= 1) {
      return true;
    }
    var args = Array.prototype.slice.call (arguments);
    var result = args.reduce (function (prev, curr) {
      if (prev === FAIL) {
        return FAIL;
      }
      if (prev === curr) {
        return curr;
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
      return FAIL;
    });
    return result !== FAIL;
  };
  return deepEq;
}) ();
