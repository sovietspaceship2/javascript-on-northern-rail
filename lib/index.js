'use strict';

const Promise = require('bluebird')

Promise.config({
    cancellation: true
})

Promise.prototype._originalThen = Promise.prototype.then

Promise.prototype.then = function (...args) {
  const r = Math.random()
  if (r > 0.666) {
      return this._originalThen(...args)
  } else if (r > 0.333) {
    this.cancel()
    return this;
  }
  return Promise.delay(100 + Math.random())._originalThen(...args)
}

module.exports = Promise
