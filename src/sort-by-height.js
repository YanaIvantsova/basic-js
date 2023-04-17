const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const numberToDelete = -1;
  let  sortedArray;
  let filteredArray = arr.filter((number) => number !== numberToDelete);
  function quickSort(notSortedArray) {
    if (notSortedArray.length == 0) return [];
    let a = [], b = [], p = notSortedArray[0];
    for (let i = 1; i < notSortedArray.length; i++) {
      if (notSortedArray[i] < p) a.push(notSortedArray[i]);
      else b.push(notSortedArray[i]);
    }
    return quickSort(a).concat(p, quickSort(b));
  }
  sortedArray = quickSort(filteredArray);
   let indexesOfNumber  = [];
  let idx = arr.indexOf(numberToDelete);
  while (idx != -1) {
    indexesOfNumber.push(idx);
    idx = arr.indexOf(numberToDelete, idx + 1);
  }
 for(let i=0; i<indexesOfNumber.length;i++){
  sortedArray.splice(indexesOfNumber[i],0,numberToDelete);
}
return sortedArray;
}
module.exports = {
  sortByHeight
};
