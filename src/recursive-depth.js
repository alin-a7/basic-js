const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
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
    if (!Array.isArray(arr)) return 0;
    let depth = 0;
    arr.forEach(x => {
      depth = Math.max(depth, this.calculateDepth(x));
    })
    return depth + 1;
    //  let depth = [];
    //   let count = 1;
    //   for (let i=0; i<arr.length; i++) {
    //     if (Array.isArray(arr[i])) {
    //       count += this.calculateDepth(arr[i]);
    //     }
    //   }return count
    //   }
  }
}

module.exports = {
  DepthCalculator,
};
