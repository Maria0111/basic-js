const { NotImplementedError } = require('../extensions/index.js');

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
  const out = {}

  domains.forEach((domain) => {
    domain.split('.').forEach((el, i, arr) => {
      const subdomain = '.' + arr.slice(i).reverse().join('.')
      if (out.hasOwnProperty(subdomain)) {
        out[subdomain] += 1
      } else {
        out[subdomain] = 1
      }
    })
  })
  return out
}


module.exports = {
  getDNSStats
};
