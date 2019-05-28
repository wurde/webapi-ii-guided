'use strict'

/**
 * Dependencies
 */

const express = require('express')
const Hub = require('../models/Hub.js')

/**
 * Define router
 */

const router = express.Router()

/**
 * Routes
 */

router.get('/', async (req, res) => {
  try {
    const hubs = await Hub.find(req.query)

    res.status(200).json(hubs)
  } catch (error) {
    console.error(error)

    res.status(500).json({
      message: 'Error retrieving the hubs',
    })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const hub = await Hub.findById(req.params.id)

    if (hub) {
      res.status(200).json(hub)
    } else {
      res.status(404).json({ message: 'Hub not found' })
    }
  } catch (error) {
    console.error(error)

    res.status(500).json({
      message: 'Error retrieving the hub',
    })
  }
})

router.post('/', async (req, res) => {
  try {
    const hub = await Hub.add(req.body)

    res.status(201).json(hub)
  } catch (error) {
    console.error(error)

    res.status(500).json({
      message: 'Error adding the hub',
    })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const count = await Hub.remove(req.params.id)

    if (count > 0) {
      res.status(200).json({ message: 'The hub has been nuked' })
    } else {
      res.status(404).json({ message: 'The hub could not be found' })
    }
  } catch (error) {
    console.error(error)

    res.status(500).json({
      message: 'Error removing the hub',
    })
  }
})

router.put('/:id', async (req, res) => {
  try {
    const hub = await Hub.update(req.params.id, req.body)

    if (hub) {
      res.status(200).json(hub)
    } else {
      res.status(404).json({ message: 'The hub could not be found' })
    }
  } catch (error) {
    console.error(error)

    res.status(500).json({
      message: 'Error updating the hub',
    })
  }
})

/**
 * Export router
 */

module.exports = router
