function countCats(matrix) {
  if (!Array.isArray(matrix)) {
    return 0;
  }
  let count = 0;
  for (const row of matrix) {
    if (Array.isArray(row)) {
      for (const cell of row) {
        if (cell === '^^') {
          count += 1;
        }
      }
    }
  }
  return count;
}

module.exports = {
  countCats
};
