const mongoose = require('mongoose');
const cities = require('./cities');
const {places, descriptors} = require('./seedHelpers');
const Campground = require('../models/campground');

const dbUrl = process.env.DB_URL || 'mongodb://127.0.0.1:27017/yelp-camp'; // DB_URL has some issues when seeding
mongoose.connect(dbUrl); 

const db = mongoose.connection;
db.on('error', console.error.bind(console, "Connection error:"));
db.once('open', () => {
    console.log("Database connected");
})

const sample = arr => arr[Math.floor(Math.random() * arr.length)];

const seedDB = async() => {
    await Campground.deleteMany({});
    for(let i = 0; i < 300; i++){
        const random1000 = Math.floor(1000 * Math.random());
        const price = 10 + Math.floor(Math.random() * 20);
        const camp = new Campground({
            // author: '64d78cbeaced5267aa462183', // user: 'tim';   password: 'tim';   local DB
            author: '64e2098f248fe55efd6c22bd', // user: 'owner'; password: 'owner'; cloud DB
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            images: [
                {
                    url: 'https://res.cloudinary.com/dtop5i8kl/image/upload/v1692520719/YelpCamp/ie5smhepl6wifcdqpmgq.jpg',
                    filename: 'YelpCamp/ie5smhepl6wifcdqpmgq'
                },
                {
                    url: 'https://res.cloudinary.com/dtop5i8kl/image/upload/v1692359599/YelpCamp/dwrilrp9ddcsto7uewir.jpg',
                    filename: 'YelpCamp/dwrilrp9ddcsto7uewir'
                }
            ],
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error fuga neque ab eius officia, cum assumenda praesentium ex asperiores deleniti voluptatibus minima repudiandae vero, quia ducimus optio libero dicta maiores!',
            price: price,
            geometry: {
                type: 'Point',
                coordinates: [cities[random1000].longitude, cities[random1000].latitude]
            }
        });
        await camp.save();
    }
}

seedDB().then(() => {
    console.log('Seeding complete');
    db.close();
})
