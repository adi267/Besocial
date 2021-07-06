const mongoose = require('mongoose');
const dd = 'mongodb+srv://aditya:1234@cluster0.rdqla.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(process.env.MONGO_DB || 'mongodb://localhost/codeial_development');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function () {
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;