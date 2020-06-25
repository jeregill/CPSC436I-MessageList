export interface State {
    posts: Post[];
    users: User[];
    postsVisible: boolean;
    currentUser: User;
}

export interface Post {
    id: string;
    content: string;
    userID: string;
    likes: number;
    dislikes: number;
    comments: string[];
    commentsVisible: boolean;
    date: string;
}

export interface User {
    id: string;
    name: string;
}