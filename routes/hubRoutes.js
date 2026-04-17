const express = require('express');
const router = express.Router();

// @route   POST /api/requests
router.post('/', (req, res) => {
    res.send('create request route');
})

// @route  GET /api/requests
router.get('/', (req, res) => {
    res.send('get all requests route');
})

// @route  GET /api/requests/:id
router.get('/:id', (req,res) => {
    res.send('get request by id route');
})

// @route  PUT /api/requests/:id
router.put('/:id', (req,res) => {
    res.send('update request by id route');
})

// @route  DELETE /api/requests/:id
router.delete('/:id', (req,res) => {
    res.send('delete request by id route');
})

module.exports = router;