let mongoose = require('mongoose');

let postSchema = mongoose.Schema({
    title: { type: String },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'categories' },
    image: { type: String },
    date: { type: Date, default: function(){ return Date.now() } },
    time: { type: String },
    username: { type: String },
    firstname: { type: String },
    lastname: { type: String },
    likes: { type: Array },
    comment: { type: Array },
    commentCount: { type: Number },
    likesCount: { type: Number },

})
module.exports = mongoose.model('post', postSchema);