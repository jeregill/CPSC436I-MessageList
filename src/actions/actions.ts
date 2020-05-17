import {Post} from "../store/state";

export interface action {
    type: POST_ACTIONS | USER_ACTIONS;
    body: any
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


// Action creators
export function addPost(content: Post): action {
    return {
        type: POST_ACTIONS.ADD_POST,
        body: content
    }
}

export function deletePost(id: number): action {
    return {
        type: POST_ACTIONS.DELETE_POST,
        body: id
    }
}
export function toggleVisibilityPost(id: number): action {
    return {
        type: POST_ACTIONS.TOGGLE_VISIBILITY_POST,
        body: id
    }
}