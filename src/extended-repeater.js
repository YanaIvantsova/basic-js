const { NotImplementedError } = require('../extensions/index.js');

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
function repeater(str, options) {
  if (options.addition === undefined) {
    options.addition = '';
  }
  let repeatedPart = Array(options.additionRepeatTimes).fill(new String(options.addition)).join(options.additionSeparator || '|')
  let result = Array(options.repeatTimes).fill(new String(str) + new String(repeatedPart)).join(options.separator || '+')
  return result;
}

module.exports = {
  repeater
};
