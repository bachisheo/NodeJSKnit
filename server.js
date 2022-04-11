const http = require('http');
const express = require('express');
const db = require("./config/database");
const {engine} = require('express-handlebars');
const port = 3000;
const path = require('path');
const Handlebars = require('Handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');

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
app.use('/products/', require('./routes/products'));

//Test db
db.authenticate()
    .then(()=> console.log("db work"))
    .catch(err => console.log(("db don't work: " + err)));
