const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str);
  // JSON.stringify(options.addition);
  let optionsAddition = String(options.addition);
  // optionsAddition = optionsAddition.toString();

  let newStr = [];
  let addit = [];
  let additStr;

  if (optionsAddition) {
    if (options.additionRepeatTimes) {
      for (let j = 0; j < options.additionRepeatTimes; j++) {
        addit.push(optionsAddition);
        if (options.additionRepeatTimes > 1) {
          additStr = options.additionSeparator
            ? addit.join(options.additionSeparator)
            : addit.join("|");
        } else {
          additStr = addit.join("");
        }
      }
      str = str + additStr;
    }
  }
  for (let i = 0; i < options.repeatTimes; i++) {
    newStr.push(str);
  }
  if (!options.repeatTimes) {
    return options.addition ? str + options.addition : str;
  }
  return options.separator ? newStr.join(options.separator) : newStr.join("+");
}

module.exports = {
  repeater,
};
