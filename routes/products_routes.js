const express = require('express');
const router = express.Router();
const ProductModel = require('../models/product');
//delete product
router.get('/delete/:id', (req, res) =>{
    const {id} = req.params;
    ProductModel.destroy({ where: { id: id } })
        .then(() => {
            console.log('deleted');
            res.redirect('/monitor');
        })
        .catch(err => console.log(err));
});
//Get ptoduct info
router.get('/detail/:id', (req, res)=>{
    const {id} = req.params;
    ProductModel.findByPk(id)
        .then(product =>{
            console.log(product);
            //set a view name
            res.render('product_details_view',{
                product
            })
        })
        .catch(err => console.log(err));
})

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
    //each attribute must have the same name on form view
    let{name, description, price, count} = req.body;
    //create a promise and insert into table
    ProductModel.create({
        name,
        description,
        price,
        count,
    })
        .then(prod => res.redirect('/detail/' + prod.id))
        .catch(err => console.log("can't add product: " + err));
});

//Product monitor
router.get('/monitor', (req, res) =>
    ProductModel.findAll()
        .then(products =>{
            console.log('monitor');
            //set a view name
            res.render('products_monitor_view',{
                products
            })
        })
        .catch(err => console.log(err)));


 module.exports = router;
