const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arr1 = s1.split(''), arr2 = s2.split(''), counter = 0, obj1 = {}, obj2 = {};
  arr1.forEach(element => {
    if (!obj1[element]) {
      obj1[element] = 1;
    } else {
      obj1[element]++;
    }
  })

  arr2.forEach(element => {
    if (!obj2[element]) {
      obj2[element] = 1;
    } else {
      obj2[element]++;
    }
  })

  for (let key in obj1) {
    if (obj2[key]) {
      counter += Math.min(obj1[key], obj2[key])
    }
  }
  return counter;
}

module.exports = {
  getCommonCharacterCount
};
