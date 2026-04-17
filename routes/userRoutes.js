const express = require('express');
const router = express.Router();

 
// @route  GET /api/users   
router.get('/', (req, res) => {
    res.send('get all users route');
})
// @route  PUT /api/users/:id
router.put('/:id', (req, res) => {
    res.send('update user by id route');
})
// @route  DELETE /api/users/:id
router.delete('/:id', (req, res) => {
    res.send('delete user by id route');
})

module.exports = router;