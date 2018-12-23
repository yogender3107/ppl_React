let mongoose = require('mongoose');
let categorySchema = mongoose.Schema({
    category: { type: String,unique:true},
    image: { type: String },
   
})
module.exports = mongoose.model('categories', categorySchema);