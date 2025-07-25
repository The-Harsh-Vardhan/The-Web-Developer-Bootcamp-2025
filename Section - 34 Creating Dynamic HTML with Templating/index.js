const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./views/data.json'); 

app.use(express.static(path.join(__dirname, 'public')));
//We are serving the entire contents of the public directory

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
//Joining the current directory file with the "/views" path

app.get('/', (req, res) => {
    res.render('home.ejs');
});

app.get('/cats', (req, res) => {
    const cats = [ //Pretend it's coming from a database
        'Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston'
    ];
    res.render('cats', { cats } )
});

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random.ejs', { rand : num });
    //rand - as accessible in the corresponding .ejs file
    //num - as available in the js file
});

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    if(data) {
        res.render('subreddit.ejs', { ...data } ); 
        //Spreading data allows access to individual properties in subreddit.ejs
    } else {
        res.render("notfound", { subreddit });
    }
});

app.listen(3000, () => { //Starts the Server
    //Callback Function
    console.log("Listening on Port 3000");
});