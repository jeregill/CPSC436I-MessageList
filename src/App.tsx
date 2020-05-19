import React from 'react';
import './App.css';
import TopNav from "./components/common/TopNav/TopNav";
import PostCard from "./components/feed/PostCard/PostCard";
import InputCardContainer from "./components/feed/InputCard/InputCardContainer";

function App() {
  return (
      <div>
    <div id="header">
      <TopNav />
    </div>
      <div id='content'>
          <InputCardContainer />
          <PostCard />
      </div>
      </div>
  );
}

export default App;
