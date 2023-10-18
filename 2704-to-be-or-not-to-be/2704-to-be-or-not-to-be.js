/**
 * @param {string} val
 * @return {Object}
 */

function expect(val) {
  let returnObj = {
    toBe: (num) => {
      if (val === num) return true;
      else throw new Error("Not Equal");
    },
    notToBe: (num) => {
      if (val !== num) return true;
      else throw new Error("Equal");
    },
  };
  return returnObj;
}

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */