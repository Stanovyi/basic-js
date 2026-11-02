/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  if (!matrix || matrix.length === 0) {
    return sum;
  }
  const cols = matrix[0].length;
  const blocked = new Array(cols).fill(false);
  for (const row of matrix) {
    for (let c = 0; c < cols; c++) {
      if (blocked[c]) {
        continue;
      }
      const val = row[c];
      if (val === 0) {
        blocked[c] = true;
      } else {
        sum += val;
      }
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
