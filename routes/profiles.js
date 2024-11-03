const express = require('express')
const router = express.Router();
const Profile = require('../models/Profile');

//module(route) to get profile or read profile

router.get('/' , async(req,res) => {
    try {
        const profiles1 = await Profile.find();
        res.render('create',{profiles1});
    }
    catch(err){
        res.status(500).send('Error Fetching profiles');
    }
}) 

// route to create profile or POST profile

router.post('/add-profile' ,async(req,res)=>{
    const {Name , Contact_Number , Email} = req.body
    try{
        const newProfile = new Profile({Name,Contact_Number,Email});
        await newProfile.save();
        res.redirect('/');
    }catch(err){
        res.status(500).send('Error saving data');
    }
})
//route to update profile
router.post('/update/:id' , async (req,res) =>{
    const {Name , Contact_Number , Email} = req.body ;
    try{
        await Profile.findByIdAndUpdate(req.params.id , {Name,Contact_Number,Email})
        res.redirect('/');
    }catch(err){
        res.send("Error in updating data")
    }
})

//route to delete profile

router.post('/delete/:id' , async(req,res) =>{
    try{
        await Profile.findByIdAndDelete(req.params.id);
        res.redirect('/');
    }catch(err){
        res.send("Deletion failed")
    }
})
module.exports = router ;