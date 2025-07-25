const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp');

// const productScheme = new mongoose.Schema({
//     name: String,
//     price: Number,
// }); //This is the shorter way or shorthand way


//This is the longer way
const productScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number
    }
})

const Product = mongoose.model('Product', productScheme);

const bike = new Product ({name: "Mountain Bike", price: 599})
bike.save()
    .then( data => {
        console.log("IT WORKED!!");
        console.log(data);
    })
    .catch( err => {
        console.log("OH NO ERROR!");
        console.log(err.errors.name.properties.message);
    })