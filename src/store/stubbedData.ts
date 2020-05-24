/* TODO: add stubbed posts and users here */
import { Post, User} from "./state";

export const initialUser: User = {
    id: 1,
    name: 'Larry David',
    profilePhoto: 'Empty',
    posts: [],
    followers: [],
    following: []
}

export const user2: User = {
    id: 2,
    name: 'Jerry Seinfeld',
    profilePhoto: 'Empty',
    posts: [],
    followers: [],
    following: []
};

export const user3: User = {
    id: 3,
    name: 'Jason Alexander',
    profilePhoto: 'Empty',
    posts: [],
    followers: [],
    following: []
};

export const user4: User = {
    id: 4,
    name: 'Michael Richards',
    profilePhoto: 'Empty',
    posts: [],
    followers: [],
    following: []
};

export const initialUsers: User[] = [initialUser, user2, user3, user4];

export const initialPosts: Post[] = [
    {userID:1,id:1,likes:4,dislikes:1,comments:['lol jokes','hahahaha'],commentsVisible:false,content:'A Date Is An Experience You Have With Another Person That Makes You Appreciate Being Alone'},
    {userID:2,id:2,likes:3,dislikes:10,comments:['nah'],commentsVisible:false,content:'People don\'t turn down money! It\'s what separates us from the animals.'},
    {userID:3,id:3,likes:10,dislikes:10,comments:['same'],commentsVisible:false,content:'I love a good nap. Sometimes it\'s the only thing getting me out of bed in the morning'},
    {userID:4,id:4,likes:123,dislikes:1,comments:['omg great idea'],commentsVisible:false,content:'You know, I got a great idea for a cologne. \'The Beach\'. You spray it on and you smell like you just came home from the beach.'},
    {userID:2,id:5,likes:2,dislikes:3,comments:['i love books'],commentsVisible:false,content:'What is this obsession people have with books? They put them in their houses—like they\'re trophies. What do you need it for after you read it?'}];