/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return 0;
    }
    let maxChildDepth = 0;
    for (const item of arr) {
      if (Array.isArray(item)) {
        const depth = this.calculateDepth(item);
        if (depth > maxChildDepth) {
          maxChildDepth = depth;
        }
      }
    }
    return 1 + maxChildDepth;
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
