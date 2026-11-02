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
  constructor(direct = true) {
    this.isDirect = direct !== false;
  }

  crypt(message, key, isEncrypt) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    const upperKey = String(key).toUpperCase();
    let keyIdx = 0;
    let result = '';
    for (const ch of String(message)) {
      if (/[A-Za-z]/.test(ch)) {
        const shift = upperKey.charCodeAt(keyIdx % upperKey.length) - 65;
        const base = 'A'.charCodeAt(0);
        const code = ch.toUpperCase().charCodeAt(0) - base;
        let newCode;
        if (isEncrypt) {
          newCode = (code + shift) % 26;
        } else {
          newCode = (code - shift + 26) % 26;
        }
        result += String.fromCharCode(base + newCode);
        keyIdx += 1;
      } else {
        result += ch;
      }
    }
    if (!this.isDirect) {
      result = result.split('').reverse().join('');
    }
    return result;
  }

  encrypt(message, key) {
    return this.crypt(message, key, true);
  }

  decrypt(message, key) {
    return this.crypt(message, key, false);
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
