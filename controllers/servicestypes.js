
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
router.get('/flowers', async(req, res)=>{

    let flower = await db.service.findOne({
        where: { category : 'Flowers'}
    })
    
        res.render('wedservices/flowers.ejs', {flower})
})



//  Routes to the gowns

router.get('/gowns', async(req, res)=>{
    
 
    let gown = await db.service.findAll({
        where: { category : 'Bridal Gowns Designers'}
    })
    
        res.render('wedservices/gowns.ejs', {gown})
})


//  Routes to the spas

router.get('/spas', async(req, res)=>{

    let spa = await db.service.findAll({
        where:{category : 'Hotels and Spas'}
    })
    
    res.render('wedservices/spas.ejs', {spa})
})


//  Routes to the giveaways
router.get('/give', async(req, res)=>{

    let give = await db.service.findAll({
        where: { category : 'Wedding Giveaways'}
    })

    res.render('wedservices/give.ejs',{give})
})

//  routes to the makeup artists
router.get('/makeup', async(req, res)=>{

    let makeup = await db.service.findAll({
        where: { category : 'Makeup Artists'}
    })

    res.render('wedservices/makeup.ejs',{makeup})
})

//  routest to the hairstylist

router.get('/hairstylist', async(req, res)=>{

    let hairstyle = await db.service.findAll({
        where: { category : 'Hairstylist'}
    })

    res.render('wedservices/hairstylist.ejs',{hairstyle})
})
//  routes to the Jewels

router.get('/jewls', async(req, res)=>{

    let jewllery = await db.service.findAll({
        where: { category : 'Jewllries'}
    })
    res.render('wedservices/jewls.ejs',{jewllery})
})

module.exports = router