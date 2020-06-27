import React, {useEffect, useState} from 'react';
import './App.css';
import TopNav from "./components/common/TopNav/TopNav";
import PostsListContainer from "./components/feed/PostCard/PostsListContainer";
import InputCardContainer from "./components/feed/InputCard/InputCardContainer";
import axios from 'axios';
import {postsURI, usersURI} from "./store/endpoints";
import Spinner from "./components/spinner/spinner";
import {useDispatch} from "react-redux";
import {POST_ACTIONS, USER_ACTIONS} from "./actions/actions";

function App() {
    const [postsLoaded, loadPosts] = useState(
        false
    )
    const [usersLoaded, loadUsers] = useState(
        false
    )

    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchPosts() {
            let response = await axios(postsURI);
            loadPosts(true);
            for(let post of response.data) {
                post['commentsVisible'] = false;
            }
            dispatch({type: POST_ACTIONS.FETCH_POSTS, payload: response.data})
        }

        async function fetchUsers(){
            let response = await axios(usersURI);
            dispatch({type: USER_ACTIONS.FETCH_USERS, payload: response.data})
            dispatch({type:USER_ACTIONS.FETCH_CURRENT_USER, payload: response.data[0]});
        }

        fetchPosts().then(() => {
            loadPosts(true);
        });
        fetchUsers().then(()=> {
            loadUsers(true);
        });
    }, [])

    if(postsLoaded && usersLoaded){
        return (
            <div>
                <div id="header">
                    <TopNav />
                </div>
                <div id='content'>
                    <InputCardContainer />
                    <PostsListContainer />
                </div>
                <div className="empty-space"></div>
            </div>
        );
    } else { return (
            <div>
                <Spinner/>
            </div>
        )
    }
}

export default App;
