const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '', counter = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i + 1] == str[i]) {
      counter++;
    } else {
      if (counter <= 1) { result += str[i] } else {
        result += counter + str[i];
      }
      counter = 1;
    }
  }
  return result;
}

module.exports = {
  encodeLine
};
