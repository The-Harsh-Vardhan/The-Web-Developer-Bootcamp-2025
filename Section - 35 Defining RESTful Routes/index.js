const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const { v4 : uuid } = require('uuid');
//Renaming while restructuring to uuid
//Similar to import numpy as np

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//Joining the current directory file with the views path

app.use(express.urlencoded({ extended: true })); //middleware
//This is going to parse the request as URL encoded data

app.use(express.json()); //helps us parse JSON data

app.use(methodOverride('_method')); //method overriding

app.get('/', (req, res) => {
    res.send("<h1>This is the homepage</h1>");
})

//Currently we don't know about databases so let's use an array instead
let comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        id: uuid(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog!'
    },
    {
        id: uuid(),
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        id: uuid(),
        username: 'onlysayswoof',
        comment: 'woof woof'
    }
]

app.get('/comments', (req, res) => {
    res.render('./comments/index', { comments });
});

//We have a get route just to give you the form, then when you submit that form it is going to be submitted as post requst
app.get('/comments/new', (req, res) => {
    res.render('./comments/new');
});

app.post('/comments', (req, res) => {
    const { username, comment } = req.body; //Destructuring req.body into username and comment
    comments.push( {username , comment, id: uuid()} );
    res.redirect('/comments');
});

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find( c => c.id === id); 
    //The id from req.body is in string format and in our array it is integer.
    res.render('./comments/show', {comment} );
});

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find( c => c.id === id );
    res.render('comments/edit', { comment } );
});

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment;
    console.log(newCommentText);
    const foundComment = comments.find( c => c.id === id );
    foundComment.comment = newCommentText;
    res.redirect('/comments');
});

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter((c => c.id != id));
    res.redirect('/comments');
});

app.get('/tacos', (req, res) => {
    res.send("GET /tacos response");
});

app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    res.send(`OK, here are your ${qty} ${meat} tacos!`);
});

app.listen(3000, () => { //starts the server
    //callback function
    console.log("Listening on Port 3000");
});