const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  function checkIndex(i, j) {
    if ((i < 0 || j < 0)) {
      return false;
    }
    if (i > matrix.length - 1) return false
    if (j > matrix[0].length - 1) return false
    return matrix[i][j];
  }
  let mines = 0;
  let newArr = [];
  for (let i = 0; i < matrix.length; i++) {
    newArr.push([])
    for (let j = 0; j < matrix[i].length; j++) {
      if (checkIndex(i - 1, j - 1)) mines++;
      if (checkIndex(i - 1, j)) mines++;
      if (checkIndex(i - 1, j + 1)) mines++;
      if (checkIndex(i, j - 1)) mines++;
      if (checkIndex(i, j + 1)) mines++;
      if (checkIndex(i + 1, j - 1)) mines++;
      if (checkIndex(i + 1, j)) mines++
      if (checkIndex(i + 1, j + 1)) mines++;
      newArr[i][j] = mines;
      mines = 0;
    }
  }
  return newArr
}

module.exports = {
  minesweeper
};
