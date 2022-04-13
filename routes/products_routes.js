const express = require('express');
const router = express.Router();
const ProductModel = require('../models/product');
const mp = require('multiparty');

//Display add product form
router.get('/test', (req, res) => res.render('edit_product_view'));

//Create a product
router.post('/test', (req, res) =>{
    const form = new mp.Form();
    form.parse(req, (err, fields, files) =>{
        if(err) res.send('err');
        res.send(fields.bbb.toString());

    });

});
function myFunc(a) {
    console.log("yo");
}




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
    //get attribute from form view
    const form = new mp.Form();
    let _fields;
    form.parse(req, (err, fields, files) =>{
        if(err) res.send('err');
        let name = fields.name.toString();
        let description = fields.description.toString();
        let price = fields.price.toString();
        let count = fields.count.toString();
        let toOrder = false;
        
        ProductModel.create({
            name,
           description,
            price,
            count,
            toOrder
        })
            .then(prod => res.redirect('/detail/' + prod.id))
            .catch(err => console.log("can't add product: " + err));
    });
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
