/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const used = {};
  const result = [];
  for (const name of names) {
    if (!Object.prototype.hasOwnProperty.call(used, name)) {
      used[name] = true;
      result.push(name);
    } else {
      let k = 1;
      let newName = name + '(' + k + ')';
      while (Object.prototype.hasOwnProperty.call(used, newName)) {
        k += 1;
        newName = name + '(' + k + ')';
      }
      used[newName] = true;
      result.push(newName);
    }
  }
  return result;
}

module.exports = {
  renameFiles
};
