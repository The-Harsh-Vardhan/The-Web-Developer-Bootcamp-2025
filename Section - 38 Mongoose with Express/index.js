const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', {useNewUrlParser: true, useUnifiedTopology: true })
    .then( () => {
        console.log('MONGO CONNECTION OPEN!!!');
    })
    .catch( err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!");
        console.log(err);
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('<h1>This is the Home Page</h1>');
});

app.get('/products', async (req, res) => {
    const products = await Product.find( {} ) //find everything, match every product 
    //It returns a promise like thing which is a thenable
//Async route handler where we await some mongoose operation
    console.log(products);
    res.render('./products/index', { products } );
});

app.get('/products/new', (req, res) => {
    res.render('products/new');
});

app.post('/products', async (req, res) => {
    const newProduct  = new Product(req.body);
    await newProduct.save();    
    console.log(newProduct);
    res.redirect('/products');
});

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    // Product.findOne( { _id: id})
    const product = await Product.findById(id);
    res.render('products/show', { product } );
});

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product } );
});

app.put('/products/')

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000");
});