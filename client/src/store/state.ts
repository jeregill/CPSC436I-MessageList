export interface State {
    posts: Post[];
    users: User[];
    postsVisible: boolean;
    currentUser: User;
}

export interface Post {
    _id: string;
    content: string;
    userID: string;
    likes: number;
    dislikes: number;
    comments: string[];
    commentsVisible: boolean;
    date: string;
}

export interface User {
    _id: string;
    name: string;
}

