/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  let ansObj = {};
  let key;
  return function (...args) {
    key = [...args].join(",");
    if (key in ansObj) return ansObj[key];
    else {
      ansObj[key] = fn(...args);
    }
    return ansObj[key];
  };
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */