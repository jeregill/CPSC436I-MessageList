import {Post} from "../store/state";

export interface action {
    type: POST_ACTIONS | USER_ACTIONS;
    payload: any
}

export enum POST_ACTIONS {
    ADD_POST= 'ADD_POST',
    DELETE_POST = 'DELETE_POST',
    TOGGLE_VISIBILITY_POST ='TOGGLE_VISIBILITY_POST'
}

export enum USER_ACTIONS {
    ADD_USER = 'ADD_USER',
    DELETE_USER = 'DELETE_USER',
}

let postID: number = 0;

// Action creators
export function addPost(content: Post): action {
    return {
        type: POST_ACTIONS.ADD_POST,
        payload: {...content, id: ++postID}
    }
}

export function deletePost(id: number): action {
    return {
        type: POST_ACTIONS.DELETE_POST,
        payload: id
    }
}
export function toggleVisibilityPost(id: number): action {
    return {
        type: POST_ACTIONS.TOGGLE_VISIBILITY_POST,
        payload: id
    }
}