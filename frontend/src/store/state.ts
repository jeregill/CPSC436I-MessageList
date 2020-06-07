export interface State {
    posts: Post[];
    users: User[];
    postsVisible: boolean;
    currentUser: User;
}

export interface Post {
    id: number;
    content: string;
    userID: number;
    likes: number;
    dislikes: number;
    comments: string[];
    commentsVisible: boolean;
    date: string;
}

export interface User {
    id: number;
    name: string;
    profilePhoto: string;
    followers: User[];
    following: User[];
}