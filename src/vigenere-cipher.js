const { NotImplementedError } = require("../extensions/index.js");

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
    this.type = type;
  }

  encrypt(message, key) {
    if (!key || !message) {
      throw new Error("Incorrect arguments!");
    }
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    alphabet = alphabet.split("");
    let cipherKey = key.toUpperCase().split("");
    let cipherMessage = message.toUpperCase().split("");
    let offset;
    let cipherStr = "";
    let i = 0;

    cipherMessage.forEach((x) => {
      if (alphabet.indexOf(x) === -1) {
        offset = alphabet.indexOf(cipherKey[i % cipherKey.length]);
        cipherStr += x;
        i = i - 1;
      } else {
        offset = alphabet.indexOf(cipherKey[i % cipherKey.length]);
        cipherStr +=
          alphabet.indexOf(x) + offset === 0
            ? alphabet.join('').charAt(0)
            : alphabet[(alphabet.indexOf(x) + offset) % alphabet.length];
      }
      i += 1;
    });
    if (this.type === false) {
      return cipherStr.split("").reverse().join("");
    }
    return cipherStr;
  }
  decrypt(encryptedMessage, key) {
    if (!key || !encryptedMessage) {
      throw new Error("Incorrect arguments!");
    }
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    alphabet = alphabet.split("");
    let cipherKey = key.toUpperCase().split("");
    let cipherEncryptedMessage = encryptedMessage.toUpperCase().split("");
    let offset;
    let cipherStr = "";
    let i = 0;

    cipherEncryptedMessage.forEach((x) => {
      if (alphabet.indexOf(x) === -1) {
        offset = alphabet.indexOf(cipherKey[i % cipherKey.length]);
        cipherStr += x;
        i = i - 1;
      } else {
        offset = alphabet.indexOf(cipherKey[i % cipherKey.length]);
        cipherStr +=
          alphabet.indexOf(x) + offset === 0
            ? alphabet.join('').charAt(0)
            : alphabet[
                (alphabet.indexOf(x) + alphabet.length - offset) %
                  alphabet.length
              ];
      }
      i += 1;
    });
    if (this.type === false) {
      return cipherStr.split("").reverse().join("");
    }
    return cipherStr;
  }
}
module.exports = {
  VigenereCipheringMachine,
};
