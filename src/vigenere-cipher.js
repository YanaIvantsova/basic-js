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
  constructor(type = true) {
    this.type = type;
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
  }

  encrypt(text, key) {
    if (!text || !key) {
      throw new Error('Incorrect arguments!');
    }

    let alphabet = this.alphabet.split('');
    let counter = 0, newCode = '';
    text = text.toUpperCase();
    key = key.toUpperCase();
    for (let i = 0; i < text.length; i++) {
      if (counter > key.length - 1) {
        counter = 0;
      };
      if (!alphabet.includes(text[i])) {
        newCode += text[i];
      } else {
        const textIndex = alphabet.indexOf(text[i]);
        const keyIndex = alphabet.indexOf(key[counter % key.length]);
        const newIndex = (textIndex + keyIndex) % 26;
        newCode += alphabet[newIndex];
        counter++;
      }
    }
    return this.type ? newCode : newCode.split('').reverse().join('');

  }

  decrypt(text, key) {
    if (!text || !key) {
      throw new Error('Incorrect arguments!');
    }
    let alphabet = this.alphabet.split('');
    let counter = 0, newCode = '', newIndex;
    text = text.toUpperCase();
    key = key.toUpperCase();
    for (let i = 0; i < text.length; i++) {
      let currentChar = text[i];
      if (!alphabet.includes(currentChar)) {
        newCode += currentChar;
      } else {
        let textIndex = alphabet.indexOf(currentChar);
        let keyIndex = alphabet.indexOf(key[counter]);
        newIndex = textIndex - keyIndex;
        if (newIndex < 0) {
          newIndex += 26;
        }
        newCode += alphabet[newIndex % 26];
        counter = (counter + 1) % key.length;
      }
    }
    return this.type ? newCode : newCode.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
