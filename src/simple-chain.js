const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  _chain: [],
  getLength() {
    return this._chain.length
  },
  addLink(value = '') {
    this._chain.push(value)
    return this
  },
  removeLink(position) {
    if (
      position < 1 ||
      typeof position !== 'number' ||
      position > this._chain.length
    ) {
      this._chain.length = 0
      throw new Error("You can't remove incorrect link!")
    }
    this._chain.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this._chain.reverse()
    return this
  },
  finishChain() {
    const out = this._chain.reduce((acc, link, i) => {
      acc += i === 0 ? '' : '~~'
      acc += `( ${link} )`
      return acc
    }, '')
    this._chain.length = 0
    return out
  },
}

module.exports = {
  chainMaker
};
