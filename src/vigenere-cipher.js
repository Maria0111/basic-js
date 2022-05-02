const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type) {
    this._direct = type === false ? type : true
    this._abc = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
    ]
  }
  encrypt(msg, key) {
    if (!msg || !key) {
      throw new Error('Incorrect arguments!')
    }
    const keyStr = this.setKeyStr(msg, key)
    const out = []
    msg
      .toUpperCase()
      .split('')
      .forEach((char, i) => {
        if (this._abc.includes(char)) {
          let k = (this._abc.indexOf(char) + this._abc.indexOf(keyStr[i])) % 26
          out.push(this._abc[k])
        } else {
          out.push(char)
        }
      })
    return this._direct ? out.join('') : out.reverse().join('')
  }
  decrypt(msg, key) {
    if (!msg || !key) {
      throw new Error('Incorrect arguments!')
    }
    const keyStr = this.setKeyStr(msg, key)
    const out = []
    msg
      .toUpperCase()
      .split('')
      .forEach((char, i) => {
        if (this._abc.includes(char)) {
          let k = this._abc.indexOf(char) - (this._abc.indexOf(keyStr[i]) % 26)
          k = k < 0 ? 26 + k : k
          out.push(this._abc[k])
        } else {
          out.push(char)
        }
      })
    return this._direct ? out.join('') : out.reverse().join('')
  }
  setKeyStr(msg, key) {
    let count = 0
    return msg
      .toUpperCase()
      .split('')
      .map((char) => {
        if (this._abc.includes(char)) {
          return key[count++ % key.length].toUpperCase()
        } else {
          return char
        }
      })
  }
}


module.exports = {
  VigenereCipheringMachine
};
