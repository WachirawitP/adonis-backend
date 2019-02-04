'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class ResourceNotExistException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  handle (err, {response}) {
    return response.status(404).json({
      error: 'The resource did not exist'
    })
  }
}

module.exports = ResourceNotExistException
