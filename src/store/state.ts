export const initialUser: User = {
    id: 1,
    name: 'Larry David',
    profilePhoto: 'Empty',
    posts: [],
    followers: [],
    following: []
}

// state of object
export const initialState: State = {
    posts: [],
    currentUser: initialUser
}

export interface State {
    posts: Post[];
    currentUser: User;
}
export interface Post {
    id?: number;
    content: string;
    user: string;
    likes: number;
    comments: Comment[];
    visible: boolean;
}

export interface User {
    id?: number;
    name: string;
    profilePhoto: string;
    posts: Post[];
    followers: User[];
    following: User[];
}