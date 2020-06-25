const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    content: String,
    userID: Number,
    likes: Number,
    dislikes: Number,
    comments: Array,
    date: String
});

module.exports = mongoose.model("Post", PostSchema);



