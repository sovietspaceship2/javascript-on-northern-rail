'use strict';

const Promise = require('bluebird')

Promise.config({
    cancellation: true
})

Promise.prototype._originalThen = Promise.prototype.then

Promise.prototype.then = function (...args) {
  const r = Math.random()
  if (r > 0.5) {
      return this._originalThen(...args)
  }
  return Promise.delay(100 + Math.random())._originalThen(...args)
}

module.exports = Promise
