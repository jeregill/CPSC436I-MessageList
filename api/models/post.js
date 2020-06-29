const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    content: String,
    userID: String,
    likes: Number,
    dislikes: Number,
    comments: Array,
    date: String
});

module.exports = mongoose.model("Post", PostSchema);



