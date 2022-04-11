const express = require('express');
const router = express.Router();
//const db = require('../models/database');
const ProductModel = require('../models/product');

//Get product list
router.get('/', (req, res) =>
    ProductModel.findAll()
    .then(products =>{
        console.log(products);
        //set a view name
        res.render('products',{
            products
        })
    })
    .catch(err => console.log(err)));

//Display add product form
router.get('/add', (req, res) => res.render('add_product_view'));

//Create a product
router.post('/add', (req, res) =>{
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

//Product monitor
router.get('/monitor', (req, res) =>
    ProductModel.findAll()
        .then(products =>{
            console.log(products);
            //set a view name
            res.render('products_monitor_view',{
                products
            })
        })
        .catch(err => console.log(err)));


 module.exports = router;
