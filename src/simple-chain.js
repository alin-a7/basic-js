const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 
const chainMaker = {
   chain:[],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    str = `( ${value} )`;
    this.chain.push(str);
    return this;
  },
  removeLink(position) {
    if (position % 1 !== 0 || position < 1 || position > this.chain.length - 1 || typeof position !== "number") {
      this.chain=[];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice((position - 1), 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let endChain = this.chain.join("~~");
    this.chain=[];
    return endChain
  }
};

module.exports = {
  chainMaker
};
