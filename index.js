const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')
const cookieParser = require('cookie-parser')
const db = require('./models')
const cryptoJS = require('crypto-js')
require('dotenv').config()

// MIDDLEWARE
app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use(cookieParser())
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))

// AUTHENTICATION MIDDLEWARE
app.use(async (req, res, next)=>{
    if(req.cookies.clientId) {
        const decryptedId = cryptoJS.AES.decrypt(req.cookies.clientId, process.env.SECRET)
        const decryptedIdString = decryptedId.toString(cryptoJS.enc.Utf8)
        const client = await db.client.findByPk(decryptedIdString)
        res.locals.client = client
    } else res.locals.client= null
    next()
})

// CONTROLLERS
app.use('/clients', require('./controllers/clients'))

// ROUTES
app.get('/', (req, res)=>{
    res.render('home')
})

app.listen(8000, ()=>{
    console.log('Project 2 Express Authentication')
})