conn = new Mongo("mongodb+srv://m001-student:m001-mongodb-basics@sandbox-a3hj6.mongodb.net/MessageListApp?retryWrites=true&w=majority");
db = conn.getDB("MessageListApp");

db.posts.drop()
db.users.drop();

conn.close();