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
  options = options || {};
  const separator = options.separator !== undefined ? options.separator : '+';
  const repeatTimes = options.repeatTimes !== undefined ? options.repeatTimes : 1;
  const addition = options.addition;
  const additionRepeatTimes = options.additionRepeatTimes !== undefined ? options.additionRepeatTimes : 1;
  const additionSeparator = options.additionSeparator !== undefined ? options.additionSeparator : '|';

  let additionPart = '';
  if (addition !== undefined) {
    const parts = [];
    for (let i = 0; i < additionRepeatTimes; i++) {
      parts.push(String(addition));
    }
    additionPart = parts.join(additionSeparator);
  }

  const segment = str + additionPart;
  const segments = [];
  for (let i = 0; i < repeatTimes; i++) {
    segments.push(segment);
  }
  return segments.join(separator);
}

module.exports = {
  repeater
};
