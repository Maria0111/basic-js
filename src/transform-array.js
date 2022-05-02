const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`)
  }
  const out = []
  let isDel = false

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      switch (arr[i]) {
        case '--discard-next':
          isDel = true
          i++
          break
        case '--discard-prev':
          if (!isDel) {
            try {
              out.pop()
            } catch {}
          } else {
            isDel = false
          }
          break
        case '--double-next':
          if (arr[i + 1]) {
            out.push(arr[i + 1])
          }
          break
        case '--double-prev':
          if (!isDel) {
            if (arr[i - 1]) {
              out.push(arr[i - 1])
            }
          } else {
            isDel = false
          }
          break
        default:
          out.push(arr[i])
          break
      }
    } else {
      out.push(arr[i])
    }
  }
  return out
}

module.exports = {
  transform
};
