const mongoose = require('mongoose');
const dburl='mongodb+srv://AdityaAgrawal27:Aditya123@cluster0.cyeff.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' ;
mongoose.connect('dburl');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;