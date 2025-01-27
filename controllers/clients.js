const express = require('express')
const db = require('../models')
const router = express.Router()
const cryptojs = require('crypto-js')
require('dotenv').config()
const bcrypt = require('bcrypt')
const reservation = require('../models/reservation')

router.get('/new', (req, res)=>{
    res.render('clients/new.ejs')
})

router.post('/', async (req, res)=>{
    console.log('signup fn')
    const [newUser, created] = await db.client.findOrCreate({where:{email: req.body.email}})
    if(!created){
        console.log('user already exists')
        res.render('clients/login.ejs', {error: 'Looks like you already have an account! Try logging in :)'})
    } else {
        const hashedPassword = bcrypt.hashSync(req.body.password, 10)
        // added two commands to save the client's name
        const clientName = req.body.name
        newUser.name = clientName 

        newUser.password = hashedPassword
        await newUser.save()
        const encryptedUserId = cryptojs.AES.encrypt(newUser.id.toString(), process.env.SECRET)
        const encryptedUserIdString = encryptedUserId.toString()
        res.cookie('clientId', encryptedUserIdString)
        res.redirect('/')
    }
})

// // Routes to the Services Page
// router.get('/types', (req,res)=>{
//     res.render('wedservices/types.ejs')
// })
// Routes to the Profile Page
// router.get('/clients', (req,res)=>{
//     res.render('clients/profile.ejs')
// })
// Routes to the "About" Page
router.get('/About', (req, res)=> {
    res.render('main/About.ejs')
})
// Routes to the "Blog" Page
router.get('/Blog', (req, res)=> {
    res.render('main/Blog.ejs')
})
// Routes to "Contact" Page

router.get('/Contact', (req, res)=> {
    res.render('main/Contact.ejs')
})

// Login Routes 
router.get('/login', (req, res)=>{
    res.render('clients/login.ejs')
})

router.post('/login', async (req, res)=>{
    const user = await db.client.findOne({where: {email: req.body.email}})
    if(!user){
        console.log('user not found')
        // clients/login, { error: "Invalid email/password" }
        res.render('main/404')
    } else if(!bcrypt.compareSync(req.body.password, user.password)) {
        console.log('password incorrect')
        res.render('clients/login', { error: "Invalid email/password" })
    } else {
        console.log('logging in the user!!!')
        const encryptedUserId = cryptojs.AES.encrypt(user.id.toString(), process.env.SECRET)
        const encryptedUserIdString = encryptedUserId.toString()
        res.cookie('clientId', encryptedUserIdString)
        res.redirect('/')
    }
})

// Logout Routes
router.get('/logout', (req, res)=>{
    console.log('logging out')
    res.clearCookie('clientId')
    res.redirect('/')
})




router.get('/profile', async(req, res)=>{

    // let clientReservations = await res.locals.client.getReservations() 

const clientReservations = await db.reservation.findAll({ include: db.service });
    // let service = await db.service.findOne({
    //     where: { id: 'Flowers'}
    // })
    
// console.log("clientReservations:" + clientReservations)
    res.render('clients/profile.ejs',{clientReservations}) 
})

module.exports = router

