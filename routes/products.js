const express = require('express');
const router = express.Router();
//const db = require('../models/database');
const ProductModel = require('../models/product');
router.get('/', (req, res) =>
    ProductModel.findAll()
    .then(prod =>{
        console.log(prod);
        res.sendStatus(200);
    })
    .catch(err => console.log(err)));
 module.exports = router;
