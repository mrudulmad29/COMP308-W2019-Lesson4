let mongoose = require('mongoose');

// create a model class
let contactSchema = mongoose.Schema({
    name: String,
    description: String,
},
{
    collection: "favourite"
});

module.exports = mongoose.model('fav', contactSchema);