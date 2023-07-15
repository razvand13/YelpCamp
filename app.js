const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Campground = require('./models/campground');

// no extra options needed here as of Mongoose 6 
// https://www.mongodb.com/community/forums/t/option-usecreateindex-is-not-supported/123048
mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp') 
// To connect: $ mongod; $ nodemon app.js
// To access Mongo Shell: $ mongosh

const db = mongoose.connection;
db.on('error', console.error.bind(console, "Connection error:"));
db.once('open', () => {
    console.log("Database connected");
})

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/makecampground', async (req, res) => {
    const camp = new Campground({title: 'My Backyard', description: 'Cheap camping!'});
    await camp.save(); 
    res.send(camp);
})

app.listen(3000, () => {
    console.log("PORT 3000");
})