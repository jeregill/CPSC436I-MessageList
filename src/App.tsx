import React from 'react';
import './App.css';
import TopNav from "./components/common/TopNav/TopNav";
import InputCard from "./components/feed/InputCard/InputCard";

function App() {
  return (
      <div>
    <div id="header">
      <TopNav />
    </div>
      <div id='content'>
          <InputCard />
      </div>
      </div>
  );
}

export default App;
