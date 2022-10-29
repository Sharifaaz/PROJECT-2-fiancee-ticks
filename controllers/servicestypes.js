

const express = require('express')
const db = require('../models')
const router = express.Router()
const cryptojs = require('crypto-js')
require('dotenv').config()
const bcrypt = require('bcrypt')

// Routes for the services types

router.get('/types', (req, res)=>{
    res.render('wedservices/types.ejs')
})

//  Routes to the flower shops
router.get('/flowers', (req, res)=>{
    res.render('wedservices/flowers.ejs')
})

//  Routes to the gowns

router.get('/gowns', (req, res)=>{
    res.render('wedservices/gowns.ejs')
})
//  Routes to the spas

router.get('/spas', (req, res)=>{
    res.render('wedservices/spas.ejs')
})
//  Routes to the giveaways
router.get('/give', (req, res)=>{
    res.render('wedservices/give.ejs')
})

//  routes to the makeup artists
router.get('/makeup', (req, res)=>{
    res.render('wedservices/makeup.ejs')
})

//  routest to the hairstylist

router.get('/hairstylist', (req, res)=>{
    res.render('wedservices/hairstylist.ejs')
})
//  routes to the Jewels

router.get('/jewls', (req, res)=>{
    res.render('wedservices/jewls.ejs')
})

module.exports = router