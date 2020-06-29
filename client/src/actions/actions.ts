import {Post, User} from "../store/state";
import axios from 'axios';
import {postsURI} from "../utils/endpoints";

export interface action {
    type: POST_ACTIONS | USER_ACTIONS;
    payload: any
}

export enum POST_ACTIONS {
    ADD_POST= 'ADD_POST',
    DELETE_POST = 'DELETE_POST',
    TOGGLE_POSTS ='TOGGLE_POSTS',
    LIKE_POST = 'LIKE_POST',
    DISLIKE_POST = 'DISLIKE_POST',
    COMMENT_POST = 'COMMENT_POST',
    TOGGLE_COMMENTS = 'TOGGLE_COMMENTS',
    EDIT_POST = 'EDIT_POST',
    FETCH_POSTS = 'FETCH_POSTS'
}

export enum USER_ACTIONS {
    ADD_USER = 'ADD_USER',
    DELETE_USER = 'DELETE_USER',
    FETCH_USERS = 'FETCH_USERS',
    FETCH_CURRENT_USER = 'FETCH_CURRENT_USER'
}

// Action creators
export function likePost(id: string): action {
    return {
        type: POST_ACTIONS.LIKE_POST,
        payload: id
    }
}

export function dislikePost(id: string): action {
    return {
        type: POST_ACTIONS.DISLIKE_POST,
        payload: id
    }
}

export function addPost(content: Post): action {
    return {
        type: POST_ACTIONS.ADD_POST,
        payload: {...content, id: '6'}
    }
}

export function editPost(editedContent: string, id: string): action {
    return {
        type: POST_ACTIONS.EDIT_POST,
        payload: {editedContent, id}
    }
}

export function deletePost(id: string): action {
    return {
        type: POST_ACTIONS.DELETE_POST,
        payload: id
    }
}

export function commentPost(id: string, commentContent:string): action {
    return {
        type: POST_ACTIONS.COMMENT_POST,
        payload: {id, commentContent}
    }
}

export function toggleComments(id: string): action {
    return {
        type: POST_ACTIONS.TOGGLE_COMMENTS,
        payload: id
    }
}

export function togglePosts(): action {
    return {
        type: POST_ACTIONS.TOGGLE_POSTS,
        payload: null
    }
}

export function fetchPosts(posts: Post[]): action {
    return {
        type: POST_ACTIONS.FETCH_POSTS, payload: posts
    }
}

export function fetchUsers(users: User[]): action {
    return {
        type: USER_ACTIONS.FETCH_USERS, payload: users
    }
}

export function fetchCurrentUser(user: User): action {
    return {
        type: USER_ACTIONS.FETCH_CURRENT_USER, payload: user
    }
}

export function addPostAsync(post: Post){
    const postToSend = {
        content: post.content,
        userID: post.userID,
        likes: post.likes,
        dislikes: post.dislikes,
        comments: post.comments,
        date: post.date
    }
    return (dispatch: any) => {
        axios.post(postsURI, postToSend).then((response) => {
            const postReceived = response.data;
            postReceived['commentsVisible'] = false;
            dispatch({type: POST_ACTIONS.ADD_POST, payload: postReceived})
            }
        );
    }
}

export function deletePostAsync(id: string){
    return (dispatch: any) => {
        axios.delete(postsURI + '/' + id).then((response) => {
                dispatch({type: POST_ACTIONS.DELETE_POST, payload: id})
            }
        );
    }
}

export function editPostAsync(id: string, editedContent: string, date: string){
    const body = {
        editedContent: editedContent,
        date: date
    }
    return (dispatch: any) => {
        axios.patch(postsURI+ '/edit/' + id , body).then((response) => {
                dispatch({type: POST_ACTIONS.EDIT_POST, payload: {id: id, editedContent: editedContent, date: date}})
            }
        );
    }
}

export function commentPostAsync(id: string, comment: string){
    const body = {
        comment: comment,
    }
    return (dispatch: any) => {
        axios.patch(postsURI+ '/comment/' + id , body).then((response) => {
                dispatch({type: POST_ACTIONS.COMMENT_POST, payload: {id: id, commentContent: comment}})
            }
        );
    }
}

export function likePostAsync(id: string){
    return (dispatch: any) => {
        axios.patch(postsURI+ '/like/' + id).then((response) => {
                dispatch({type: POST_ACTIONS.LIKE_POST, payload: id})
            }
        );
    }
}

export function dislikePostAsync(id: string){
    return (dispatch: any) => {
        axios.patch(postsURI+ '/dislike/' + id).then((response) => {
                dispatch({type: POST_ACTIONS.DISLIKE_POST, payload: id})
            }
        );
    }
}