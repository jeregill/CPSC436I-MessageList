export const initialUser: User = {
    id: 1,
    name: 'Larry David',
    profilePhoto: 'Empty',
    posts: [],
    followers: [],
    following: []
}


export interface State {
    posts: Post[];
    postsVisible: boolean;
    currentUser: User;
}

export interface Post {
    id: number;
    content: string;
    user: string;
    likes: number;
    dislikes: number;
    comments: string[];
    commentsVisible: boolean;
}

export interface User {
    id?: number;
    name: string;
    profilePhoto: string;
    posts: Post[];
    followers: User[];
    following: User[];
}