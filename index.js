'use strict'

/**
 * Dependencies
 */

const express = require('express')

/**
 * Constants
 */

const port = 4000

/**
 * Define app
 */

const app = express()

/**
 * Middleware
 */

app.use(express.json())

/**
 * Routes
 */

app.use('/', require('./routes/root_router'))
app.use('/api/hubs', require('./routes/hubs_router'))

/**
 * Start server
 */

if (module === require.main) {
  app.listen(port, () => {
    console.log(`Express server running on port ${port}`)
  })
}

/**
 * Export app
 */

module.exports = app
