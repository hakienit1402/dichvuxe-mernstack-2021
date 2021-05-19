const express = require('express')
const { signup, signin } = require('../controllers/auth')
const { sendmail } = require('../controllers/sendmail')
const router = express.Router()

router.post('/signin',signin)

router.post('/signup',signup)

router.post('/sendmail',sendmail)

module.exports=router