const path = require('path');
const express = require('express');
const router = express.Router();
const {getProducts,getProfile, getAddToCart} = require('../controllers/shop/labours');
const { getContractors } = require('../controllers/shop/contractors');


// router for getting the labours
router.get('/profile',getProfile);
router.get('/labours',getProducts);

// router for getting the contractors
router.get('/contractors',getContractors)

router.get('/addtocart',getAddToCart)


module.exports=router;