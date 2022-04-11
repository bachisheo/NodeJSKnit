const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
const db = require("./models/index");
const products = db.products;

app.use(express.json());

const server = http.createServer(app);
const port = 3000;
server.listen(port);
console.debug('Server listening on port ' + port);

//routes
app.use('/products/', require('./routes/products'));
app.get('/pr', (req, res) => res.send("aaaa"));

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname+'/express/templates/index.html'));
    //__dirname : It will resolve to your project folder.
});
///Get main page
app.get('/all', (req, res) =>{
    products.findOne().then(function (user) {
        console.log(user.get('name'));
    });
    products.findAll().then(function(result) {
        console.log(JSON.stringify(result));
        res.send(JSON.stringify(result));
    });
    console.log('I got ads.');

})