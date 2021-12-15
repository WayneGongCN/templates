'use strict'

module.exports = async (event, context) => {
  return context
    .send('hello world')
}
