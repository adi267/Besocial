const mongoose = require('mongoose');
const dd = 'mongodb+srv://aditya:<password>@cluster0.srafe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(dd || 'mongodb://localhost/codeial_development');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function () {
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;