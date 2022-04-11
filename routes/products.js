const express = require('express');
const router = express.Router();
//const db = require('../models/database');
const ProductModel = require('../models/product');

//Get product list
router.get('/', (req, res) =>
    ProductModel.findAll()
    .then(prod =>{
        console.log(prod);
        //set a view name
        res.render('products',{
            prod
        })
    })
    .catch(err => console.log(err)));

//Create a product
router.get('/add', (req, res) =>{
    const product_form = {
        name: 'name1',
        description: 'desk1',
        price: '33',
        count: 1
    }
    let{name, description, price, count} = product_form;
    //create a promise
    ProductModel.create({
        name,
        description,
        price,
        count,
    })
        .then(prod => res.redirect('/products'))
        .catch(err => console.log("can't add product: " + err));
});



 module.exports = router;
