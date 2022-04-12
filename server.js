const http = require('http');
const express = require('express');
const db = require("./config/database");
const {engine} = require('express-handlebars');
const port = 3000;
const path = require('path');
const Handlebars = require('Handlebars');
//need to use data with handlebar
//todo fix: need use more secure method
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
//need to use forms
const bodyParser = require('body-parser');


const app = express();
app.use(express.json());

const server = http.createServer(app);
server.listen(port);
console.debug('Server listening on port ' + port);

//Middleware for handlebars
app.engine('handlebars', engine({
    defaultLayout: 'main',
    // ...implement newly added insecure prototype access
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname,'public')));

//routes
app.use('/', require('./routes/products_routes'));

app.use(bodyParser.urlencoded({extends : false}))
//Test db
db.authenticate()
    .then(()=> console.log("db work"))
    .catch(err => console.log(("db don't work: " + err)));
