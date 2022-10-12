const { NotImplementedError } = require("../extensions/index.js");

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
  let newNames = [];
  let count = 1;
  let str = "";
  for (let i = 0; i < names.length; i++) {
    if (!newNames.includes(names[i])) {
      newNames.push(names[i]);
    } else {
      for (count; count < 10; count++) {
        str = `${names[i]}(${count})`;
        if (newNames.includes(str)) {
        } else {
          newNames.push(str);
          break;
        }
      }
    }
  }
  return newNames;
  // let name = "";
  // let count = 1;
  // for (let i = 0; i < names.length; i++) {
  //   for (k = 0; k > i; k++) {
  //     if (names[i] === names[k]) {
  //       count++;
  //     }
  //     name = `${names[i]}(${count})`;
  //   }
  //   if (count === 1) {
  //     newNames.push(names[i]);
  //   } else {
  //     newNames.push(name);
  //   }
  // }
  // return newNames;
}

module.exports = {
  renameFiles,
};
