const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (date) {
    if (Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date)) {
      let monthIndex = date.getUTCMonth() + 1;
      if ((monthIndex > 0 && monthIndex < 3) || monthIndex === 12) {
        return "winter";
      }
      if (monthIndex > 2 && monthIndex < 6) {
        return "spring";
      }
      if (monthIndex > 5 && monthIndex < 9) {
        return "summer";
      }
      if (monthIndex > 8 && monthIndex < 12) {
        return "autumn";
      }
    } else {
      return 'Invalid date!'
    }
  } else {
    return "Unable to determine the time of year!";
  }
}

module.exports = {
  getSeason,
};
