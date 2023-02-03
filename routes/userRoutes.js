const { createUser } = require('../controllers/userControllers')

const router = require('express').Router()

router.post('/login', createUser)

module.exports = router