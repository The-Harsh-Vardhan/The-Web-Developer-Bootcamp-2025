const Express = require('express');
const mongoose = require('mongoose');
const app = Express();

mongoose.connection()

app.get('/', (req, res) => {
    res.send("<h1>This is the HomePage</h1>");
});

const userSchema = new mongoose.Schema({
    first: String,
    city: String,
    addresses: [
        {
            //Mongoose is going to treat this a it's own embedded schema
            //So it will be assigned an id, we can turn this off by
            _id: {id: false},
            street: String,
            city: String,
            state: String,
            country: String
        }
    ]
});

const addAddress = async(id) => {
    const user = await User.findById(id);
    user.addresses.push(
        {
            street: '123 Sesame St.',
            city: 'New York',
            state: 'NY',
            country: 'USA'
        }
    )
    const res = await user.save();
    console.log(res);
}

const User = mongoose.mode('User', userSchema);
const makeUser = async () => {
    const u = new User({
        first: 'Harry',
        last: 'Potter',
    })
    //We can also push an address
    u.addresses.push({
        street: '123 Sesame St.',
        city: 'New York',
        state: 'NY',
        country: 'USA'
    })
    const res = await u.save();
    console.log(res);
}

makeUser(); 

app.listen('3000', () => {
    console.log("Starting the Express Server!");
    console.log("LISTENING ON PORT 3000");
});