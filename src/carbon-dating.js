const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string") return false
  if (!parseFloat(sampleActivity)) return false
  if (parseFloat(sampleActivity) > 15 || parseFloat(sampleActivity) < 0) return false

  const q = MODERN_ACTIVITY /parseFloat(sampleActivity)
  const w = 0.693 / HALF_LIFE_PERIOD
  const e = Math.log (q) / w 
  return Math.ceil(e)
}

module.exports = {
  dateSample
};
