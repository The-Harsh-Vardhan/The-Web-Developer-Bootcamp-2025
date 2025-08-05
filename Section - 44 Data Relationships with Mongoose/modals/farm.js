const mongoose = require('mongoose');
const { Schema } = mongoose;


mongoose.connect('mongodb://localhost:27017/relationshipDemo', { useNewUrlParser: true, useUnifiedTopology: true } )
.then( () => {
    console.log("MONGO CONNECTION OPEN!!!");
})
.catch( err => {
    console.log("OH NO MONGO CONNECTION ERROR!!!");
    console.log(err);
})

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Spring', 'Summer', 'Fall', 'Winter']
    }
});

const farmSchema = new mongoose.Schema({
    name: String,
    city: String,
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
    //This datatype comes from Mongoose
    //The 'ref' option is what tells Mongoose which model to use during population. 
    //So using ref we can tell mongoose this is an array of object ids and each one represents or is connected to an actual product model. This allows us to call a method called populate.
})

const Product = mongoose.model('Product', productSchema);
const Farm = mongoose.model('Farm', farmSchema);

Product.insertMany([
    { name: 'Goddess Melon', price: 4.99, season: 'Summer'},
    { name: 'Sugar Baby Watermelon', price: 4.99, season: 'Summer'},
    { name: 'Asparagus', price: 3.99, season: 'Spring'},
])
.then(res => {
    console.log("Products inserted successfully!");
    console.log(res);
})
.catch(err => {
    console.log("Error inserting products:");
    console.log(err);
});

const makeFarm = async() => {
    try {
        console.log("🚜 Creating farm...");
        const farm = new Farm({ name: 'Full Belly Farms', city: 'Guinda, CA' });
        
        console.log("🔍 Looking for Goddess Melon...");
        const melon = await Product.findOne({ name: 'Goddess Melon' });
        
        if (melon) {
            console.log("✅ Found melon:", melon._id);
            farm.products.push(melon);
            await farm.save();
            console.log("✅ Farm saved successfully:");
            console.log(farm);
        } else {
            console.log("❌ Goddess Melon not found!");
        }
        
        // Close the connection after saving
        setTimeout(() => {
            mongoose.connection.close();
            console.log("🔐 Database connection closed");
        }, 1000);
        
    } catch (err) {
        console.log("❌ Error creating farm:", err);
    }
}
makeFarm();

const addProduct = async () => {
    const farm = await Farm.findOne({ name: 'Fully Belly Farms' });
    const watermelon = await Product.findOne({ name: 'Sugar Baby Watermelon' });
    farm.products.push(watermelon);
    await farm.save();
    console.log(farm);
};

Farm.findOne({ name: 'Full Belly Farms' })
    .populate('products')
    .then( farm => console.log(farm))