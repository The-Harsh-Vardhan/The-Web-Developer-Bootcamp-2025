const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp')
//Where to find mongodb and which database to use (currently using 'test' db)
    .then( () => {
        console.log("CONNECTION OPEN!!");
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!");
        console.log(err);
    })

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
//     console.log("CONNECTION OPEN!!!");
// })

// {
//     title: 'Amadeus',
//     year: 1986,
//     score: 9.2,
//     rating: 'R'
// }

//This is just a schema on the JS side of things, this has nothing to do with the Database
const movieSchema = new mongoose.Schema( {
    title: String,
    year: Number,
    score: Number,
    rating: String
});

const Movie = mongoose.model('Movie', movieSchema); //Model class name movie
//mongoose will take the name from this and create a collection by lowercaisng the first letter and pluralising the name, so in this case the collection made will be 'movies'

//Now we can make instances of our Movie class and save them to our database

const amadeus = new Movie( {
    title: 'Amadeus', 
    year: 1986, 
    score: 9.2, 
    rating: 'R'
} );
