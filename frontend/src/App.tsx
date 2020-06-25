import React, {useEffect, useState} from 'react';
import './App.css';
import TopNav from "./components/common/TopNav/TopNav";
import PostsListContainer from "./components/feed/PostCard/PostsListContainer";
import InputCardContainer from "./components/feed/InputCard/InputCardContainer";
import axios from 'axios';
import {postsURI, usersURI} from "./store/endpoints";
import Spinner from "./components/spinner/spinner";

function App() {
    const [postsLoaded, loadPosts] = useState(
        false
    )
    const [usersLoaded, loadUsers] = useState(
        false
    )

    useEffect(() => {
        async function fetchPosts() {
            let response = await axios(postsURI);
            loadPosts(true);
            console.log(response);
        }

        async function fetchUsers(){
            let response = await axios(usersURI);
            loadUsers(true);
            console.log(response);

        }

        fetchPosts();
        fetchUsers();
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
