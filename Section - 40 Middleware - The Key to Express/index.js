const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('common'));
//On every single request, use this middleware called morgan

app.use( (req, res, next) => {
    req.method = 'GET'; //Make every request a get request!! (GET, POST, PUT, PATCH) -> GET
    req.requestTime = Date.now(); //Storing current time and making it accessible across all further routes
    console.log(req.method.toUpperCase(), req.path);
    next();
});


//This works for every verb to that path
app.use('/dogs', (req, res, next) => {
    console.log('I LOVE DOGS!!');
    next();
});

const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === 'chickennugget') {
        next();
    } else {
        res.send('SORRY YOU NEED A PASSWORD!!!');
    }
}

//Setting up Fake Auth
// app.use( (req, res, next) => {
//     //This is going to run for every request, so we need have a query string password = chickennugget in there 
//     //Never send a query string with a password!!!
//     const { password } = req.query;
//     if (password === 'chickennugget') {
//         next();
//     }
//     res.send('SORRY YOU NEED A PASSWORD!!');
// });

// app.use( (req, res, next) => {
//     console.log('This is my First Middleware!');
//     return next(); //Everything will stop if we don't put this line in
//     //By writing next() we are calling whatever that next middleware or route handler is

//     console.log('First Middleware after calling First');
//     //This line will execute at the end of middlewares
// });

// app.use( (req, res, next) => {
//     console.log('This is my Second Middleware!');
//     return next(); //Everything will stop if we don't put this line in
// });

// app.use( (req, res, next) => {
//     console.log('This is my Third Middleware!');
//     return next(); //Everything will stop if we don't put this line in
// });

app.get('/', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`);
    res.send('HOME PAGE');
});

app.get('/dogs', (req, res) => {
    res.send('Woof Woof');
});

//Passing Multiple Functions to out app.get()
app.get('/secret', verifyPassword, (req, res) => { //Using verify password only on /secrets route
    res.send("MY SECRET IS: Sometimes I wear headphones in public so I don't have to talk to anyone!");
});

app.use( (req, res) => { //Any Request, Any Verb
    res.status(404).send('NOT FOUND');
});

app.listen(3000, () => { 
    console.log("LISTENING ON PORT 3000!!");
});