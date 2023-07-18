const mongoose = require('mongoose');
const cities = require('./cities');
const {places, descriptors} = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp') 

const db = mongoose.connection;
db.on('error', console.error.bind(console, "Connection error:"));
db.once('open', () => {
    console.log("Database connected");
})

const sample = arr => arr[Math.floor(Math.random() * arr.length)];

const seedDB = async() => {
    await Campground.deleteMany({});
    for(let i = 0; i < 50; i++){
        const random1000 = Math.floor(1000 * Math.random());
        const price = 10 + Math.floor(Math.random() * 20);
        const camp = new Campground({
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            image: 'https://random.imagecdn.app/500/150', // random image generator
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error fuga neque ab eius officia, cum assumenda praesentium ex asperiores deleniti voluptatibus minima repudiandae vero, quia ducimus optio libero dicta maiores!',
            price: price
        });
        await camp.save();
    }
}

seedDB().then(() => {
    db.close();
})