const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  codStr = "";
  count = 1;
  let p=1;
  str = str.split("");
  for (let i = 0; i < str.length; i++) {
    for (k=i; k < str.length; k++) {
     if (str[i] === str[i + p]) {
      count+=1
      p+=1 
    }
    }
    codStr += `${count}${str[i]}`
    i+=count
  }return codStr

  // unicStr = [...new Set(str)]
  // for (let i=0; i<unicStr.length; i++){
  //   codStr += `${str.lastIndexOf(unicStr[i]) - str.indexOf(unicStr[i]) +1}${unicStr[i]}`
  // }
  // return codStr
}

module.exports = {
  encodeLine,
};
