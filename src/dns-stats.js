const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let str = "";
  let res = {};
  domains
    .map((x) => x.split(".").reverse())
    .forEach((x) => {
      str = ''
      for (let i = 0; i < x.length; i++) {
        str += `.${x[i]}`;
        if (!res[str]) {
          res[str] = 1;
        } else {
          res[str]++;
        }
      }
    });
    return res
}

module.exports = {
  getDNSStats,
};
