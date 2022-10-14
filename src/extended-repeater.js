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
function repeater(str,
  {
    repeatTimes = 1,
    separator = "+",
    addition = "",
    additionRepeatTimes = 1,
    additionSeparator = "|"
  }
) {
  str = String(str);
  let optionsAddition = String(addition);

  let newStr = [];
  let addit = [];
  let additStr;

  if (optionsAddition) {
    if (additionRepeatTimes) {
      for (let j = 0; j < additionRepeatTimes; j++) {
        addit.push(optionsAddition);
        if (additionRepeatTimes > 1) {
          additStr = additionSeparator
            ? addit.join(additionSeparator)
            : addit.join("|");
        } else {
          additStr = addit.join("");
        }
      }
      str = str + additStr;
    }
  }
  for (let i = 0; i < repeatTimes; i++) {
    newStr.push(str);
  }
  if (!repeatTimes) {
    return addition ? str + addition : str;
  }
  return separator ? newStr.join(separator) : newStr.join("+");
}

module.exports = {
  repeater,
};
