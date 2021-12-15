'use strict'

module.exports = async (event, context) => {
  // default echo event params
  return context
    .status(200)
    .succeed(event)
}
