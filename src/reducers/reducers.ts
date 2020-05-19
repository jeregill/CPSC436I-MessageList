import {initialState, initialUser, Post, State, User} from "../store/state";
import {action, POST_ACTIONS, USER_ACTIONS} from "../actions/actions";
import {combineReducers} from "redux";

function posts(state: Post[]=[], action: any) {
    // only dealing with the posts, so state here refers to the Post[] property
    switch(action.type) {
        case POST_ACTIONS.ADD_POST:
            return [
                    ...state, action.payload
                ];
        case POST_ACTIONS.DELETE_POST:
            return state.filter((post, index) => {
                    return post.id !== action.payload;
                });
        case POST_ACTIONS.TOGGLE_VISIBILITY_POST:
            return state.map((post, index) => {
                    if (index === action.payload) {
                        return Object.assign({}, post, {
                            visible: !post.visible
                        })
                    }
                    return post;
                });
        default:
            return state;
    }
}

function currentUser(state: User= initialUser, action: any) {
    // only dealing with the current user, so state here refers to the currentUser property
    switch(action.type) {
        case USER_ACTIONS.ADD_USER:
            return Object.assign({}, state, {});
        case USER_ACTIONS.DELETE_USER:
            return Object.assign({}, state, {});
        default:
            return state;
    }
}

const socialMediaApp = combineReducers({
    posts,
    currentUser
});

export default socialMediaApp;