const express = require('express');
const app = express(); //execute express and save the return value to a variable

// app.use( (req, res) => {
//     console.log("HEY WE GOT A REQUEST!!");
//     res.send("HELLO! WE GOT YOUR REQUEST, HERE IS A RESPONSE!");
// })

//Working with Query String
app.get( '/search', (req, res) => {
    const { q } = req.query;
    console.log(`Searching for ${q}`);
    console.log(req.query);
    res.send(`<h1>Search Results for ${q}</h1>`);
});

app.get( '/cats', (req, res) => {
    console.log("MEOW is requested!");
    res.send("MEOW!");
});

app.post( '/cats', (req, res) => {
    console.log("POST REQUEST to /cats");
    res.send("Post request to /cats, this is different from a get request.");
});

app.get( '/r/:subreddit', (req, res) => {
    console.log("GET Request for subreddit!");
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit!</h1>`);
});

app.get( '/r/:subreddit/:postid', (req, res) => {
    console.log("GET Request for subreddit!");
    const { subreddit, postid } = req.params;
    res.send(`<h1>Viewing Post ID: ${postid} on the ${subreddit} subreddit!</h1>`);
});

app.get( '/dogs', (req, res) => {
    console.log("WOOF is requested!");
    res.send("WOOF!");
});

app.get( '/', (req, res) => {
    console.log("Homeage is requested!");
    res.send("<h1>Welcome to the HomePage!</h1>");
});

app.get(/(.*)/, (req, res) => {
    console.log("Unknown path reqeusted:");
    res.send("I don't know that path!");
});

app.listen(3000, () => { //Starts the server
    //callback function
    console.log("LISTENING ON PORT 3000!");
})