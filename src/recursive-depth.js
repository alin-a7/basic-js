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
    const depthCalc = new DepthCalculator();
    if (Array.isArray(arr)) {
     return 1 + Math.max(0, ...arr.map(depthCalc.calculateDepth)) 
    }
    // let count = 1;
    // for (let i = 0; i < arr.length; i++) {
    //   if (Array.isArray(arr[i])) {
    //     count += depthCalc.calculateDepth(arr[i]);
    //     return count;
    //   } 
    // }
    // return count;
  }

  // let depth = [];
  // const depthCalc = new DepthCalculator();
  // let count = 1;
  // for (let i=0; i<arr.length; i++) {
  //   if (Array.isArray(arr[i])) {
  //     count += 1;
  //     depthCalc.calculateDepth(arr[i]);
  //   }
  //   depth.push(count);
  //   count = 1;

  // }
  // return Math.max(...depth)
}

module.exports = {
  DepthCalculator,
};
