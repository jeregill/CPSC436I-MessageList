import React from 'react';
import './App.css';
import TopNav from "./components/common/TopNav/TopNav";
import PostsListContainer from "./components/feed/PostCard/PostsListContainer";
import InputCardContainer from "./components/feed/InputCard/InputCardContainer";

function App() {
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
}

export default App;
