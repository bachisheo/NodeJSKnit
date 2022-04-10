const db = require("../models");
const products = db.products;

// Get all users from the database.
exports.findAll = (req, res) =>{
    console.log('blayb.')
    return products.findAll();
}

