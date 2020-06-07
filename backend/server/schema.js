const mongoose = require('mongoose');

const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox-a3hj6.mongodb.net/MessageListApp?retryWrites=true&w=majority"
let Schema = mongoose.Schema;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("MongoDB Connected…");
    })
    .catch(err => console.log(err));

const MessageSchema = new Schema({
    id: Number,
    content: String,
    userID: Number,
    likes: Number,
    dislikes: Number,
    comments: Array,
    commentsVisible: Boolean,
    date: String
})

const UserSchema = newSchema({
    id: Number,
    name: String,
    profilePhoto: String
})

