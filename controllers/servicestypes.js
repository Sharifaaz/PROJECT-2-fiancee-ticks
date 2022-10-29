

const express = require('express')
const db = require('../models')
const router = express.Router()
const cryptojs = require('crypto-js')
require('dotenv').config()
const bcrypt = require('bcrypt')

// Routes for the services types

router.get('/types', (req, res)=>{
    res.render('clients/profile.ejs')
})

module.exports = router