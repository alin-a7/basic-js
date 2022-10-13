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
  encrypt(message, key) {
    if (!key || !message) {
      throw new Error("Incorrect arguments!");
    }
    let cipherKey = key.toUpperCase().split("");
    let cipherMessage = message.toUpperCase().split("");
  }
  decrypt(encryptedMessage, key) {
    if (!key || !encryptedMessage) {
      throw new Error("Incorrect arguments!");
    }
    let cipherKey = key.toUpperCase().split("");
    let cipherEncryptedMessage = encryptedMessage.toUpperCase().split("");
  }
}
module.exports = {
  VigenereCipheringMachine,
};
