/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  let map = { "}": "{", ")": "(", "]": "[" };
  if (s.length === 0) return true;
  stack.push(s[0]);
  for (let i = 1; i < s.length; i++) {
    if (s[i] in map) {
      if (map[s[i]] === stack[stack.length - 1]) {
        stack.pop();
      } else {
        stack.push(s[i]);
      }
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length === 0;
};