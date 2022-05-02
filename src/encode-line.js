const { NotImplementedError } = require('../extensions/index.js');

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
  let out = ''
  let last = ''
  let count = 1

  str.split('').forEach((ch) => {
    // console.log(`out - ${out} ch - ${ch} last - ${last} count - ${count}`)
    if (ch !== last) {
      out += count === 1 ? last : count + last
      last = ch
      count = 1
    } else {
      count++
    }
  })
  out += count === 1 ? last : count + last
  return out
}

module.exports = {
  encodeLine
};
