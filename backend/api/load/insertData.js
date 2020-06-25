// DATA IS ALREADY IN THE DB

conn = new Mongo("mongodb+srv://m001-student:m001-mongodb-basics@sandbox-a3hj6.mongodb.net/MessageListApp?retryWrites=true&w=majority");
db = conn.getDB("MessageListApp");

db.posts.insertMany([
    {userID:'1',likes:4,dislikes:1, date: 'March 12, 2020 at 5:37 PM' , comments:['lol jokes','hahahaha'],content:'A Date Is An Experience You Have With Another Person That Makes You Appreciate Being Alone'},
    {userID:'2',likes:3,dislikes:10, date: 'April 15, 2020 at 9:45 AM' , comments:['nah'],content:'People don\'t turn down money! It\'s what separates us from the animals.'},
    {userID:'3',likes:10,dislikes:10, date: 'April 19, 2020 at 12:02 AM' , comments:['same'],content:'I love a good nap. Sometimes it\'s the only thing getting me out of bed in the morning'},
    {userID:'4',likes:123,dislikes:1, date: 'May 1, 2020 at 4:31 PM' , comments:['omg great idea'],content:'You know, I got a great idea for a cologne. \'The Beach\'. You spray it on and you smell like you just came home from the beach.'},
    {userID:'2',likes:2,dislikes:3, date: 'June 3, 2020 at 8:33 PM' , comments:['i love books'],content:'What is this obsession people have with books? They put them in their houses—like they\'re trophies. What do you need it for after you read it?'}
]);

db.users.insertMany([
    {
        name: 'Larry David'
    },
    {
        name: 'Jerry Seinfeld'
    },
    {
        name: 'Jason Alexander'
    },
    {
        name: 'Michael Richards'
    }
]);

conn.close();